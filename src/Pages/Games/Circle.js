/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import back from "../../Assets/back.svg";
import pin from "../../Assets/Games/pin.svg";
import circle from "../../Assets/Games/circle.svg";
import { LuHistory } from "react-icons/lu";
import tiger from "../../Assets/Games/tiger.svg";
import camel from "../../Assets/Games/camel.svg";
import elephant from "../../Assets/Games/elephant.svg";
import king from "../../Assets/Games/king.svg";
import { useState } from "react";
import { getApi, postApi } from "../../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { SpinResModal, SpinRulesModal } from "../../Components/Modal/Modals";
import {
  getVelocityColor,
  getVelocityAnimal,
  countDown_func,
  formatCountDown,
} from "../../utils/utils";
import TableLayout from "../../Components/TableLayout";

const GetColorBox = ({ color, setValue, colorCode, probab, className }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        className={`bg-[${colorCode}] circle-btn w-[150px] h-[60px] text-white font-bold rounded-lg text-xl ${className} `}
        style={{ textTransform: "capitalize" }}
        onClick={() => setValue(color)}
      >
        {color}
      </button>
      <span> {probab} </span>
    </div>
  );
};

const GetAnimalBox = ({ setValue, value, img, className }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div
        className={`
      bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg 
      ${className}
      `}
      >
        <img
          src={img}
          onClick={() => setValue(value)}
          alt=""
          className="w-10 cursor-pointer"
        />
      </div>
      <span>1.2</span>
    </div>
  );
};

const colorOptions = [
  {
    color: "yellow",
    code: "#FFD958",
    prob: "1.2",
  },
  {
    color: "red",
    code: "#FF000B",
    prob: "1.8",
  },
  {
    color: "green",
    code: "#1D9377",
    prob: "1.2",
  },
];

const animalOptions = [
  {
    name: "camel",
    img: camel,
  },

  {
    name: "lion",
    img: tiger,
  },
  {
    name: "elephant",
    img: elephant,
  },
  {
    name: "crown",
    img: king,
  },
];

const Circle = () => {
  const [showcircleRules, setShowcircleRules] = useState(false);
  const [popupwinner, setpopupwinner] = useState(false);
  const [amount, setAmount] = useState(20);
  const [loading, setLoading] = useState(false);
  const [spinData, setSpinData] = useState({});
  const [type, setType] = useState("all-order");
  const [myOrder, setMyOrder] = useState([]);
  const [lastTenOrder, setLastTenOrder] = useState({});

  const [isActivated, setIsActivate] = useState(true);
  const [countDownTime, setCountDownTime] = useState(0);
  const [currentGame, setCurrentGame] = useState({});
  const [colourChoice, setColorChoice] = useState("red");
  const [animalChoice, setAnimalChoice] = useState("crown");
  const [currentOrder, setCurrentOrder] = useState({});

  const togglecircleRules = () => {
    setShowcircleRules(!showcircleRules);
  };

  const fetchAll = () => {
    getApi({
      url: "/user/order/by/token",
      setResponse: setMyOrder,
    });
  };

  const payload = {
    colourChoice,
    animalChoice,
    amount,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const additionalFunctions = [
      () => setpopupwinner(true),
      (res) => setSpinData(res),
      fetchAll,
    ];
    postApi({
      url: "/user/spinGame/join/game",
      payload,
      setLoading,
      additionalFunctions,
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    getApi({
      url: "/user/last-ten-games/spin",
      setResponse: setLastTenOrder,
    });
    getApi({
      url: "/user/current-game/spin",
      setResponse: setCurrentGame,
    });
  }, []);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      getApi({
        url: "/user/current-game/spin",
        setResponse: setCurrentOrder,
      });
    }, 2000);
    return () => clearInterval(flipInterval);
  }, []);

  useEffect(() => {
    if (currentGame?.game?.currentCount !== undefined) {
      setCountDownTime(currentGame.game.currentCount);
    }
  }, [currentGame]);

  useEffect(() => {
    if (currentGame?.game?.currentCount > 0) {
      countDown_func({
        setIsActive: setIsActivate,
        setValue: setCountDownTime,
      });
    }
  }, [currentGame]);

  const currentOrderData = currentOrder?.game?.participants?.map((item) => [
    currentOrder?.game?.gameId,
    `***${item?.user?.slice(0, 3)}`,
    <div style={{ display: "flex", justifyContent: "center" }}>
      {getVelocityAnimal(item?.animalChoice)}
    </div>,
    <div style={{ display: "flex", justifyContent: "center" }}>
      {getVelocityColor(item?.colourChoice)}
    </div>,
    <span>₹{item?.amount}</span>,
  ]);

  console.log(myOrder);

  const myOrderData = myOrder?.orders
    ?.slice()
    ?.reverse()
    ?.filter((item) => item?.type === "Spin")
    ?.map((item) => [
      item?.spinGame?.gameId,
      <div style={{ display: "flex", justifyContent: "center" }}>
        {getVelocityAnimal(item?.animalChoice)}
        {getVelocityColor(item?.colourChoice)}
      </div>,
      <div style={{ display: "flex", justifyContent: "center" }}>
        {getVelocityAnimal(item?.spinGame?.animalResult)}
        {getVelocityColor(item?.spinGame?.colourResult)}
      </div>,

      <span>₹{item?.participants?.[0]?.amount}</span>,
    ]);

  return (
    <>
      <SpinResModal
        data={spinData}
        show={popupwinner}
        handleClose={() => setpopupwinner(false)}
      />
      <div className="bg-slate-100 h-screen flex justify-center circle-main-div">
        <div className="grid place-items-center">
          <div className="lg:w-[500px] lg:h-full cicle-div bg-white md:w-[400px] flex flex-col ">
            <div className="bg-[#FFB800]  text-white h-[50px] flex justify-between items-center text-xl font-semibold p-2 sticky">
              <div className="w-[100px]">
                <Link to="/Home">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="text-2xl w-[100px]"> Circle</div>

              <div
                className="w-[50px] cursor-pointer"
                onClick={() => togglecircleRules(true)}
              >
                Rules
              </div>
            </div>

            <div className="cicle-cont">
              <SpinRulesModal
                show={showcircleRules}
                handleClose={() => setShowcircleRules(false)}
              />

              <div className="flex mt-2 gap-1 cicle-color-div">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 w-[450px]">
                    {lastTenOrder?.games?.map((i) =>
                      getVelocityColor(i?.colourResult)
                    )}
                  </div>
                  <div className="flex gap-1 w-[450px]">
                    {" "}
                    {lastTenOrder?.games?.map((i) =>
                      getVelocityAnimal(i?.animalResult)
                    )}
                  </div>
                </div>
                <div className="bg-[#646464] w-[47px] h-[57px] flex justify-center items-center rounded">
                  <LuHistory style={{ color: "white" }} size={30} />
                </div>
              </div>
              <div className="show-period-number">
                <p className="desc" style={{ color: "#000" }}>
                  Period :{" "}
                </p>
                <p className="title" style={{ color: "#000" }}>
                  {" "}
                  {currentOrder?.game?.gameId}{" "}
                </p>
              </div>

              <div className="mt-2 z-10">
                <div className="flex justify-center">
                  <img src={pin} alt="" />
                </div>

                <div className="flex justify-center velocity-div">
                  {isActivated ? (
                    <img src={circle} alt="" className="w-[400px]" />
                  ) : (
                    <img
                      src={circle}
                      alt=""
                      className="w-[400px]  moving-circle animate-spin"
                    />
                  )}

                  <div className="countdown-velocity">
                    <p className="count-down">CountDown</p>
                    <p className="time"> {formatCountDown(countDownTime)}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {colorOptions?.map((i, index) => (
                  <GetColorBox
                    key={index}
                    color={i.color}
                    setValue={setColorChoice}
                    colorCode={i.code}
                    probab={i.prob}
                    className={colourChoice === i.color ? "activeBtn" : ""}
                  />
                ))}
              </div>

              <div className="flex justify-around mt-3">
                {animalOptions?.map((i, index) => (
                  <GetAnimalBox
                    ke={`animal${index}`}
                    setValue={setAnimalChoice}
                    value={i.name}
                    img={i.img}
                    className={animalChoice === i.name ? "activeBtn" : ""}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="border-2 pb-2 mt-2 rounded-t-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                  <div className="border-2 border-slate-200 p-2 m-3 rounded-2xl">
                    <div className="flex justify-around items-center mt-3">
                      <div className="w-[130px] flex flex-wrap gap-1">
                        <div
                          className="w-[60px] circle-small  h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => setAmount(20)}
                        >
                          20
                        </div>
                        <div
                          className="w-[60px] circle-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => setAmount(50)}
                        >
                          50
                        </div>
                        <div
                          className="w-[60px] circle-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => setAmount(100)}
                        >
                          100
                        </div>
                        <div
                          className="w-[60px] circle-small  h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => setAmount(200)}
                        >
                          200
                        </div>
                      </div>
                      <div>
                        <input
                          type="number"
                          min={0}
                          className="w-[170px] cicle-large h-[80px] text-2xl bg-[#BEEBFF] underline flex justify-center items-center rounded-lg outline-none text-center"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          className="w-[88px] h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => setAmount(500)}
                        >
                          500
                        </div>
                        <div
                          className="w-[88px] h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => setAmount(1000)}
                        >
                          1000
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex justify-center">
                    {isActivated ? (
                      <button
                        type="submit"
                        className="bg-[#ED1B24] head-tail-confirm-btn w-[450px] h-[50px] rounded-lg font-bold text-white  "
                      >
                        {loading ? <ClipLoader color="#fff" /> : "Confirm"}
                      </button>
                    ) : (
                      <button type="submit" className="disable_btn" disabled>
                        Confirm
                      </button>
                    )}
                  </div>
                </div>
              </form>

              <div className="border-2 pb-2 mt-2 rounded-t-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[300px]">
                <div className="flex mt-2 justify-center">
                  <div
                    className={`w-[250px] h-[50px] flex justify-center items-center border-b cursor-pointer ${
                      type === "all-order" && "border-black"
                    }`}
                    onClick={() => setType("all-order")}
                  >
                    Everyone's Order
                  </div>
                  <div
                    className={`w-[250px] h-[50px] flex justify-center items-center border-b cursor-pointer ${
                      type === "my-order" && "border-black"
                    }`}
                    onClick={() => setType("my-order")}
                  >
                    My Order
                  </div>
                </div>

                {type === "my-order" ? (
                  <TableLayout
                    thead={[
                      "Period",
                      "Selected Animal",
                      "Selected Color",
                      "Point",
                    ]}
                    tbody={myOrderData}
                  />
                ) : (
                  <TableLayout
                    thead={[
                      "Period",
                      "User",
                      "Selected Animal",
                      "Selected Color",
                      "Point",
                    ]}
                    tbody={currentOrderData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Circle;
