/** @format */

import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import teasure from "../Assets/Treasure.svg";
import teasureanimation from "../Assets/teasureanimation.svg";
import { getApi, postApi } from "../Repository/Repository";
import { useEffect, useState } from "react";
import { RewardClamedModal } from "../Components/Modal/Modals";
import { checkInRewards } from "../Constant/Constant";

const Checkin = () => {
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(false);

  const getProfile = () => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const redeemReward = () => {
    const additionalFunctions = [() => setShow(true), getProfile];
    postApi({
      url: "/user/check-in",
      payload: {},
      additionalFunctions,
    });
  };

  const isAlreadyClaim = (day) => {
    const isClaim = profile?.data?.user?.checkIn?.some((i) => i.day === day);
    return isClaim;
  };

  return (
    <>
      <RewardClamedModal show={show} handleClose={() => setShow(false)} />
      <div className=" h-screen flex justify-center">
        <div className="grid place-items-center">
          <div className="lg:w-[500px] lg:h-full check-main-div bg-white md:w-[400px] flex flex-col">
            <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
              <div className="h-[60px] check-header flex justify-between items-center ">
                <div className="w-[100px]">
                  <Link to="/Home">
                    <img src={back} alt="" className="ml-2" />
                  </Link>
                </div>
                <div className="w-[100px] text-center">Check In</div>
                <div className="w-[100px]"></div>
              </div>
            </div>

            <div className="bg-[#FFEBB9] h-[100%]">
              <div className="flex justify-center mt-10">
                <div className="w-[450px] checkin-card h-[300px] bg-white rounded-lg">
                  <div className="flex flex-wrap justify-center gap-12 m-5">
                    {checkInRewards?.map((i, index) => (
                      <div
                        className={`check-in-days ${
                          isAlreadyClaim(i.day) === true ? "disabled" : ""
                        } `}
                        key={index}
                      >
                        <span className="font-bold"> Day {i?.day} </span>
                        {i.icon}
                        <span className="font-bold"> {i.amount} </span>
                      </div>
                    ))}

                    <div>
                      <img src={teasure} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                {profile?.data?.user?.isEligibleForCheckIn ? (
                  <button
                    className="w-[150px] h-[40px] bg-[#FFB800] text-white rounded-xl  font-semibold text-xl"
                    onClick={() => redeemReward()}
                  >
                    Check in
                  </button>
                ) : (
                  <button
                    className="w-[150px] h-[40px] bg-[#e5e5e5] text-white rounded-xl  font-semibold text-xl"
                    type="button"
                  >
                    Check in
                  </button>
                )}
              </div>
              <div className="flex justify-center mt-2">
                <div className="text-center w-[450px] check-p font-semibold">
                  Check in for 7 consecutive days to get treasure box, and
                  receive mysterious prizes.
                </div>
              </div>
              <div className="flex justify-center">
                <img src={teasureanimation} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkin;
