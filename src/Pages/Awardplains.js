/** @format */

import React from "react";
import back from "../Assets/back.svg";
import { Link } from "react-router-dom";
import comingsoon from "../Assets/comingsoon.svg";

const Awardplains = () => {
  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full bg-[#9520FD] ranking-main-div md:w-[400px] flex flex-col">
          <div className="flex justify-between items-center bg-[#38B6FF] h-[80px] text-xl font-semibold text-white">
            <div>
              <Link to={-1}>
                <img src={back} alt="" className="ml-2" />
              </Link>
            </div>
            <div> Agent Millionaire Award Plan</div>
            <div></div>
          </div>

          <div className="flex justify-center ">
            <img src={comingsoon} alt="" />
          </div>
          <div className="text-white text-center">
            We are preparing generous awards
            <br /> for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awardplains;
