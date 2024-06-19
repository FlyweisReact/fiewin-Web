/** @format */

import { Link } from "react-router-dom";
import back from "../../Assets/back.svg";
import cointail from "../../Assets/cointail.svg";
import coinhead from "../../Assets/coinhead.svg";
import coinbg from "../../Assets/coinbg.svg";
import React, { useEffect, useState } from "react";
import { getApi, postApi } from "../../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { countDown_func, formatCountDown } from "../../utils/utils";
import TableLayout from "../../Components/TableLayout";
import {
  HeadResModal,
  HeadTailRulesPopup,
} from "../../Components/Modal/Modals";

const isWinLoss = (winAmount, amount) => {
  if (winAmount === 0) {
    return <span style={{ color: "#fa3c09" }}>-₹{amount}</span>;
  } else {
    return <span style={{ color: "#00c282" }}>+₹{winAmount}</span>;
  }
};

const Headandtail = () => {
  const [showRulesPopup, setShowRulesPopup] = useState(false);
  const [amount, setAmount] = useState(10);
  const [guess, setGuess] = useState("head");
  const [loading, setLoading] = useState(false);
  const [myOrder, setMyOrder] = useState({});
  const [type, setType] = useState("all-order");
  const [isActivated, setIsActivate] = useState(true);
  const [currentGame, setCurrentGame] = useState({});
  const [countDownTime, setCountDownTime] = useState(0);
  const [lastTenOrder, setLastTenOrder] = useState({});
  const [currentOrder, setCurrentOrder] = useState({});
  const [open, setOpen] = useState(false);
  const [gameRes, setGameRes] = useState({});
  const [isBtn, setIsBtn] = useState(true);

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

  const toggleRulesPopup = () => {
    setShowRulesPopup(!showRulesPopup);
  };

  const getOrders = () => {
    getApi({
      url: "/user/order/by/token",
      setResponse: setMyOrder,
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  const getLastOrder = () => {
    getApi({
      url: "/user/last-ten-games/head-tail",
      setResponse: setLastTenOrder,
    });
  };

  useEffect(() => {
    getApi({
      url: "/user/current-game/head-tail",
      setResponse: setCurrentGame,
    });
    getLastOrder();
  }, []);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      getApi({
        url: "/user/current-game/head-tail",
        setResponse: setCurrentOrder,
      });
    }, 2000);
    return () => clearInterval(flipInterval);
  }, []);

  useEffect(() => {
    if (countDownTime === 0 || countDownTime === 30) {
      getLastOrder();
    }
  }, [countDownTime]);

  const payload = {
    choice: guess,
    amount,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBtn(false);

    const countFunction = () => {
      if (countDownTime === 0) {
        setOpen(true);
        setIsBtn(true);
      } else {
        setTimeout(() => {
          setOpen(true);
          setIsBtn(true);
        }, countDownTime * 1000);
      }
    };

    const additionalFunctions = [(res) => setGameRes(res), countFunction];
    postApi({
      url: "/user/join/game",
      payload,
      setLoading,
      additionalFunctions,
    });
  };

  const userOrderDate = myOrder?.orders
    ?.slice()
    ?.filter((item) => item?.type === "Head-Tail")
    ?.map((item) => [
      item?.headTailGame?.gameId,
      <div className={`headandTail ${item?.choice === "head" ? "H" : "T"}`}>
        {item?.choice === "head" ? "H" : "T"}
      </div>,
      <div
        className={`headandTail ${
          item?.headTailGame?.result === "head" ? "H" : "T"
        }`}
      >
        {item?.headTailGame?.result === "head" ? "H" : "T"}
      </div>,
      <span>₹{item?.amount}</span>,
      isWinLoss(item?.userWinAmount, item?.amount),
    ]);

  const currentOrderData = currentOrder?.game?.participants?.map((item) => [
    currentOrder?.game?.gameId,
    `***${item?.user?.userId?.slice(-3)}`,
    <div className={`headandTail  ${item?.choice === "head" ? "H" : "T"} `}>
      {item?.choice === "head" ? "H" : "T"}
    </div>,
    <span>₹{item?.amount}</span>,
  ]);

  const isButtonActive = isActivated && isBtn;

  useEffect(() => {
    if (lastTenOrder) {
      setGuess(lastTenOrder?.games?.[0]?.result);
    }
  }, [lastTenOrder]);

  return (
    <>
      <HeadResModal
        data={gameRes}
        show={open}
        handleClose={() => setOpen(false)}
        fetchHandler={getOrders}
        getLastOrder={getLastOrder}
      />
      <div className="h-screen flex justify-center ">
        <div className="grid place-items-center ">
          <div className="lg:w-[500px] lg:h-full bg-white md:w-[400px] headtail-main flex flex-col ">
            <div className="bg-[#FFB800] text-white h-[50px] flex justify-between items-center text-xl font-semibold p-2 sticky">
              <div className="w-[100px]">
                <Link to="/Home">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="text-2xl w-[150px]">Head & Tail</div>

              <div
                className="w-[50px] cursor-pointer"
                onClick={() => toggleRulesPopup(true)}
              >
                Rules
              </div>
            </div>
            <div className="h-[450px] bg-gradient-to-t  from-[#001829] to-[#00538F]">
              <HeadTailRulesPopup
                show={showRulesPopup}
                handleClose={() => setShowRulesPopup(false)}
              />

              <div className="flex mt-2 gap-1 ">
                <div className="flex flex-col gap-1">
                  <div
                    className="flex gap-1 w-[450px] headtail-mini-main smallHeadMob "
                    style={{ overflow: "hidden" }}
                  >
                    {lastTenOrder?.games
                      ?.slice()
                      ?.reverse()
                      ?.map((i, index) => (
                        <React.Fragment key={`history${index}`}>
                          {i.result === "head" ? (
                            <span className="w-[47px] headtail-mini h-[57px] bg-[#B49366] rounded flex justify-center items-center font-bold text-xl">
                              {" "}
                              H
                            </span>
                          ) : (
                            <span className="w-[47px] headtail-mini h-[57px] bg-[#FFB800] rounded flex justify-center items-center font-bold text-xl">
                              T
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    <span className="latest-tagline">
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="show-period-number">
                <p className="desc">Period : </p>
                <p className="title"> {currentOrder?.game?.gameId} </p>
              </div>

              <div className="flex justify-center mt-10 relative">
                <img
                  src={coinbg}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 1 }}
                />

                {isActivated ? (
                  <img
                    src={guess === "head" ? coinhead : cointail}
                    alt=""
                    className="w-28 h-auto"
                    style={{ zIndex: 2 }}
                  />
                ) : (
                  <div className="coin">
                    <div className="coin-inner">
                      <img src={coinhead} alt="" className="coin-head" />
                      <img src={cointail} alt="" className="coin-tail" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-2 mt-10">
                <div className="flex flex-col gap-2 items-center">
                  <button
                    type="button"
                    className={`bg-[#A5814F] head-tail-btn w-[220px] h-[60px] text-white font-bold rounded-lg text-xl ${
                      guess === "head" ? "activeBtn" : ""
                    }`}
                    onClick={() => setGuess("head")}
                  >
                    Head
                  </button>
                  <span className="text-white">1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button
                    type="button"
                    className={`bg-[#FFB800] head-tail-btn w-[220px] h-[60px] text-white font-bold rounded-lg text-xl ${
                      guess === "tail" ? "activeBtn" : ""
                    } `}
                    onClick={() => setGuess("tail")}
                  >
                    Tail
                  </button>
                  <span className="text-white">1.2</span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="bg-white border-t-2 rounded-t-xl relative mt-5">
                  <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 items-center">
                    <span className="text-white text-[12px] ">CountDown</span>
                    <div className="bg-[#9EBFFF] w-[82px] h-[30px] rounded-3xl flex justify-center items-center text-xl font-semibold ">
                      {formatCountDown(countDownTime)}
                    </div>
                  </div>

                  <div className="velocity-amount-selector">
                    <div className="btns-selector">
                      <button type="button" onClick={() => setAmount(20)}>
                        20
                      </button>
                      <button type="button" onClick={() => setAmount(50)}>
                        50
                      </button>
                      <button type="button" onClick={() => setAmount(100)}>
                        100
                      </button>
                      <button type="button" onClick={() => setAmount(200)}>
                        200
                      </button>
                    </div>
                    <div>
                      <input
                        type="number"
                        min={10}
                        max={50000}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div className="btns-selector special">
                      <button type="button" onClick={() => setAmount(500)}>
                        500
                      </button>
                      <button type="button" onClick={() => setAmount(1000)}>
                        1000
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 flex justify-center">
                    {isButtonActive ? (
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
                          "Select",
                          "Result",
                          "Point",
                          "Amount",
                        ]}
                        tbody={userOrderDate}
                      />
                    ) : (
                      <TableLayout
                        thead={["Period", "User", "Select", "Point"]}
                        tbody={currentOrderData}
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headandtail;
