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
import { getApi, postApi_withresponse } from "../../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { ShowHistory, SpinResModal, SpinRulesModal } from "../../Components/Modal/Modals";

const giveColor = (color) => {
  if (color === "yellow") {
    return <span className="w-[47px] h-[27px] bg-[#FFD958] rounded"></span>;
  } else if (color === "green") {
    return <span className="w-[47px] h-[27px] bg-[#1D9377] rounded"></span>;
  } else if (color === "red") {
    return <span className="w-[47px] h-[27px] bg-[#FF000B] rounded"></span>;
  } else {
    return <span className="w-[47px] h-[27px] bg-[#fff] rounded"></span>;
  }
};

const giveAnimal = (animal) => {
  if (animal === "tiger") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={tiger} alt="" />
      </span>
    );
  } else if (animal === "elephant") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={elephant} alt="" />
      </span>
    );
  } else if (animal === "king") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={king} alt="" />
      </span>
    );
  } else if (animal === "camel") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={camel} alt="" />
      </span>
    );
  }
};

const Circle = () => {
  const [showcircleRules, setShowcircleRules] = useState(false);
  const [showhistory, setShowhistory] = useState(false);
  const [popupwinner, setpopupwinner] = useState(false);
  const [color, setColor] = useState("red");
  const [amount, setAmount] = useState(20);
  const [animal, setAnimal] = useState("lion");
  const [loading, setLoading] = useState(false);
  const [spinData, setSpinData] = useState({});
  const [type, setType] = useState("all-order");
  const [allOrder, setAllOrder] = useState([]);
  const [myOrder, setMyOrder] = useState([]);

  const togglecircleRules = () => {
    setShowcircleRules(!showcircleRules);
  };

  const fetchAll = () => {
    getApi({
      url: "/headTail/everyoneOrderSpin",
      setResponse: setAllOrder,
    });
    getApi({
      url: "/headTail/myOrderSpin",
      setResponse: setMyOrder,
    });
  };

  const payload = {
    color,
    amount,
    animal,
  };

  const handleSubmit = async () => {
    const additionalFunctions = [
      () => setpopupwinner(true),
      (res) => setSpinData(res),
    ];
    await postApi_withresponse({
      url: "/headTail/spin",
      payload,
      setLoading,
      additionalFunctions,
    });
    fetchAll();
  };

  useEffect(() => {
    fetchAll();
  }, []);

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

            <div className="overflow-y-auto overflow-x-hidden h-[700px] cicle-cont">
              <SpinRulesModal
                show={showcircleRules}
                handleClose={() => setShowcircleRules(false)}
              />
              <ShowHistory
                show={showhistory}
                handleClose={() => setShowhistory(false)}
                data={myOrder}
              />
              <div className="flex mt-2 gap-1 cicle-color-div">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 w-[450px]">
                    {myOrder?.map((i) => giveColor(i?.selectedOption?.color))}
                  </div>
                  <div className="flex gap-1 w-[450px]">
                    {myOrder?.map((i) => giveAnimal(i?.selectedOption?.animal))}
                  </div>
                </div>
                <div
                  className="bg-[#646464] w-[47px] h-[57px] flex justify-center items-center rounded cursor-pointer"
                  onClick={() => setShowhistory(true)}
                >
                  <LuHistory style={{ color: "white" }} size={30} />
                </div>
              </div>
              <div className="mt-2 z-10">
                <div className="flex justify-center">
                  <img src={pin} alt="" />
                </div>
                <div className="flex justify-center">
                  <img
                    src={circle}
                    alt=""
                    className="w-[400px] moving-circle animate-spin"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                <div className="flex flex-col gap-2 items-center">
                  <button
                    className="bg-[#FFD958] circle-btn w-[150px] h-[60px] text-white font-bold rounded-lg text-xl"
                    onClick={() => setColor("yellow")}
                  >
                    Yellow
                  </button>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button
                    className="bg-[#FF000B] circle-btn w-[150px] h-[60px] text-white font-bold rounded-lg text-xl"
                    onClick={() => setColor("red")}
                  >
                    Red
                  </button>
                  <span>1.8</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button
                    className="bg-[#1D9377] circle-btn w-[150px] h-[60px] text-white font-bold rounded-lg text-xl"
                    onClick={() => setColor("green")}
                  >
                    green
                  </button>
                  <span>1.2</span>
                </div>
              </div>
              <div className="flex justify-around mt-3">
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img
                      src={camel}
                      onClick={() => setAnimal("camel")}
                      alt=""
                      className="w-10 cursor-pointer"
                    />
                  </div>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img
                      src={tiger}
                      onClick={() => setAnimal("lion")}
                      alt=""
                      className="w-10 cursor-pointer"
                    />
                  </div>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img
                      src={elephant}
                      alt=""
                      onClick={() => setAnimal("elephant")}
                      className="w-10 cursor-pointer"
                    />
                  </div>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img
                      src={king}
                      onClick={() => setAnimal("king")}
                      alt=""
                      className="w-10 cursor-pointer"
                    />
                  </div>
                  <span>1.2</span>
                </div>
              </div>
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
                  <button
                    className="bg-[#ED1B24] cicle-confirm-btn w-[450px] h-[50px] rounded-lg font-bold text-white"
                    onClick={() => handleSubmit()}
                  >
                    {loading ? <ClipLoader color="#fff" /> : "Confirm"}
                  </button>
                </div>
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
                <div className="overflow-table-order">
                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Period</th>
                        <th> Select</th>
                        <th>Result</th>
                        <th>Money</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {type === "my-order"
                        ? myOrder?.map((i, index) => (
                            <tr key={`order${index}`}>
                              <td> {i.PeriodNumber} </td>
                              <td>
                                {i.selectedOption?.animal}{" "}
                                {i.selectedOption?.color}
                              </td>
                              <td>
                                {i.result?.animal} {i.result?.color}
                              </td>
                              <td> ₹{i.money} </td>
                              <td className=" text-[#FF0000]"> ₹{i.amount} </td>
                            </tr>
                          ))
                        : allOrder?.map((i, index) => (
                            <tr key={`order${index}`}>
                              <td> {i.PeriodNumber} </td>
                              <td>
                                {i.selectedOption?.animal}{" "}
                                {i.selectedOption?.color}
                              </td>
                              <td>
                                {i.result?.animal} {i.result?.color}{" "}
                              </td>
                              <td> ₹{i.money} </td>
                              <td className=" text-[#FF0000]"> ₹{i.amount} </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Circle;
