import React from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import support from "../Assets/support.svg";
import mail from "../Assets/mail.svg";
import chatwithus from "../Assets/chatwithus.svg";
import supportvoctor from "../Assets/supportvactor.svg";
const Support = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full support-main bg-[#9520FD] md:w-[400px] flex flex-col">
        <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/profile">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="w-[100px] text-center">Support</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <img src={support} alt="" />
          </div>
          <div className="text-center text-white font-bold">
            Hello, How can we <br />
            Help you?
          </div>
          <div className="flex  flex-col items-center gap-4 justify-center mt-10">
            <div className="w-[400px] bg-white support-div h-[70px] flex items-center justify-between rounded-lg">
              <div className="flex gap-2">
                <img src={mail} alt="" className="ml-2" />
                <div className="flex flex-col">
                  <span>Write Us</span>
                  <span className="text-[#FFB800]">
                    fiewin.recharge@support.com
                  </span>
                </div>
              </div>
              <div className="mr-5">
                <img src={supportvoctor} alt="" />
              </div>
            </div>
            <div className="w-[400px] bg-white support-div h-[70px] flex items-center justify-between rounded-lg">
              <div className="flex gap-2 items-center">
                <img src={chatwithus} alt="" className="ml-2" />
                <div className="flex flex-col">
                  <span>Chat with Us</span>
                </div>
              </div>
              <div className="mr-5">
                <img src={supportvoctor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
