/** @format */

import React from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import { getApi } from "../Repository/Repository";

const Reward = () => {
  const takeWelcomeReward = () => {
    getApi({
      url: "/home/welcomeReward",
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center flex-col reward-header ">
        <div className="bg-[#FFB800] text-white h-[60px] flex justify-between items-center text-xl font-semibold reward-header ">
          <div className="ml-2">
            <Link to="/Home">
              <img src={back} alt="" />
            </Link>
          </div>
          <div className="text-white font-semibold text-xl">Rewards</div>
          <div></div>
        </div>
        <div className="w-[500px] bg-[white] reward-header pb-10 ">
          <div className="flex justify-center flex-col items-center gap-y-2 mt-5">
            <div className="bg-[#FFF3D5] reward-card w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">welcome</span>
                <span className="font-bold">₹20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div
                  className="bg-[#FFB800] h-4 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                We will reward you with ₹20
              </div>
              <div className="flex justify-center">
                <button
                  className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl"
                  onClick={() => takeWelcomeReward()}
                >
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">First Recharge</span>
                <span className="font-bold">₹5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div
                  className="bg-[#FFB800] h-4 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                This reward can only be obtained by doing your first recharge.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#FFB800] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">First Invite Reward</span>
                <span className="font-bold">₹10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div
                  className="bg-[#FFB800] h-4 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                This reward will be given to those who invite other user for
                first time
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#FFB800] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>

            <div className="bg-[#FFF3D5] reward-card   w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">20 Orders</span>
                <span className="font-bold">₹40</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "20%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  3/20
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                You need to complete 20 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card   w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">50 Orders</span>
                <span className="font-bold">₹100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "25%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  13/50
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 50 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">100 Orders</span>
                <span className="font-bold">₹200</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "15%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  3/100
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 100 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">500 Orders</span>
                <span className="font-bold">₹1000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "30%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  30/500
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 500 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">1000 Orders</span>
                <span className="font-bold">₹2000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "25%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  30/1000
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 1000 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">2000 Orders</span>
                <span className="font-bold">₹4000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "28%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  3/3000
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 2000 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">3000 Orders</span>
                <span className="font-bold">₹6000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "25%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  3/3000
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 3000 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">5000 Orders</span>
                <span className="font-bold">₹10000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "25%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  3/5000
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 5000 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
            <div className="bg-[#FFF3D5] reward-card  w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg ">
              <div className="flex justify-between">
                <span className="font-bold">10000 Orders</span>
                <span className="font-bold">₹250000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 relative ">
                <div
                  className="bg-[#FFB800] h-4 rounded-full "
                  style={{ width: "35%" }}
                ></div>
                <div className="absolute inset-0  flex ml-2  justify-left text-xs text-white ">
                  50/10000
                </div>
              </div>
              <div className="text-center text-[12px] font-bold">
                {" "}
                You need to complete 10000 orders to receive the reward.
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] h-[40px] bg-[#D9D9D9] text-white rounded-xl  font-semibold text-xl">
                  Collet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
