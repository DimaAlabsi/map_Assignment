import React, { useEffect } from "react";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

export default function index() {
    const buttonStyle =
        "absolute  xsm:w-[5rem] md:w-[9rem] top-20 right-3 z-[99] bg-slate-600  xsm:p-1 md:p-2 text-white rounded-[8px]";

    useEffect(() => {
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: "map",
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        document.getElementById("zoom-out").onclick = function () {
            const view = map.getView();
            const zoom = view.getZoom();
            view.setZoom(zoom - 1);
        };

        document.getElementById("zoom-in").onclick = function () {
            const view = map.getView();
            const zoom = view.getZoom();
            view.setZoom(zoom + 1);
        };
    }, []);

    return (
        <div className="max-w-[100rem] m-auto">
            <div id="map" className="map relative">
                <button style={{ top: "5rem" }} className={buttonStyle} id="zoom-out">
                    Zoom out
                </button>
                <button style={{ top: "1rem" }} className={buttonStyle} id="zoom-in">
                    Zoom in
                </button>
            </div>
        </div>
    );
}
