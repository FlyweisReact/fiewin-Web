/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import support from "../Assets/support.svg";
import mail from "../Assets/mail.svg";
import chatwithus from "../Assets/chatwithus.svg";
import supportvoctor from "../Assets/supportvactor.svg";
import { postApi } from "../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

const Support = () => {
  const [chatWithUs, setChatWithUs] = useState(false);
  const [loading, setLoading] = useState(false);
  const [complainBody, setComplainBody] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      complainBody,
      email,
    };
    postApi({
      url: "/complain/createComplaint",
      payload,
      setLoading,
      successMsg: "Query Sended",
    });
  };

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
                    support@fiewin.org
                  </span>
                </div>
              </div>
              <div className="mr-5">
                <img src={supportvoctor} alt="" />
              </div>
            </div>
            <div
              className="w-[400px] bg-white support-div h-[70px] flex items-center justify-between rounded-lg cursor-pointer"
              onClick={() => setChatWithUs(!chatWithUs)}
            >
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

          {chatWithUs && (
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="flex justify-center">
                <div className="grid place-items-center">
                  <div className="lg:w-[400px] lg:h-full complaint-main bg-[#9520FD] md:w-[400px] flex flex-col">
                    <div className="flex justify-center flex-col items-center gap-2">
                      <div className="relative rounded">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                            <MdOutlineEmail style={{ color: "#000" }} />
                          </span>
                        </div>

                        <input
                          type="email"
                          className="bg-[#fff] text-[#000] compaint-input placeholder: ml-2 block w-[400px] h-[48px]  border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2   sm:text-sm sm:leading-6 outline-none"
                          placeholder="Enter Your Email"
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center ml-2 mt-2">
                      <div className="relative rounded">
                        <div className="relative">
                          <span className="absolute  left-0 top-2 flex items-center pl-3 pointer-events-none">
                            <GrCompliance />
                          </span>
                          <textarea
                            type="text"
                            className="bg-[#fff] text-[#000]  compaint-input block w-[400px] h-[100px] border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2   sm:text-sm sm:leading-6 outline-none "
                            placeholder="Explain about your complaint.."
                            min={0}
                            max={500}
                            value={complainBody}
                            required
                            onChange={(e) => setComplainBody(e.target.value)}
                          />
                          <span className="text-white flex justify-end">
                            0/500 Character
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-10">
                      <button
                        type="submit"
                        className=" complaint-btn w-[430px] h-[50px] bg-[#FFB800] text-white font-bold rounded-lg"
                      >
                        {loading ? <ClipLoader color="#fff" /> : "Send"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
