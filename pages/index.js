import Head from "next/head";
import { useState, useRef } from "react";
import axios from "axios";
import Header from "../components/Header";
import BaseMap from "../components/BaseMap";
import StaticMap from "../components/StaticMap";
import SearchBar from "../components/SearchBar";
import DateTime from "../components/DateTime";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { errorToast, successToast } from "../utils/toasts";
import { Typography, CircularProgress, Box } from "@mui/material";
import BackArrow from "../assets/svgs/BackArrow";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [staticMap, setStaticMap] = useState("");
  async function getLocation(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.get(
        `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.NEXT_APP_LOCATIONIQ_API_KEY}&q=${cityName}`
      );
      setLat(resp.data[0].lat);
      setLon(resp.data[0].lon);
      setStaticMap(
        `https://maps.locationiq.com/v2/staticmap?key=${process.env.NEXT_APP_LOCATIONIQ_API_KEY}&center=${lat},${lon}&zoom=20&size=1200x400&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`
      );

      setLoading(false);
      successToast("Success processing");
    } catch (err) {
      errorToast(err.message ? err.message : "Not valid location");
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Location Map Service</title>
        <meta
          name="title"
          property="og:title"
          content="location map service"
          key="title"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {loading ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress color="success" />
          <Typography variant="h10" sx={{ m: 2 }}>
            fetching new locations...
          </Typography>
        </Box>
      ) : (
        <div className=" xsm:max-w-[90%] md:max-w-[100rem] m-auto">
          <Header />
          <div className="  mb-9 ">
            <SearchBar handleSubmit={getLocation} setCityName={setCityName} />
          </div>
          {staticMap ? (
            <div>
              <StaticMap imgURL={staticMap} title={cityName} />
              <button
                onClick={() => setStaticMap(false)}
                className="text-center flex items-center w-[130px] h-fit p-2 my-9   text-white"
              >
                <BackArrow />
                <span className=" m-2 font-[300] text-[16px] ">Go to map</span>
              </button>
            </div>
          ) : (
            <BaseMap />
          )}
        </div>
      )}
      <DateTime />
      <Footer />
      <ToastContainer />
    </>
  );
}
