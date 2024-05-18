/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import wheel from "../Assets/wheel.svg";
import coin from "../Assets/Order/coin.svg";
import andarbahar from "../Assets/andarbahar.svg";
import fiterjet from "../Assets/fiterjet.svg";
import rocket from "../Assets/rocket.svg";
import fivetwo from "../Assets/fivetwo.svg";
import ludo from "../Assets/ludo.svg";
import { getApi } from "../Repository/Repository";

const Orderrecord = () => {
  const [type, setType] = useState("headTail");
  const [response, setResponse] = useState({});

  useEffect(() => {
    getApi({
      url: `/user/order/by/token`,
      setResponse,
    });
  }, []);

  console.log(response?.orders);

  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full order-div bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className="order-main flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/profile">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>

              <div className="w-[100px] text-center">Order</div>
              <div className="w-[100px]"></div>
            </div>
          </div>

          <div className="flex gap-2 order-games overflow-x-scroll w-[500px] pt-2 justify-center items-center text-white bg-[#FFC83C]">
            <div
              className="flex flex-col items-center"
              onClick={() => setType("headTail")}
            >
              <img src={coin} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">HeadTail</span>
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => setType("Spin")}
            >
              <img src={wheel} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">Circle</span>
            </div>
            <div className="flex flex-col items-center ">
              <img src={rocket} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">Crash</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={andarbahar} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">Andarbahar</span>
            </div>

            <div className="flex flex-col items-center">
              <img src={fivetwo} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1"> Fast-Parity</span>
            </div>
            <div className="flex flex-col items-center ">
              <img src={fiterjet} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">Limbo</span>
            </div>
            <div className="flex flex-col items-center ">
              <img src={ludo} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">Ludo</span>
            </div>
          </div>

          {type === "headTail" && (
            <div className="flex justify-center flex-col items-center gap-2 mt-5 ">
              {response?.games?.map((i, index) => (
                <div
                  className="w-[450px] order-card  h-[110px] border-2 rounded-lg"
                  key={`games${index}`}
                >
                  <div className="flex justify-between ml-5 mr-5">
                    <div> {i.periodNumber} </div>
                    <div>
                      {" "}
                      {i.createdAt?.slice(0, 10)}{" "}
                      {i.createdAt?.split("T")?.[1]?.slice(0, 8)}{" "}
                    </div>
                  </div>
                  <div className="flex justify-between ml-5 mr-5">
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Select</span>
                      <span
                        className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
                          i.userGuess === "head"
                            ? "bg-[#a5814f]"
                            : "bg-[#ffb800]"
                        }  `}
                      >
                        {i.userGuess === "head" ? "H" : "T"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Money</span>
                      <span className=""> ₹{i.money} </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Result</span>
                      <span
                        className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
                          i.result === "head" ? "bg-[#a5814f]" : "bg-[#ffb800]"
                        }  `}
                      >
                        {i.result === "head" ? "H" : "T"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Status</span>
                      <span
                        className="text-right font-bold"
                        style={{ textTransform: "uppercase" }}
                      >
                        {" "}
                        {i.message}{" "}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1  w-[100px] text-right">
                      <span className="font-bold">Amount</span>
                      <span className="text-right "> ₹{i.updatedMoney} </span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between ml-5 mr-5">
                    <div>Delivery: ₹{i.delivery} </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === "Spin" && (
            <div className="flex justify-center flex-col items-center gap-2 mt-5 ">
              {response?.games?.map((i, index) => (
                <div
                  className="w-[450px] order-card  border-2 rounded-lg"
                  key={`games${index}`}
                >
                  <div className="flex justify-between ml-5 mr-5">
                    <div> {i.periodNumber} </div>
                    <div>
                      {" "}
                      {i.createdAt?.slice(0, 10)}{" "}
                      {i.createdAt?.split("T")?.[1]?.slice(0, 8)}{" "}
                    </div>
                  </div>
                  <div className="flex justify-between ml-5 mr-5">
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Select</span>
                      <span
                        className={`w-[30px]  flex justify-center items-center rounded text-[#000]`}
                      >
                        {i.userGuess}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Money</span>
                      <span className=""> ₹{i.money} </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Result</span>
                      <span
                        className={`w-[30px]  flex justify-center items-center rounded text-#fff `}
                      >
                        {i.result}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Status</span>
                      <span
                        className="text-right font-bold"
                        style={{ textTransform: "uppercase" }}
                      >
                        {" "}
                        {i.message}{" "}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1  w-[100px] text-right">
                      <span className="font-bold">Amount</span>
                      <span className="text-right "> ₹{i.updatedMoney} </span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between ml-5 mr-5">
                    <div>Delivery: ₹{i.delivery} </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center flex-col items-center gap-2 mt-5 ">
            {response?.orders?.map((i, index) => (
              <div
                className="w-[450px] order-card  h-[110px] border-2 rounded-lg"
                key={`games${index}`}
              >
                <div className="flex justify-between ml-5 mr-5">
                  <div> {i?.headTailGame?.gameId} </div>
                  <div>
                    {" "}
                    {i?.headTailGame?.createdAt?.slice(0, 10)}{" "}
                    {i?.headTailGame?.createdAt?.split("T")?.[1]?.slice(0, 8)}{" "}
                  </div>
                </div>
                <div className="flex justify-between ml-5 mr-5">
                  <div className="flex flex-col gap-1 items-center">
                    <span className="font-bold">Select</span>
                    <span
                      className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
                        i.userGuess === "head" ? "bg-[#a5814f]" : "bg-[#ffb800]"
                      }  `}
                    >
                      {i.userGuess === "head" ? "H" : "T"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span className="font-bold">Money</span>
                    <span className=""> ₹{i.money} </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span className="font-bold">Result</span>
                    <span
                      className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
                        i.result === "head" ? "bg-[#a5814f]" : "bg-[#ffb800]"
                      }  `}
                    >
                      {i.result === "head" ? "H" : "T"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span className="font-bold">Status</span>
                    <span
                      className="text-right font-bold"
                      style={{ textTransform: "uppercase" }}
                    >
                      {" "}
                      {i.message}{" "}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1  w-[100px] text-right">
                    <span className="font-bold">Amount</span>
                    <span className="text-right "> ₹{i.updatedMoney} </span>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between ml-5 mr-5">
                  <div>Delivery: ₹{i.delivery} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderrecord;
