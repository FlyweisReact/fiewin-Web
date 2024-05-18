/** @format */

import logo from "../Assets/FieWinlogo.svg";
import wheel from "../Assets/wheel.svg";
import coin from "../Assets/coin.svg";
import rocket from "../Assets/rocket.svg";
import andarbahar from "../Assets/andarbahar.svg";
import fiterjet from "../Assets/fiterjet.svg";
import rockit from "../Assets/rockit.svg";
import fivetwo from "../Assets/fivetwo.svg";
import mine from "../Assets/mine.svg";
import ludo from "../Assets/ludo.svg";
import { SlRefresh } from "react-icons/sl";
import Footer from "../Components/Footer";
import { CiGift } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getApi } from "../Repository/Repository";

const Home = () => {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className=" background-main flex justify-center">
        <div className="grid place-items-center w-[500px] ">
          <div className="bg-[#FFDC82] w-[500px] p-5 flex justify-center items-center text-xl font-semibold top-0 fixed z-50">
            <img src={logo} alt="logo" />
          </div>
          <div className="lg:w-[500px] h-full background bg-white  flex flex-col mt-28 ">
            <div>
              <div className="flex justify-between mt-8 ml-2 ">
                <div className="flex flex-col gap-2">
                  <div>Balance</div>
                  <div className="flex items-center gap-2 font-bold">
                    ₹
                    {profile?.data?.user?.wallet
                      ? profile?.data?.user?.wallet
                      : 0}{" "}
                    <SlRefresh
                      onClick={() => getProfile()}
                      className="cursor-pointer"
                    />
                  </div>
                  <div>ID:{profile?.data?.user?._id?.slice(0, 5)}</div>
                </div>
                <div className="flex flex-col gap-2 mr-2">
                  <Link to="/wallet">
                    <button className="bg-[#FFB800] text-white w-[150px] h-[50px] rounded-lg">
                      Recharge
                    </button>
                  </Link>
                  <Link to="/Withdraw">
                    <button className="bg-[#FFB800] text-white w-[150px] h-[50px] rounded-lg">
                      Withdraw
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex gap-28 ml-2 reward mt-10">
                <Link to="/Reward">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[orange] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                      <CiGift style={{ color: "white" }} size={20} />
                    </div>
                    <span>Task Reward</span>
                  </div>
                </Link>
                <Link to="/Checkin">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[green] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                      <FaClipboardCheck style={{ color: "white" }} size={20} />
                    </div>
                    <span>Check in</span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-wrap justify-between gap-y-2  mt-5   ">
                <Link to="/Circle">
                  <div className="bg-[#4EC6DF] games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                    <div>
                      <img
                        src={wheel}
                        alt=""
                        className="w-[150px] games-image"
                      />
                    </div>
                    <div className="w-[60px] mt-2 h-[22px] bg-[#399AAB] flex justify-center items-center text-white text-[12px] rounded-xl">
                      15 Secs
                    </div>
                    <div className="text-center text-white text-2xl font-bold">
                      circle
                    </div>
                  </div>
                </Link>
                <Link to="/Headandtail">
                  <div className="bg-gradient-to-t  from-[#001829] to-[#00538F] games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                    <div>
                      <img src={coin} alt="" className="" />
                    </div>
                    <div className="w-[60px] mt-2 h-[22px] bg-[#0A436E] flex justify-center items-center text-white text-[12px] rounded-xl">
                      15 Secs
                    </div>
                    <div className="text-center text-2xl text-white font-bold">
                      HEAD & TAIL
                    </div>
                  </div>
                </Link>
                <div className="bg-[#1D9EA7] relative games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                  <div class="absolute top-0 right-0 w-28 h-6 flex justify-center rounded bg-[#D9D9D9]">
                    Coming soon
                  </div>
                  <div>
                    <img
                      src={rocket}
                      alt=""
                      className="w-[141px] games-image"
                    />
                  </div>
                  <div className="text-center text-white text-2xl font-bold">
                    CRASH
                  </div>
                </div>
                <div className="bg-[#FAAA00] relative games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                  <div class="absolute top-0 right-0 w-28 h-6 flex justify-center rounded bg-[#D9D9D9]">
                    Coming soon
                  </div>
                  <div>
                    <img
                      src={andarbahar}
                      alt=""
                      className="w-[170px] games-image"
                    />
                  </div>
                  <div className="w-[60px] mt-2 h-[22px] bg-[#0A436E] flex justify-center items-center text-white text-[12px] rounded-xl">
                    15 Secs
                  </div>
                  <div className="text-center text-2xl text-white font-bold">
                    ANDAR BAHAR
                  </div>
                </div>
                <div className="bg-[#4DDEB3] relative games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                  <div class="absolute top-0 right-0 w-28 h-6 flex justify-center rounded bg-[#D9D9D9]">
                    Coming soon
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={rockit} alt="" className="w-[50px]" />
                    <img
                      src={fivetwo}
                      alt=""
                      className="w-[150px] games-image"
                    />
                  </div>
                  <div className="text-center text-2xl text-white font-bold">
                    FAST-PARITY
                  </div>
                </div>
                <div className="bg-[#58B3FB] relative games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                  <div class="absolute top-0 right-0 w-28 h-6 flex justify-center rounded bg-[#D9D9D9]">
                    Coming soon
                  </div>
                  <div>
                    <img src={fiterjet} alt="" />
                  </div>
                  <div className="text-center text-white text-2xl font-bold">
                    LIMBO
                  </div>
                </div>
                <div className="bg-[#517FE0] relative games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                  <div class="absolute top-0 right-0 w-28 h-6 flex justify-center rounded bg-[#D9D9D9]">
                    Coming soon
                  </div>
                  <div>
                    <img src={mine} alt="" className="w-[150px] games-image" />
                  </div>
                  <div className="text-center text-white  text-2xl font-bold">
                    MINE SWEEPER
                  </div>
                </div>
                <div className="bg-[#EDFA39]  relative  games-card w-[245px] h-[250px] rounded flex flex-col items-center justify-center">
                  <div class="absolute top-0 right-0 w-28 h-6 flex justify-center rounded bg-[#D9D9D9]">
                    Coming soon
                  </div>
                  <div>
                    <img src={ludo} alt="" className="w-[170px] games-image" />
                  </div>
                  <div className="text-center text-[#889110] text-2xl font-bold">
                    LUDO
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
