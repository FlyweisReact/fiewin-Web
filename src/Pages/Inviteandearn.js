/** @format */

import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import invitebg from "../Assets/invitebg.svg";
import diamond from "../Assets/daimond.svg";
import ranking from "../Assets/ranking.svg";
import mylink from "../Assets/mylink.svg";
import banner from "../Assets/banner.svg";
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { getApi } from "../Repository/Repository";

const Inviteandearn = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [referData, setReferData] = useState({});
  const [totalRefer, setTotalRefer] = useState({});

  useEffect(() => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
    getApi({
      url: "/user/today-referral/data",
      setResponse: setReferData,
    });
    getApi({
      url: "/user/level-wise-income",
      setResponse: setTotalRefer,
    });
  }, []);

  let totalUserCount = 0;

  if (referData?.data?.referralLevels) {
    referData?.data?.referralLevels?.forEach((level) => {
      totalUserCount += level.users.length;
    });
  }

  return (
    <div className=" flex justify-center">
      <div className="grid place-items-center ">
        <div className="w-[500px]  h-[850px] first-div-main bg-slate-100 ">
          <div className="relative bg-[#FFB800] text-white h-[80px] flex justify-center items-center text-xl font-semibold">
            Invite
          </div>
          <div className="bg-[white] ">
            <img src={invitebg} alt="" className="agent-background" />
            <div className="flex justify-center">
              <div className="absolute flex flex-col  gap-20 mt-[-270px] agent-div-main">
                <div className="flex justify-between items-center agent-div bg-white w-[470px] h-[120px]  rounded-lg">
                  <div className="flex flex-col ml-5">
                    Agent amount
                    <span className="text-3xl">
                      ₹
                      {profile?.data?.user?.agentWallet
                        ? profile?.data?.user?.agentWallet
                        : 0}
                    </span>
                  </div>
                  <div className="mr-5">
                    <Link to="/agent-withdraw">
                      <button className="bg-[#FFB800] rounded-3xl w-[100px] h-[48px] text-white font-semibold">
                        Withdraw
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link to="/Privilege">
                    {" "}
                    <div className="bg-[#F15B36] agent-card { w-[150px] h-[126px] rounded-lg flex flex-col justify-center items-center">
                      <img src={diamond} alt="" />
                      <div className="text-white font-bold text-xl">
                        Privilege
                      </div>
                    </div>
                  </Link>
                  <Link to="/Ranking">
                    <div className="bg-[#2F7EF3] agent-card { w-[150px] h-[126px] rounded-lg flex flex-col justify-center items-center">
                      <img src={ranking} alt="" />
                      <div className="text-white font-bold text-xl">
                        Ranking
                      </div>
                    </div>
                  </Link>
                  <div
                    className="bg-[#38C56D] agent-card { w-[150px] h-[126px] rounded-lg flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => navigate("/Invitelink")}
                  >
                    <img src={mylink} alt="" />
                    <div className="text-white font-bold text-xl">My Link</div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex justify-center mt-16 agent-banner">
              <Link to="/Awardplains">
                <img
                  src={banner}
                  alt=""
                  className="w-[450px] agent-banner-img"
                />{" "}
              </Link>
            </div>

            <div className="flex justify-between m-5 pb-2">
              <div className="flex flex-col gap-2 items-center">
                <div className="font-semibold">Invited today</div>
                <div> {referData?.referralCounts?.length} </div>
                <div className="flex items-center gap-1">
                  Total {totalUserCount}
                  <Link to="/Invitetoday">
                    <span className="bg-[#F6C100] w-[23px] h-[23px] rounded-full flex justify-center items-center cursor-pointer">
                      <IoChevronForward style={{ color: "white" }} />{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="font-semibold"> Today's Income</div>
                <div> ₹{referData?.earnings} </div>
                <div className="flex items-center gap-1">
                  Total ₹{totalRefer?.data?.[0]?.totalIncome}
                  <Link to="/Todaysincome">
                    <span className="bg-[#F6C100] w-[23px] h-[23px] rounded-full flex justify-center items-center cursor-pointer">
                      <IoChevronForward style={{ color: "white" }} />{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 h-[300px]">
            {/* <div className="flex justify-between ">
              <div>Income details</div>
              <div>View more</div>
            </div> */}
            {/* <div className="text-center">No Income</div> */}
            <div className="flex justify-center mt-2">
              <Link to="/Invitelink">
                <button className="bg-[#FFB800] w-[150px] h-[50px] text-white rounded-3xl">
                  Invite Now
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Inviteandearn;
