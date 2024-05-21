/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import wheel from "../Assets/wheel.svg";
import coin from "../Assets/Order/coin.svg";
import { getApi } from "../Repository/Repository";
import { getVelocityAnimal, getVelocityColor } from "../utils/utils";

const Orderrecord = () => {
  const [type, setType] = useState("headTail");
  const [response, setResponse] = useState({});
  const [spinOrder, setSpinOrder] = useState({});

  useEffect(() => {
    if (type === "headTail") {
      getApi({
        url: `/user/game/users`,
        setResponse,
      });
    } else {
      getApi({
        url: `/user/spinGame/game/users`,
        setResponse: setSpinOrder,
      });
    }
  }, [type]);

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

          <div className="flex gap-2 order-games overflow-x-hidden w-[500px] pt-2 justify-center items-center text-white bg-[#FFC83C]">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setType("headTail")}
            >
              <img src={coin} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">HeadTail</span>
            </div>
            <div
              className="flex flex-col items-center  cursor-pointer"
              onClick={() => setType("Spin")}
            >
              <img src={wheel} alt="" className="w-[50px] h-[50px]" />
              <span className="mt-1">Circle</span>
            </div>
            {/* <div className="flex flex-col items-center ">
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
            </div> */}
          </div>

          <div className="orders-container">
            {type === "headTail"
              ? response?.games?.map((i, index) => (
                  <div className="order-card" key={`headandtaik${index}`}>
                    <div className="upper-div">
                      <div> {i?.gameId} </div>
                      <div>
                        {" "}
                        {i?.createdAt?.slice(0, 10)}{" "}
                        {i?.createdAt?.split("T")?.[1]?.slice(0, 8)}{" "}
                      </div>
                    </div>

                    <div className="flex justify-between ml-5 mr-5">
                      <div className="flex flex-col gap-1 items-center">
                        <span className="font-bold">Select</span>
                        <span
                          className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
                            i?.participants?.[0]?.choice === "head"
                              ? "bg-[#a5814f]"
                              : "bg-[#ffb800]"
                          }  `}
                        >
                          {i?.participants?.[0]?.choice === "head" ? "H" : "T"}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 items-center">
                        <span className="font-bold">Result</span>
                        <span
                          className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
                            i.result === "head"
                              ? "bg-[#a5814f]"
                              : "bg-[#ffb800]"
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
                          {i.status}{" "}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1  w-[100px] text-right">
                        <span className="font-bold">Amount</span>
                        <span className="text-right ">
                          {" "}
                          ₹{i.participants?.[0]?.amount}{" "}
                        </span>
                      </div>
                    </div>
                    {i.winners?.[0]?.price && (
                      <>
                        <hr className="mt-3" />
                        <div className="flex justify-between ml-5 mr-5">
                          <div>Delivery: ₹{i.winners?.[0]?.price} </div>
                        </div>
                      </>
                    )}
                  </div>
                ))
              : spinOrder?.games?.map((i, index) => (
                  <div className="order-card" key={`spinOrder${index}`}>
                    <div className="upper-div">
                      <div> {i?.gameId} </div>
                      <div>
                        {" "}
                        {i?.createdAt?.slice(0, 10)}{" "}
                        {i?.createdAt?.split("T")?.[1]?.slice(0, 8)}{" "}
                      </div>
                    </div>

                    <div className="flex justify-between ml-5 mr-5">
                      <div className="flex flex-col gap-1 items-center">
                        <span className="font-bold">Select</span>
                        {getVelocityColor(i?.participants?.[0]?.colourChoice)}
                        {getVelocityAnimal(i?.participants?.[0]?.animalChoice)}
                      </div>

                      <div className="flex flex-col gap-1 items-center">
                        <span className="font-bold">Result</span>
                        {getVelocityColor(i?.colourResult)}
                        {getVelocityAnimal(i?.animalResult)}
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <span className="font-bold">Status</span>
                        <span
                          className="text-right font-bold"
                          style={{ textTransform: "uppercase" }}
                        >
                          {" "}
                          {i.status}{" "}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1  w-[100px] text-right">
                        <span className="font-bold">Amount</span>
                        <span className="text-right ">
                          {" "}
                          ₹{i.participants?.[0]?.amount}{" "}
                        </span>
                      </div>
                    </div>
                    {i.winners?.[0]?.prize && (
                      <>
                        <hr className="mt-3" />
                        <div className="flex justify-between ml-5 mr-5">
                          <div>Delivery: ₹{i.winners?.[0]?.prize} </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderrecord;
