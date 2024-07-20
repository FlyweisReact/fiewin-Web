/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import wheel from "../Assets/wheel.svg";
import coin from "../Assets/Order/coin.svg";
import { getApi } from "../Repository/Repository";
import HeadTailOrders from "../Components/Orders/HeadTailOrders";
import SpinOrders from "../Components/Orders/SpinOrders";

const Orderrecord = () => {
  const [type, setType] = useState("headTail");
  const [response, setResponse] = useState({});

  useEffect(() => {
    getApi({
      url: `/user/order/by/token`,
      setResponse,
    });
  }, []);

  const userOrderData = response?.orders
    ?.slice()
    ?.filter((item) => item?.type === "Head-Tail");

  const userSpinOrder = response?.orders
    ?.slice()
    ?.filter((item) => item?.type === "Spin");

  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full order-div bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#38B6FF] h-[60px] text-xl font-semibold text-white">
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

          <div className="flex gap-2 order-games overflow-x-hidden w-[500px] pt-2 justify-center items-center text-white bg-[#C1DDFF]">
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
          </div>

          <div className="orders-container">
            {type === "headTail"
              ? userOrderData?.map((i, index) => (
                  <HeadTailOrders
                    key={`head${index}`}
                    gameId={i?.headTailGame?.gameId}
                    createdDate={i?.headTailGame?.createdAt}
                    status={i?.status}
                    choice={i?.choice}
                    result={i?.headTailGame?.result}
                    point={i?.amount}
                    winAmount={i?.userWinAmount}
                  />
                ))
              : userSpinOrder?.map((i, index) => (
                  <SpinOrders
                    key={`velocity${index}`}
                    gameId={i?.spinGame?.gameId}
                    createdAt={i?.createdAt}
                    status={i?.status}
                    point={i?.amount}
                    winAmount={i?.userWinAmount}
                    colorChoice={i?.colourChoice}
                    animalChoice={i.animalChoice}
                    colorResult={i?.spinGame?.colourResult}
                    animalResult={i?.spinGame?.animalResult}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderrecord;
