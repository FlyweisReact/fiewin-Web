import React from "react";
import rupee from "../Assets/rupee.svg";
import back from "../Assets/back.svg";
import { Link } from "react-router-dom";

const finicialdetail = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full finical-main-div bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/profile">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="w-[100px] text-center">Transactions</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center mt-5 finical-card-main">
            <div className="bg-[#FFF3D5] finical-card w-[450px] h-[68px] rounded-lg flex items-center justify-between ">
              <div className="flex gap-2 ml-2">
                <img src={rupee} alt="" className="w-8" />
                <div className="flex flex-col ">
                  <div>Wheelocity order expense</div>
                  <div>12-03 04:45</div>
                </div>
              </div>
              <div className="font-bold mr-2">₹20</div>
            </div>
            <div className="bg-[#FFF3D5] finical-card w-[450px] h-[68px] rounded-lg flex items-center justify-between ">
              <div className="flex gap-2 ml-2">
                <img src={rupee} alt="" className="w-8" />
                <div className="flex flex-col ">
                  <div>Wheelocity order expense</div>
                  <div>12-03 04:45</div>
                </div>
              </div>
              <div className="font-bold mr-2">₹20</div>
            </div>
            <div className="bg-[#FFF3D5] finical-card w-[450px] h-[68px] rounded-lg flex items-center justify-between ">
              <div className="flex gap-2 ml-2">
                <img src={rupee} alt="" className="w-8" />
                <div className="flex flex-col ">
                  <div>Wheelocity order expense</div>
                  <div>12-03 04:45</div>
                </div>
              </div>
              <div className="font-bold mr-2">₹20</div>
            </div>
            <div className="bg-[#FFF3D5] finical-card w-[450px] h-[68px] rounded-lg flex items-center justify-between ">
              <div className="flex gap-2 ml-2">
                <img src={rupee} alt="" className="w-8" />
                <div className="flex flex-col ">
                  <div>Wheelocity order expense</div>
                  <div>12-03 04:45</div>
                </div>
              </div>
              <div className="font-bold mr-2">₹20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default finicialdetail;
