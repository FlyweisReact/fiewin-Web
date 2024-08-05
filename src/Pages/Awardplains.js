
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
        <div className="award-card1">
          <div className="award-card-text1">
            <img
              className={`award-card-img1 ${
                index === 0 ? "award-card-img-sm1" : ""
              }`}
              src={levelImages[index + 1]}
              alt="level1"
            />
            <p
              className={`award-card-text-inner1 ${
                index === 0 ? "award-card-text-inner-sm1" : ""
              }`}
            >
              {i?.name}
            </p>
          </div>
          <div className="reward-info1">
            <p className="reward-amount1">₹{i?.reward}</p>
            <p className="icon-link1">
              <Link className="icon-link1">
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
            i?.conditions?.map((item, index) => (
              <div key={index}>
                <div className="reward-card-children1">
                  <div className="award-bar-container1">
                    {console.log(i)}
                    {i?.conditions?.length > 1 && (
                      <div className="award-bar-labels1">
                        <span className="text-[#FFB800] font-bold">
                          Level {index + 1}
                        </span>
                        <span className="text-[#ED1B24] font-bold">
                          ₹{item?.amount}
                        </span>
                      </div>
                    )}
                    <div className="award-bar1">
                      <div
                        className="award-bar-progress1"
                        style={{
                          width: item?.percentage ? i?.percentage + "%" : "0%",
                        }}
                      ></div>
                    </div>
                    <div className="award-bar-labels1">
                      <span className="award-bar-label1">0%</span>
                      <span className="award-bar-label1">100%</span>
                    </div>
                  </div>
                  <div
                    style={{ marginTop: i?.conditions?.length > 1 && "1.5rem" }}
                    className="reward-condition1"
                  >
                    <p className="reward-condition-title1">Reward condition:</p>
                    <p className="reward-condition-text1">
                      <span>{item?.title}</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className={`reward-claim-button1 ${
                        item?.isClaim ||
                        (item?.isEligible === false && item?.percentage !== 100)
                          ? "reward-claim-button-disabled1"
                          : ""
                      }`}
                      onClick={() => {
                        console.log(i);
                        claimReward(mainId);
                      }}
                      disabled={
                        item?.isClaim ||
                        (item?.isEligible === false && item?.percentage !== 100)
                      }
                    >
                      {item?.isClaim ? "Claimed" : "Claim"}
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
            <div className="agentMillionaireClass"></div>
            <div className="rewards_div_agent_container">
              <div className="rewards_div_agent">
                <Collapse
                accordion 
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
