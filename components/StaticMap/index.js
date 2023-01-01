import React from "react";

export default function index({ imgURL, title }) {
  return (
    <div className="grid justify-center items-center">
      <img
        src={imgURL}
        alt="location map"
        className="w-full m-auto rounded-[8px] my-12"
      />
      <h3 className="font-[300] xsm:text-[18px] md:text-[24px] m-auto  border-b  ">
        {title}
      </h3>
    </div>
  );
}
