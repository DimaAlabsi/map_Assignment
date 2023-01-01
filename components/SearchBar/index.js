import React from "react";
import Search from "../../assets/svgs/Search";

export default function index({ setCityName, handleSubmit }) {
  return (
    <div className="">
      <form
        className=" md:w-[500px] lg:w-[670px] xxl:w-[800px] m-auto my-3 rounded-[8px]"
        onSubmit={handleSubmit}
      >
        <div className="relative grid grid-cols-10 rounded-[8px] border-[2px] border-[#FFFFFF]">
          <div className="col-span-8 ">
            <input
              type="search"
              className="block border border-[red]  focus:ring-0  p-4 pl-3 w-full
        
                text-sm text-gray-900 bg-[#FFFFFF]  border-none outline-none"
              placeholder="Search"
              required
              pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
              onChange={(e) => setCityName(e.target.value)}
            />
          </div>

          <div className=" col-span-2">
            <button
              type="submit"
              className="text-white rounded-[8px] h-full w-full flex justify-center items-center"
            >
              <Search />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
