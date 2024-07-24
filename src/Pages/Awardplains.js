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
        <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
          <div className="flex items-center space-x-2">
            {console.log(`level${index + 1}`, "level")}
            <img
              className="w-24 -ml-7 -mt-7"
              src={levelImages[index + 1]}
              alt="level1"
            />
            <p className="-ml-2 text-2xl">{i?.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-red-500 text-2xl">₹{i?.reward}</p>
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
                  className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
                  // key={index}
                >
                  <div className="w-full  rounded-full h-4 dark:bg-gray-700">
                    {/* {progressBar(i?._id)} */}
                    <div className="w-full bg-gray-300 h-4 rounded-full">
                      <div
                        className="bg-[#38B6FF] h-4 rounded-full"
                        style={{
                          width: i?.percentage ? i?.percentage + "%" : 0 + "%",
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold"> 0% </span>
                      <span className="font-bold">100% </span>
                    </div>
                  </div>
                  <div className="text-left mb-2">
                    <p className="text-xl mt-2 font-bold">Reward condition:</p>
                    <p className="flex flex-col">
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
  // const items = [
  //   {
  //     key: "1",
  //     label: (
  //       <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
  //         <div className="flex items-center space-x-2">
  //           <img className="w-24 -ml-7 -mt-7" src={level1} alt="level1" />
  //           <p className="-ml-2 text-2xl">{data?.data?.[0]?.name}</p>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <p className="font-bold text-red-500 text-2xl">
  //             ₹{data?.data?.[0]?.rewards}
  //           </p>
  //           <p className="flex items-center">
  //             <Link className="p-1 rounded-full bg-[#737D89]">
  //               <Icon
  //                 icon="iconamoon:arrow-down-2"
  //                 width="1.2rem"
  //                 height="1.2rem"
  //                 style={{ color: "#fcf8f8" }}
  //               />
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     children: (
  //       <div>

  //         {data?.data?.[0]?.conditions?.map((i, index) => (
  //            <div
  //            className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //            // key={index}
  //          >
  //            <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //              {/* {progressBar(i?._id)} */}
  //              <div className="w-full bg-gray-300 h-4 rounded-full">
  //                <div
  //                  className="bg-[#FFB800] h-4 rounded-full"
  //                  style={{ width: "80%" }}
  //                ></div>
  //              </div>
  //              <div className="flex justify-between">
  //                <span className="font-bold"> 0% </span>
  //                <span className="font-bold">100% </span>
  //              </div>
  //            </div>
  //            <div className="text-left mb-2">
  //              <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //              <p className="flex flex-col">
  //                <span>Invite 1 effective person to get reward</span>
  //              </p>
  //            </div>
  //            <div className="flex justify-center">
  //              <button
  //                className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //                style={{ backgroundColor: "#FFB800" }}
  //                // onClick={() => claimReward(i._id)}
  //              >
  //                Claim
  //              </button>
  //            </div>
  //          </div>
  //         ))}

  //       </div>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
  //         <div className="flex items-center space-x-2">
  //           <img className="w-24 -ml-7 -mt-7" src={level2} alt="level2" />
  //           <p className="-ml-2 text-2xl">{data?.data?.[1]?.name}</p>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <p className="font-bold text-red-500 text-2xl">
  //             ₹{data?.data?.[1]?.rewards}
  //           </p>
  //           <p className="flex items-center">
  //             <Link className="p-1 rounded-full bg-[#737D89]">
  //               <Icon
  //                 icon="iconamoon:arrow-down-2"
  //                 width="1.2rem"
  //                 height="1.2rem"
  //                 style={{ color: "#fcf8f8" }}
  //               />
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     children: (
  //       <div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 5 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
  //         <div className="flex items-center space-x-2">
  //           <img className="w-24 -ml-7 -mt-7" src={level3} alt="level3" />
  //           <p className="-ml-2 text-2xl">{data?.data?.[2]?.name}</p>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <p className="font-bold text-red-500 text-2xl">
  //             ₹{data?.data?.[2]?.rewards}
  //           </p>
  //           <p className="flex items-center">
  //             <Link className="p-1 rounded-full bg-[#737D89]">
  //               <Icon
  //                 icon="iconamoon:arrow-down-2"
  //                 width="1.2rem"
  //                 height="1.2rem"
  //                 style={{ color: "#fcf8f8" }}
  //               />
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     children: (
  //       <div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 1 </span>
  //               <span className="font-bold text-red-500"> ₹1500 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 20 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 2 </span>
  //               <span className="font-bold text-red-500"> ₹4500 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 50 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 3 </span>
  //               <span className="font-bold text-red-500"> ₹7000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 80 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "4",
  //     label: (
  //       <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
  //         <div className="flex items-center space-x-2">
  //           <img className="w-24 -ml-7 -mt-7" src={level4} alt="level4" />
  //           <p className="-ml-2 text-2xl">{data?.data?.[3]?.name}</p>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <p className="font-bold text-red-500 text-2xl">
  //             ₹{data?.data?.[3]?.rewards}
  //           </p>
  //           <p className="flex items-center">
  //             <Link className="p-1 rounded-full bg-[#737D89]">
  //               <Icon
  //                 icon="iconamoon:arrow-down-2"
  //                 width="1.2rem"
  //                 height="1.2rem"
  //                 style={{ color: "#fcf8f8" }}
  //               />
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     children: (
  //       <div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 1 </span>
  //               <span className="font-bold text-red-500"> ₹10000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>

  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 100 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 2 </span>
  //               <span className="font-bold text-red-500"> ₹2000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 200 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 3 </span>
  //               <span className="font-bold text-red-500"> ₹30000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 300 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 4 </span>
  //               <span className="font-bold text-red-500"> ₹40000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 400 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "5",
  //     label: (
  //       <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
  //         <div className="flex items-center space-x-2">
  //           <img className="w-24 -ml-7 -mt-7" src={level5} alt="level5" />
  //           <p className="-ml-2 text-2xl">{data?.data?.[4]?.name}</p>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <p className="font-bold text-red-500 text-2xl">
  //             ₹{data?.data?.[4]?.rewards}
  //           </p>
  //           <p className="flex items-center">
  //             <Link className="p-1 rounded-full bg-[#737D89]">
  //               <Icon
  //                 icon="iconamoon:arrow-down-2"
  //                 width="1.2rem"
  //                 height="1.2rem"
  //                 style={{ color: "#fcf8f8" }}
  //               />
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     children: (
  //       <div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 1 </span>
  //               <span className="font-bold text-red-500"> ₹50000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>

  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 500 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 2 </span>
  //               <span className="font-bold text-red-500"> ₹60000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 600 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 3 </span>
  //               <span className="font-bold text-red-500"> ₹70000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 700 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 4 </span>
  //               <span className="font-bold text-red-500"> ₹80000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 800 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 5 </span>
  //               <span className="font-bold text-red-500"> ₹90000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 900 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "6",
  //     label: (
  //       <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
  //         <div className="flex items-center space-x-2">
  //           <img className="w-24 -ml-7 -mt-7" src={level6} alt="level6" />
  //           <p className="-ml-2 text-2xl">{data?.data?.[5]?.name}</p>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <p className="font-bold text-red-500 text-2xl">
  //             ₹{data?.data?.[5]?.rewards}
  //           </p>
  //           <p className="flex items-center">
  //             <Link className="p-1 rounded-full bg-[#737D89]">
  //               <Icon
  //                 icon="iconamoon:arrow-down-2"
  //                 width="1.2rem"
  //                 height="1.2rem"
  //                 style={{ color: "#fcf8f8" }}
  //               />
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     children: (
  //       <div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 1 </span>
  //               <span className="font-bold text-red-500"> ₹100000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>

  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 1000 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 2 </span>
  //               <span className="font-bold text-red-500"> ₹160000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 1500 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 3 </span>
  //               <span className="font-bold text-red-500"> ₹220000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 2000 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "7",
  //     label: (
  //       <div className="border p-4 rounded-lg flex items-center justify-between bg-[#FFB800]">
  //         <div className="flex items-center space-x-2">
  //           <img className="w-24 -ml-7 -mt-7" src={level7} alt="level7" />
  //           <p className="-ml-2 text-2xl">{data?.data?.[6]?.name}</p>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <p className="font-bold text-red-500 text-2xl">
  //             ₹{data?.data?.[6]?.rewards}
  //           </p>
  //           <p className="flex items-center">
  //             <Link className="p-1 rounded-full bg-[#737D89]">
  //               <Icon
  //                 icon="iconamoon:arrow-down-2"
  //                 width="1.2rem"
  //                 height="1.2rem"
  //                 style={{ color: "#fcf8f8" }}
  //               />
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     children: (
  //       <div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 1 </span>
  //               <span className="font-bold text-red-500"> ₹350000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>

  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 3000 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 2 </span>
  //               <span className="font-bold text-red-500"> ₹450000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 4000 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className=" reward-card w-full h-[200px] flex flex-col p-5 gap-4 rounded-lg"
  //           // key={index}
  //         >
  //           <div className="w-full  rounded-full h-4 dark:bg-gray-700">
  //             {/* {progressBar(i?._id)} */}
  //             <div className="flex justify-between">
  //               <span className="font-bold text-yellow-500"> Level 3 </span>
  //               <span className="font-bold text-red-500"> ₹600000 </span>
  //             </div>
  //             <div className="w-full bg-gray-300 h-4 rounded-full">
  //               <div
  //                 className="bg-[#FFB800] h-4 rounded-full"
  //                 style={{ width: "80%" }}
  //               ></div>
  //             </div>
  //             <div className="flex justify-between ">
  //               <span className="font-bold"> 0% </span>
  //               <span className="font-bold">100% </span>
  //             </div>
  //           </div>
  //           <div className="text-left mb-2 mt-4">
  //             <p className="text-xl mt-2 font-bold">Reward condition:</p>
  //             <p className="flex flex-col">
  //               <span>Invite 5000 effective person to get reward</span>
  //             </p>
  //           </div>
  //           <div className="flex justify-center">
  //             <button
  //               className={`w-[120px] h-[40px] text-white rounded-xl font-semibold text-md`}
  //               style={{ backgroundColor: "#FFB800" }}
  //               // onClick={() => claimReward(i._id)}
  //             >
  //               Claim
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];
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
