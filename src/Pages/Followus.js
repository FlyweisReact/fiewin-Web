import React from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import telegram from "../Assets/telegram.svg";

const Followus = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full followus-main bg-[#9520FD] md:w-[400px] flex flex-col">
        <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/profile">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="w-[100px] text-center">Follow Us</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-xl text-white font-bold text-center mt-5">
              Follow us on <br />
              Telegram
            </div>
            <div className="flex justify-center">
              <img src={telegram} alt="" className="w-[100px]" />
            </div>
            <div className="flex justify-center">
              <button className="w-[300px] h-[70px] follow-btn bg-[#FFB800] text-white rounded-full font-bold text-xl">
                Go To This Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followus;
