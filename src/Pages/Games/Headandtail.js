/** @format */

import { Link } from "react-router-dom";
import back from "../../Assets/back.svg";
import cointail from "../../Assets/cointail.svg";
import coinhead from "../../Assets/coinhead.svg";
import coinbg from "../../Assets/coinbg.svg";
import { LuHistory } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { getApi, postApi } from "../../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { countDown_func, formatCountDown } from "../../utils/utils";
import TableLayout from "../../Components/TableLayout";
import { HeadTailRulesPopup } from "../../Components/Modal/Modals";

const Headandtail = () => {
  const [showRulesPopup, setShowRulesPopup] = useState(false);
  const [amount, setAmount] = useState(10);
  const [guess, setGuess] = useState("head");
  const [loading, setLoading] = useState(false);
  const [myOrder, setMyOrder] = useState({});
  const [allOrder, setAllOrder] = useState({});
  const [type, setType] = useState("all-order");
  const [countdown, setCountdown] = useState(20);
  const [isActivated, setIsActivate] = useState(true);
  const [isCoinHead, setIsCoinHead] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsCoinHead((prevState) => !prevState);
    }, 500);
    return () => clearInterval(flipInterval);
  }, []);

  useEffect(() => {
    const clearTimer = countDown_func({
      setValue: setCountdown,
      setIsActive: setIsActivate,
    });
    return () => clearTimer();
  }, []);

  const toggleRulesPopup = () => {
    setShowRulesPopup(!showRulesPopup);
  };

  const getOrders = () => {
    getApi({
      url: "/user/game/users",
      setResponse: setMyOrder,
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    getApi({
      url: "/user/game/all/users?page=1&limit=100",
      setResponse: setAllOrder,
    });
  }, [countdown]);

  const payload = {
    choice: guess,
    amount,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const additionalFunctions = [getOrders];
    postApi({
      url: "/user/join/game",
      payload,
      setLoading,
      additionalFunctions,
    });
  };

  const allOrderData = allOrder?.games?.flatMap((item) =>
    item?.participants?.map((i) => [
      item?.gameId,
      i?.user?.name ? i?.user?.name : i?.user?.phoneNumber,
      <div className={`headandTail  ${i?.choice === "head" ? "H" : "T"} `}>
        {i?.choice === "head" ? "H" : "T"}
      </div>,
    ])
  );
  const userOrderDate = myOrder?.games
    ?.slice()
    ?.reverse()
    ?.map((item) => [
      item?.gameId,
      <div
        className={`headandTail  ${
          item?.participants?.[0]?.choice === "head" ? "H" : "T"
        } `}
      >
        {item?.participants?.[0]?.choice === "head" ? "H" : "T"}
      </div>,
      <div className={`headandTail  ${item?.result === "head" ? "H" : "T"} `}>
        {item?.result === "head" ? "H" : "T"}
      </div>,
      <span>₹{item?.participants?.[0]?.amount}</span>,
    ]);

  return (
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
          <div className="h-[400px] bg-gradient-to-t  from-[#001829] to-[#00538F]">
            <HeadTailRulesPopup
              show={showRulesPopup}
              handleClose={() => setShowRulesPopup(false)}
            />

            <div className="flex mt-2 gap-1 ">
              <div className="flex flex-col gap-1">
                <div
                  className="flex gap-1 w-[450px] headtail-mini-main "
                  style={{ overflow: "hidden" }}
                >
                  {/* {myOrder?.map((i, index) => (
                    <React.Fragment key={`history${index}`}>
                      {i.Select === "head" ? (
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
                  ))} */}
                </div>
              </div>
              <div className="bg-[#646464]  w-[40px] h-[50px] flex justify-center items-center rounded">
                <LuHistory style={{ color: "white" }} size={20} />
              </div>
            </div>

            {isActivated ? (
              <div className="flex justify-center mt-10 relative">
                <img
                  src={coinbg}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                />

                {guess === "head" ? (
                  <img
                    src={coinhead}
                    alt=""
                    className="w-28 h-auto transform transition-transform duration-500 rotate-180 hover:rotate-y-180"
                  />
                ) : (
                  <img
                    src={cointail}
                    alt=""
                    className="w-28 h-auto transform transition-transform duration-500 rotate-0 hover:rotate-y-180"
                  />
                )}
              </div>
            ) : (
              <div className="flex justify-center mt-10 relative">
                <img
                  src={coinbg}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                />

                {isCoinHead ? (
                  <img
                    src={coinhead}
                    alt=""
                    className="w-28 h-auto transform transition-transform duration-500 rotate-180 hover:rotate-y-180"
                  />
                ) : (
                  <img
                    src={cointail}
                    alt=""
                    className="w-28 h-auto transform transition-transform duration-500 rotate-0 hover:rotate-y-180"
                  />
                )}
              </div>
            )}

            <div className="flex justify-center gap-2 mt-10">
              <div className="flex flex-col gap-2 items-center">
                <button
                  type="button"
                  className="bg-[#A5814F] head-tail-btn w-[220px] h-[60px] text-white font-bold rounded-lg text-xl"
                  onClick={() => setGuess("head")}
                >
                  Head
                </button>
                <span className="text-white">1.2</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <button
                  type="button"
                  className="bg-[#FFB800] head-tail-btn w-[220px] h-[60px] text-white font-bold rounded-lg text-xl"
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
                    {formatCountDown(countdown)}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex justify-around items-center border-2 rounded-lg mt-5 p-2 w-[450px]">
                    <div className="w-[130px] flex flex-wrap gap-1">
                      <div
                        className="w-[60px] head-tail-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                        onClick={() => setAmount(20)}
                      >
                        20
                      </div>
                      <div
                        className="w-[60px] head-tail-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                        onClick={() => setAmount(50)}
                      >
                        50
                      </div>
                      <div
                        className="w-[60px] head-tail-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                        onClick={() => setAmount(100)}
                      >
                        100
                      </div>
                      <div
                        className="w-[60px] head-tail-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg cursor-pointer"
                        onClick={() => setAmount(200)}
                      >
                        200
                      </div>
                    </div>
                    <div>
                      <input
                        type={"number"}
                        className="w-[170px] head--tail-medium h-[80px] text-2xl bg-[#BEEBFF] underline flex justify-center items-center rounded-lg"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        min={0}
                        style={{ outline: "none", textAlign: "center" }}
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
                      thead={["Period", "Select", "Result", "Money"]}
                      tbody={userOrderDate}
                    />
                  ) : (
                    <TableLayout
                      thead={["Period", "User", "Select"]}
                      tbody={allOrderData}
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headandtail;
