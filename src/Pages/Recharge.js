import React from "react";
import back from "../Assets/back.svg";
import { Link } from "react-router-dom";

const Recharge = () => {
  const selectedAmount = localStorage.getItem("selectedAmount");

  return (
    <div className="flex justify-center  h-[100vh] ">
      <div className="bg-white recharge-main">
        <div className="bg-[#FFB800] h-[56px] w-[500px] flex justify-between items-center pl-2 pr-2  ">
          <div>
            <Link to="/wallet">
              <img src={back} alt="" />
            </Link>
          </div>
          <div className="text-white font-semibold text-xl">Recharge</div>
          <div className="text-white font-semibold text-l">Help</div>
        </div>
        <div className="h-[80px] bg-[#FFC83C] p-4 w-[500px]">
          <div className="text-white font-semibold">Recharge Amount</div>

          <div>
            ₹
            <span className="text-2xl text-white font-semibold">
              {selectedAmount}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <div>
              UPID:{" "}
              <span className="text-[#FFB800]">
                bharatpe0123456789@yesbankltd
              </span>
            </div>
            <div className="w-[61px] h-[24px] bg-[#FFB800] text-white flex justify-center items-center rounded">
              change
            </div>
          </div>
          <div className="font-bold mt-5">Select Payment Method</div>
          <div className="w-[468px] h-[210px] mt-5 rounded border-slate-900 border"></div>
          <div className="mt-5">
            <span className="font-semibold">Tips</span>
            <div className="w-[430px] mt-2">
              Welcome to use the quick recharge mode, please use APP to complete
              the payment of ₹{selectedAmount}.
            </div>
            <div className="w-[430px] mt-2">
              The transaction funds are guaranteed by the FieWin platform
              throughout the process, which is very safe.
            </div>
            <div className="w-[430px] mt-2">
              Please do not includes any words in remarks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
