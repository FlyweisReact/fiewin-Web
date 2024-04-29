import React, { useState } from "react";
import back from "../Assets/back.svg";
import bigdiamond from "../Assets/bigdiamond.svg";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import levelbg from "../Assets/levelbg.svg";
const Awardplains = () => {
  const [dropdown, setDropdown] = useState(false);
  const [height, setHeight] = useState("120px");

  const handleClick = () => {
    setHeight(dropdown ? "120px" : "250px");
    setDropdown(!dropdown);
  };

  const [bronzedropdown, setbronzedropdown] = useState(false);
  const [bronzeheight, setbronzeheight] = useState("120px");

  const bronzehandleClick = () => {
    setbronzeheight(bronzedropdown ? "120px" : "250px");
    setbronzedropdown(!bronzedropdown);
  };

  const [silverdropdown, setsilverdropdown] = useState(false);
  const [silverheight, setsilverheight] = useState("120px");

  const silverhandleClick = () => {
    setsilverheight(silverdropdown ? "120px" : "250px");
    setsilverdropdown(!silverdropdown);
  };

  const [golddropdown, setgolddropdown] = useState(false);
  const [goldheight, setgoldheight] = useState("120px");

  const goldhandleClick = () => {
    setgoldheight(golddropdown ? "120px" : "250px");
    setgolddropdown(!golddropdown);
  };

  const [platinumdropdown, setplatinumdropdown] = useState(false);
  const [platinumheight, setplatinumheight] = useState("120px");

  const platinumhandleClick = () => {
    setplatinumheight(platinumdropdown ? "120px" : "250px");
    setplatinumdropdown(!platinumdropdown);
  };

  const [diamonddropdown, setdiamonddropdown] = useState(false);
  const [diamondheight, setdiamondheight] = useState("120px");

  const diamondhandleClick = () => {
    setdiamondheight(diamonddropdown ? "120px" : "250px");
    setdiamonddropdown(!diamonddropdown);
  };

  const [masterdropdown, setmasterdropdown] = useState(false);
  const [masterheight, setmasterheight] = useState("120px");

  const masterhandleClick = () => {
    setmasterheight(masterdropdown ? "120px" : "250px");
    setmasterdropdown(!masterdropdown);
  };
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center flex-col award-header ">
        <div className="bg-[#FFB800] w-[500px] h-[80px]  flex justify-between items-center top-0 z-50 ">
          <div className="ml-2">
            <Link to="/Inviteandearn">
              <img src={back} alt="" />
            </Link>
          </div>
          <div className="text-white font-semibold text-xl">
            Agent Millionaire Award Plan
          </div>
          <div></div>
        </div>

     
        <div className="h-[1000px] w-[500px] bg-[#9520FD] overflow-y-scroll pb-10 award-head ">
          <div className="text-center mt-5 text-5xl font-extrabold text-white filter ">
            Agent Millionaire <br />{" "}
            <span className="text-[#FFB800]">Award Plan</span>
          </div>
          <div className="flex justify-center mt-10">
            <img src={bigdiamond} alt="" />
          </div>
          <div className="flex justify-center mt-10">
            <div className="text-center w-[350px] text-2xl text-white">
              he FieWin Agent Millionaire award plan is divided into 7 levels,
              and each level has generous rewards
            </div>
          </div>

          <div className="flex justify-center flex-col  items-center mt-5 gap-y-2 ">
            <div
              className="bg-white w-[460px] rounded-lg p-5 relative "
              style={{ height }}
            >
              <div className="bg-[#FFB800] relative w-[420px] h-[80px] rounded-lg flex justify-between items-center pl-28 pr-2 ">
                <div className="absolute w-[130px] top-[-1rem] left-[-1rem] ">
                  <img src={levelbg} alt="" />
                  <div
                    className="absolute top-3 left-4 text-white font-bold text-xl"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    level1
                  </div>
                </div>

                <div className="text-3xl font-bold">Iron</div>

                <div className="flex items-center gap-1">
                  <div className="text-[#ED1B24] font-bold">₹80</div>
                  <div
                    className="bg-[gray] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    onClick={handleClick}
                  >
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              {dropdown ? (
                <div className="mt-5">
                  <div>
                    <div
                      className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-2 ">
                      <span className="text-[black] text-[16px]">0%</span>
                      <span className="text-[black] text-[16px]">100%</span>
                    </div>
                  </div>
                  <div className="font-bold">Reward condition:</div>
                  <div>Invite 1 effective person to get reward</div>
                  <div className="flex justify-center mt-3">
                    {" "}
                    <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                      Claim
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className="bg-white w-[460px] rounded-lg p-5 relative "
              style={{ bronzeheight }}
            >
              <div className="bg-[#FFB800] relative w-[420px] h-[80px] rounded-lg flex justify-between items-center pl-28 pr-2 ">
                <div className="absolute w-[130px] top-[-1rem] left-[-1rem] ">
                  <img src={levelbg} alt="" />
                  <div
                    className="absolute top-3 left-4 text-white font-bold text-xl"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    level2
                  </div>
                </div>

                <div className="text-3xl font-bold">Bronze</div>

                <div className="flex items-center gap-1">
                  <div className="text-[#ED1B24] font-bold">₹400</div>
                  <div
                    className="bg-[gray] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    onClick={bronzehandleClick}
                  >
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              {bronzedropdown ? (
                <div className="mt-5">
                  <div>
                    <div
                      className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-2 ">
                      <span className="text-[black] text-[16px]">0%</span>
                      <span className="text-[black] text-[16px]">100%</span>
                    </div>
                  </div>
                  <div className="font-bold">Reward condition:</div>
                  <div>Invite 1 effective person to get reward</div>
                  <div className="flex justify-center mt-3">
                    {" "}
                    <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                      Claim
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className="bg-white w-[460px] rounded-lg p-5 relative "
              style={{ silverheight }}
            >
              <div className="bg-[#FFB800] relative w-[420px] h-[80px] rounded-lg flex justify-between items-center pl-28 pr-2 ">
                <div className="absolute w-[130px] top-[-1rem] left-[-1rem] ">
                  <img src={levelbg} alt="" />
                  <div
                    className="absolute top-3 left-4 text-white font-bold text-xl"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    level3
                  </div>
                </div>

                <div className="text-3xl font-bold">Silver</div>

                <div className="flex items-center gap-1">
                  <div className="text-[#ED1B24] font-bold">₹13000</div>
                  <div
                    className="bg-[gray] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    onClick={silverhandleClick}
                  >
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              {silverdropdown ? (
                <>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level1</div>{" "}
                      <div className="text-[#ED1B24]"> ₹1500</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 20 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level2</div>{" "}
                      <div className="text-[#ED1B24]"> ₹4500</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 50 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level3</div>{" "}
                      <div className="text-[#ED1B24]"> ₹7000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 80 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div
              className="bg-white w-[460px] rounded-lg p-5 relative "
              style={{ goldheight }}
            >
              <div className="bg-[#FFB800] relative w-[420px] h-[80px] rounded-lg flex justify-between items-center pl-28 pr-2 ">
                <div className="absolute w-[130px] top-[-1rem] left-[-1rem] ">
                  <img src={levelbg} alt="" />
                  <div
                    className="absolute top-3 left-4 text-white font-bold text-xl"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    level4
                  </div>
                </div>

                <div className="text-3xl font-bold">Gold</div>

                <div className="flex items-center gap-1">
                  <div className="text-[#ED1B24] font-bold">₹100000</div>
                  <div
                    className="bg-[gray] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    onClick={goldhandleClick}
                  >
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              {golddropdown ? (
                <>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level1</div>{" "}
                      <div className="text-[#ED1B24]"> ₹10000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 100 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level2</div>{" "}
                      <div className="text-[#ED1B24]"> ₹20000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 200 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level3</div>{" "}
                      <div className="text-[#ED1B24]"> ₹30000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 300 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level4</div>{" "}
                      <div className="text-[#ED1B24]"> ₹40000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 400 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div
              className="bg-white w-[460px] rounded-lg p-5 relative "
              style={{ platinumheight }}
            >
              <div className="bg-[#FFB800] relative w-[420px] h-[80px] rounded-lg flex justify-between items-center pl-28 pr-2 ">
                <div className="absolute w-[130px] top-[-1rem] left-[-1rem] ">
                  <img src={levelbg} alt="" />
                  <div
                    className="absolute top-3 left-4 text-white font-bold text-xl"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    level5
                  </div>
                </div>

                <div className="text-3xl font-bold">Platinum</div>

                <div className="flex items-center gap-1">
                  <div className="text-[#ED1B24] font-bold">₹350000</div>
                  <div
                    className="bg-[gray] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    onClick={platinumhandleClick}
                  >
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              {platinumdropdown ? (
                <>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level1</div>{" "}
                      <div className="text-[#ED1B24]"> ₹50000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 500 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level2</div>{" "}
                      <div className="text-[#ED1B24]"> ₹60000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 600 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level3</div>{" "}
                      <div className="text-[#ED1B24]"> ₹70000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 700 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level4</div>{" "}
                      <div className="text-[#ED1B24]"> ₹80000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 800 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level5</div>{" "}
                      <div className="text-[#ED1B24]"> ₹90000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 900 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div
              className="bg-white w-[460px] rounded-lg p-5 relative "
              style={{ silverheight }}
            >
              <div className="bg-[#FFB800] relative w-[420px] h-[80px] rounded-lg flex justify-between items-center pl-28 pr-2 ">
                <div className="absolute w-[130px] top-[-1rem] left-[-1rem] ">
                  <img src={levelbg} alt="" />
                  <div
                    className="absolute top-3 left-4 text-white font-bold text-xl"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    level6
                  </div>
                </div>

                <div className="text-3xl font-bold">Daimond</div>

                <div className="flex items-center gap-1">
                  <div className="text-[#ED1B24] font-bold">₹480000</div>
                  <div
                    className="bg-[gray] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    onClick={silverhandleClick}
                  >
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              {silverdropdown ? (
                <>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level1</div>{" "}
                      <div className="text-[#ED1B24]"> ₹100000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 1000 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level2</div>{" "}
                      <div className="text-[#ED1B24]"> ₹16000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 1500 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level3</div>{" "}
                      <div className="text-[#ED1B24]"> ₹220000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 2000 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div
              className="bg-white w-[460px] rounded-lg p-5 relative "
              style={{ masterheight }}
            >
              <div className="bg-[#FFB800] relative w-[420px] h-[80px] rounded-lg flex justify-between items-center pl-28 pr-2 ">
                <div className="absolute w-[130px] top-[-1rem] left-[-1rem] ">
                  <img src={levelbg} alt="" />
                  <div
                    className="absolute top-3 left-4 text-white font-bold text-xl"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    level7
                  </div>
                </div>

                <div className="text-3xl font-bold"> Master</div>

                <div className="flex items-center gap-1">
                  <div className="text-[#ED1B24] font-bold">₹1400000</div>
                  <div
                    className="bg-[gray] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    onClick={masterhandleClick}
                  >
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              {masterdropdown ? (
                <>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level1</div>{" "}
                      <div className="text-[#ED1B24]"> ₹350000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 300 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level2</div>{" "}
                      <div className="text-[#ED1B24]"> ₹4500000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 4000 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between mb-2">
                      <div className="text-[#FFB800]">Level3</div>{" "}
                      <div className="text-[#ED1B24]"> ₹600000</div>
                    </div>
                    <div>
                      <div
                        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2 ">
                        <span className="text-[black] text-[16px]">0%</span>
                        <span className="text-[black] text-[16px]">100%</span>
                      </div>
                    </div>
                    <div className="font-bold">Reward condition:</div>
                    <div>Invite 5000 effective person to get reward</div>
                    <div className="flex justify-center mt-3">
                      {" "}
                      <button className="w-[150px] h-[35px] bg-[#FFB800] text-white rounded-2xl">
                        Claim
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awardplains;
