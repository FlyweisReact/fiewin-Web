/** @format */

import { Link } from "react-router-dom";
import back from "../../Assets/back.svg";
import cointail from "../../Assets/cointail.svg";
import coinhead from "../../Assets/coinhead.svg";
import coinbg from "../../Assets/coinbg.svg";
import { LuHistory } from "react-icons/lu";
import { useEffect, useState } from "react";
import { getApi, postApi } from "../../Repository/Repository";
import { ClipLoader } from "react-spinners";

const Headandtail = () => {
  const [rules, setRules] = useState({});
  const [showRulesPopup, setShowRulesPopup] = useState(false);
  const [amount, setAmount] = useState(10);
  const [guess, setGuess] = useState("head");
  const [loading, setLoading] = useState(false);
  const [myOrder, setMyOrder] = useState({});

  const toggleRulesPopup = () => {
    setShowRulesPopup(!showRulesPopup);
  };

  useEffect(() => {
    getApi({
      url: "/headTail/headTailRule",
      setResponse: setRules,
    });
    getApi({
      url: "/headTail/myOrderHeadTail",
      setResponse: setMyOrder,
    });
  }, []);

  console.log(myOrder);

  const payload = {
    guess,
    wallet: amount,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postApi({
      url: "/headTail/flipcoin",
      payload,
      setLoading,
    });
  };

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
            {showRulesPopup && (
              <div className="rules-popup overflow-y-auto  headtail-rule z-50">
                <div className="flex justify-center m-2">
                  <div className="bg-[#FFB800] rounded-2xl w-[200px] h-[38px] flex justify-center items-center font-bold">
                    HeadTail Rules
                  </div>
                </div>
                <div>{rules?.statement}</div>

                <div className="m-2">
                  <ul>
                    {rules?.points?.map((i, index) => (
                      <li
                        className="font-bold list-decimal"
                        key={`options${index}`}
                      >
                        {" "}
                        {i?.description}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <table className="table-fixed border-slate-950 border">
                    <thead>
                      <tr>
                        <th className="w-[150px] bg-[#FFE7A9] border-slate-950 border">
                          Song
                        </th>
                        <th className="w-[200px] bg-[#FFE7A9] border-slate-950 border">
                          {" "}
                          Artist
                        </th>
                        <th className="w-[150px] bg-[#FFE7A9] border-slate-950 border">
                          Year
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rules?.options?.map((i, index) => (
                        <tr key={`Index${index}`}>
                          <td className="w-[150px] text-center text-[#F57C00] bg-[#D9D9D9] border-slate-950 border">
                            {i.Select}
                          </td>
                          <td className="w-[150px] text-center bg-[#D9D9D9] border-slate-950 border">
                            {i.Result}
                          </td>
                          <td className="w-[150px] text-center bg-[#D9D9D9] border-slate-950 border">
                            {i.Multiplier}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-2">
                  <button
                    className="w-[430px] h-[50px] bg-[#F2A60C] text-white font-bold rounded-lg"
                    onClick={() => toggleRulesPopup(false)}
                  >
                    I Got it
                  </button>
                </div>
              </div>
            )}
            <div className="flex mt-2 gap-1 ">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 w-[450px] headtail-mini-main ">
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#B49366] rounded flex justify-center items-center font-bold text-xl">
                    {" "}
                    H
                  </span>
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#FFB800] rounded flex justify-center items-center font-bold text-xl">
                    T
                  </span>
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#B49366] rounded flex justify-center items-center font-bold text-xl">
                    {" "}
                    H
                  </span>
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#FFB800] rounded flex justify-center items-center font-bold text-xl">
                    T
                  </span>
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#B49366] rounded flex justify-center items-center font-bold text-xl">
                    {" "}
                    H
                  </span>
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#FFB800] rounded flex justify-center items-center font-bold text-xl">
                    T
                  </span>
                  <span className="w-[47px]  headtail-mini h-[57px] bg-[#B49366] rounded flex justify-center items-center font-bold text-xl">
                    {" "}
                    H
                  </span>
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#FFB800] rounded flex justify-center items-center font-bold text-xl">
                    T
                  </span>
                  <span className="w-[47px] headtail-mini h-[57px] bg-[#B49366] rounded flex justify-center items-center font-bold text-xl">
                    {" "}
                    H
                  </span>
                  <span className="w-[47px]  headtail-mini h-[57px] bg-[#FFB800] rounded flex justify-center items-center font-bold text-xl">
                    T
                  </span>
                </div>
              </div>
              <div className="bg-[#646464]  w-[40px] h-[50px] flex justify-center items-center rounded">
                <LuHistory style={{ color: "white" }} size={20} />
              </div>
            </div>

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
                    {" "}
                    15:00
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
                        style={{ outline: "none", textAlign: "center" }}
                        placeholder="₹10"
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
                    type="submit"
                    className="bg-[#ED1B24] head-tail-confirm-btn w-[450px] h-[50px] rounded-lg font-bold text-white  "
                  >
                    {loading ? <ClipLoader color="#fff" /> : "Confirm"}
                  </button>
                </div>
                <div className="border-2 pb-2 mt-2 rounded-t-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[300px]">
                  <div className="flex mt-2 justify-center">
                    <div className="w-[250px] h-[50px] flex justify-center items-center border-b border-black">
                      Everyone's Order
                    </div>
                    <div className="w-[250px] h-[50px] flex justify-center items-center border-b ">
                      My Order
                    </div>
                  </div>
                  <table className="table-fixed border-slate-950 border">
                    <thead>
                      <tr>
                        <th>Period</th>
                        <th> Select</th>
                        <th>Point</th>
                        <th>Result</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
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
