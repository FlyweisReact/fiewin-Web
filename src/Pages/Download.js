import React from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";

const Download = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full bg-white md:w-[400px] download-div flex flex-col">
          <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/profile">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="w-[100px] text-center">Download</div>
              <div className="w-[100px]"></div>
            </div>
          </div>

          <div className=" download-bg">
            <div className="flex flex-col justify-between items-center h-[100%]">
              <div className="flex flex-col items-center mt-4">
                <div className="text-white">Welcome To FieWin</div>
                <div className="text-white">
                  This application has features to gernerate money.
                </div>
              </div>
              <div className="mb-4">
                <button className="bg-[#F2A60C] w-[300px] h-[50px] text-white font-bold py-2 px-4 rounded">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
