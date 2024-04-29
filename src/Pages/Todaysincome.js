import React from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
const Todaysincome = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full followus-main bg-white md:w-[400px] flex flex-col">
          <div className="relative text-xl font-semibold text-white">
            <div className="flex justify-between items-center bg-[#FFB800] h-[60px] ">
              <div className="w-[100px]">
                <Link to="/Inviteandearn">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>

              <div className="text-center">Today's Income</div>
              <div className="w-[100px]"></div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-10">
              <div className="bg-[#FFF1CC] w-[450px] h-[56px] income-card  rounded-lg flex items-center justify-between text-black pl-2 pr-2">
                <div className="text-[15px]">2024-03-21</div>
                <div className="text-[15px]">+1272.12</div>
              </div>
              <div className="bg-[#FFF1CC] w-[450px] h-[56px] income-card  rounded-lg flex items-center justify-between text-black pl-2 pr-2">
                <div className="text-[15px]">2024-03-21</div>
                <div className="text-[15px]">+1272.12</div>
              </div>
              <div className="bg-[#FFF1CC] w-[450px] h-[56px] income-card  rounded-lg flex items-center justify-between text-black pl-2 pr-2">
                <div className="text-[15px]">2024-03-21</div>
                <div className="text-[15px]">+1272.12</div>
              </div>
              <div className="bg-[#FFF1CC] w-[450px] h-[56px] income-card  rounded-lg flex items-center justify-between text-black pl-2 pr-2">
                <div className="text-[15px]">2024-03-21</div>
                <div className="text-[15px]">+1272.12</div>
              </div>
              <div className="bg-[#FFF1CC] w-[450px] h-[56px] income-card  rounded-lg flex items-center justify-between text-black pl-2 pr-2">
                <div className="text-[15px]">2024-03-21</div>
                <div className="text-[15px]">+1272.12</div>
              </div>
              <div className="bg-[#FFF1CC] w-[450px] h-[56px] income-card rounded-lg flex items-center justify-between text-black pl-2 pr-2">
                <div className="text-[15px]">2024-03-21</div>
                <div className="text-[15px]">+1272.12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todaysincome;
