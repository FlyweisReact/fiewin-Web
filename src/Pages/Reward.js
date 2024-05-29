/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import { getApi, postApi } from "../Repository/Repository";

const Reward = () => {
  const [response, setResponse] = useState({});
  const [eligibleRewards, setEligibleRewards] = useState({});

  const fetchEligible = () => {
    getApi({
      url: "/user/eligible-rewards",
      setResponse: setEligibleRewards,
    });
  };

  useEffect(() => {
    getApi({
      url: "/user/rewards",
      setResponse,
    });
    fetchEligible();
  }, []);

  const claimReward = (id) => {
    postApi({
      url: `/user/rewards/claim/${id}`,
      payload: {},
      additionalFunctions: [fetchEligible],
      successMsg: "Reward Cliamed",
    });
  };

  const isRewardClaimable = (id) => {
    const IsPresent = eligibleRewards?.eligibleRewards?.some(
      (i) => i._id === id
    );
    return IsPresent;
  };

  const progressBar = (id) => {
    const filteredData = eligibleRewards?.rewardsProgress?.filter(
      (i) => i?.rewardId === id
    );
    if (filteredData?.[0]?.percentage) {
      return (
        <div
          className="bg-[#FFB800] h-4 rounded-full"
          style={{ width: `${filteredData?.[0]?.percentage}%` }}
        ></div>
      );
    } else {
      <div
        className="bg-[#FFB800] h-4 rounded-full"
        style={{ width: "0%" }}
      ></div>;
    }
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
            {response?.rewards?.map((i, index) => (
              <div
                className="bg-[#FFF3D5] reward-card w-[450px] h-[200px] flex flex-col p-5 gap-4 rounded-lg"
                key={index}
              >
                <div className="flex justify-between">
                  <span className="font-bold"> {i?.title} </span>
                  <span className="font-bold">₹{i?.amount} </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  {progressBar(i?._id)}
                </div>
                <div className="text-center text-[12px] font-bold">
                  {i?.description}
                </div>
                <div className="flex justify-center">
                  {isRewardClaimable(i?._id) ? (
                    <button
                      className={`w-[150px] h-[40px] text-white rounded-xl font-semibold text-xl`}
                      style={{ backgroundColor: "#FFB800" }}
                      onClick={() => claimReward(i._id)}
                    >
                      Collect
                    </button>
                  ) : (
                    <button
                      className={`w-[150px] h-[40px] text-white rounded-xl font-semibold text-xl`}
                      style={{ backgroundColor: "#E5E5E5" }}
                    >
                      Collect
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
