import Head from "next/head";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { errorToast, successToast } from "../utils/toasts";
import { Typography, CircularProgress, Box } from "@mui/material";
import BackArrow from "../assets/svgs/BackArrow";

const containerStyle = {
  width: "400px",
  height: "400px",
};

export default function Googlemap() {
  const [map, setMap] = useState(null);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  async function getLocation(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.get(
        `https://api.locationiq.com/v1/autocomplete.php?key=pk.b36e8465a377420752a9b1cc2f449742&q=${cityName}`
      );
      setLat(resp.data[0].lat);
      setLon(resp.data[0].lon);
      setLoading(false);
      successToast("Success processing");
    } catch (err) {
      errorToast(err.message ? err.message : "Not valid location");
      setLoading(false);
    }
  }
  useEffect(() => {
    setMap(map);
  }, [lon, lat]);
  return (
    <>
      <Head>
        <title>google map | Location Map Service</title>
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
        <div className=" grid justify-center items xsm:max-w-[90%] md:max-w-[100rem] m-auto">
          <SearchBar handleSubmit={getLocation} setCityName={setCityName} />

          <LoadScript
            googleMapsApiKey={process.env.NEXT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: Number(lat), lng: Number(lon) }}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
          <a className=" flex my-9 items-center" href="/">
            {" "}
            <BackArrow />
            <span className=" m-2 font-[300] text-[16px] ">
              Back to the home page
            </span>
          </a>
        </div>
      )}

      <ToastContainer />
    </>
  );
}
