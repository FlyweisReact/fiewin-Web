import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import { GrCompliance } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
const Complaint = () => {
  const [complainttrack, setcomplainttrack] = useState(false);
  return (
    <>
      {complainttrack ? (
        <>
          <div className=" h-screen flex justify-center">
            <div className="grid place-items-center">
              <div className="lg:w-[500px] lg:h-full complaint-main bg-[#9520FD] md:w-[400px] flex flex-col">
                <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
                  <div className=" finical-tran flex justify-between items-center mt-4">
                    <div className="w-[100px]">
                      <Link to="/profile">
                        <img src={back} alt="" className="ml-2" />
                      </Link>
                    </div>
                    <div className="w-[100px] text-center">Complaint</div>
                    <div className="w-[100px]"></div>
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <div className="flex complaint-header">
                    <div className="w-[225px] h-[50px] bg-[#FFB800] text-white font-semibold flex justify-center items-center rounded-l-lg">
                      Complaints
                    </div>
                    <div className="w-[225px] h-[50px] bg-white flex justify-center font-semibold items-center rounded-r-lg">
                      Track
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <div className="w-[450px] bg-white h-[70px] rounded-lg p-2 complaint-text ">
                    <div className="flex justify-between">
                      <div>Complaint:</div>
                      <div className="text-[#FFAC33] text-[12px]">pending</div>
                    </div>
                    <div>
                      App is not working properly, Getting issue while loading
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-slate-100 h-screen flex justify-center">
            <div className="grid place-items-center">
              <div className="lg:w-[500px] lg:h-full complaint-main bg-[#9520FD] md:w-[400px] flex flex-col">
                <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
                  <div className=" finical-tran flex justify-between items-center mt-4">
                    <div className="w-[100px]">
                      <Link to="/profile">
                        <img src={back} alt="" className="ml-2" />
                      </Link>
                    </div>
                    <div className="w-[100px]">Complaint</div>
                    <div className="w-[100px]"></div>
                  </div>
                </div>
                <div className="ml-10 mt-5 mb-2 text-xl  text-white font-bold">
                  Complaints? Let us know
                </div>
                <div className="flex justify-center flex-col items-center gap-2">
                  <div className="relative rounded">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                        <CiUser style={{ color: "white" }} />
                      </span>
                    </div>

                    <input
                      type="text"
                      className=" bg-[#9520FD] compaint-input placeholder: ml-2 block w-[430px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2   sm:text-sm sm:leading-6"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="relative rounded">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                        <MdOutlineEmail style={{ color: "white" }} />
                      </span>
                    </div>

                    <input
                      type="text"
                      className="bg-[#9520FD] compaint-input placeholder: ml-2 block w-[430px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2   sm:text-sm sm:leading-6"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="flex justify-center ml-2 mt-2">
                  <div className="relative rounded">
                    <div className="relative">
                      <span className="absolute  left-0 top-2 flex items-center pl-3 pointer-events-none">
                        <GrCompliance style={{ color: "white" }} />
                      </span>
                      <textarea
                        type="text"
                        className="bg-[#9520FD] compaint-input block w-[430px] h-[100px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2   sm:text-sm sm:leading-6"
                        placeholder="Explain about your complaint.."
                      />
                      <span className="text-white flex justify-end">
                        0/500 Character
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-10">
                  <button
                    className=" complaint-btn w-[430px] h-[50px] bg-[#FFB800] text-white font-bold rounded-lg"
                    onClick={() => setcomplainttrack(true)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Complaint;
