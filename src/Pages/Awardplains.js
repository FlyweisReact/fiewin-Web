/** @format */
import { Collapse } from "antd";
import back from "../Assets/back.svg";
import level1 from "../Assets/level1.svg";
import level2 from "../Assets/level2.svg";
import level3 from "../Assets/level3.svg";
import level4 from "../Assets/level4.svg";
import level5 from "../Assets/level5.svg";
import level6 from "../Assets/level6.svg";
import level7 from "../Assets/level7.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { getApi, postApi } from "../Repository/Repository";

const Awardplains = () => {
  const [data, setData] = useState([]);

  const getAllData = () => {
    getApi({
      url: "/user/agent-millionaire-rewards",
      setResponse: setData,
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log(data?.eligibleAwardPlans, "data");
  const levelImages = {
    1: level1,
    2: level2,
    3: level3,
    4: level4,
    5: level5,
    6: level6,
    7: level7,
  };

  const claimReward = (id) => {
    postApi({
      url: `/user/agent-millionaire-rewards/claim/${id}`,
      payload: {},
      additionalFunctions: [getAllData],
      successMsg: "Reward Cliamed",
    });
  };

  const items = data?.eligibleAwardPlans?.map((i, index) => {
    const mainId = i?.awardPlanId;
    return {
      key: index + 1,
      label: (
        <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800] award-card_text">
          <div className="flex  award-card_text1">
            <img
              className="w-24 -ml-7 -mt-7 sm:ml-0 sm:-ml-5 sm:-mt-5"
              src={levelImages[index + 1]}
              alt="level1"
            />
            <p className="-ml-2 sm:ml-0">{i?.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-red-500 ">₹{i?.reward}</p>
            <p className="flex items-center">
              <Link className="p-1 rounded-full bg-[#737D89]">
                <Icon
                  icon="iconamoon:arrow-down-2"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ color: "#fcf8f8" }}
                />
              </Link>
            </p>
          </div>
        </div>
      ),
      children: (
        <>
          {i?.conditions?.length > 0 &&
            i?.conditions?.map((i, index) => (
              <div>
                <div
                  className="reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
                  key={index}
                >
                  <div className="flex flex-col h-4 dark:bg-gray-700 award-bar-container">
                    <div className="bg-gray-300 h-4 rounded-full">
                      <div
                        className="bg-[#38B6FF] h-4 rounded-full"
                        style={{
                          width: i?.percentage ? i?.percentage + "%" : "0%",
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-bold text-xs">0%</span>
                      <span className="font-bold text-xs">100%</span>
                    </div>
                  </div>
                  <div className="text-left mb-2">
                    <p className="text-xl font-bold">Reward condition:</p>
                    <p className="flex flex-col text-sm">
                      <span>{i?.title}</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
                      onClick={() => {
                        console.log(i);
                        claimReward(mainId);
                      }}
                      style={{
                        backgroundColor:
                          i?.isClaim ||
                          (i?.isEligible === false && i?.percentage !== 100)
                            ? "#808080"
                            : "#38B6FF",
                      }}
                      disabled={
                        i?.isClaim ||
                        (i?.isEligible === false && i?.percentage !== 100)
                      }
                    >
                      {i?.isClaim ? "Claimed" : "Claim"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </>
      ),
    };
  });

  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full ranking-main-div md:w-[400px] flex flex-col">
          <div className="flex justify-between items-center bg-[#39B7FF] h-[80px] text-xl font-semibold text-white mt--4">
            <div>
              <Link to={-1}>
                <img src={back} alt="Back" className="ml-2" />
              </Link>
            </div>
            <div> Agent Millionaire Award Plan</div>
            <div></div>
          </div>
          <div className="award-main-div">
            <div className="agentMillionaireClass">
              <div></div>
              <p className="w-85 m-auto text-center text-white font-normal text-2xl">
                The FieWin Agent Millionaire award plan is divided into 7
                levels, and each level has generous rewards.
              </p>
            </div>
            <div>
              <div className="rewards_div_agent">
                <Collapse
                  expandIcon={() => null}
                  className="rewards_div_agent1"
                  ghost
                  items={items}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awardplains;
