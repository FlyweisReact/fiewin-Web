import React from "react";
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
import { IoMdClose } from "react-icons/io";
import { TbCoinRupee } from "react-icons/tb";
import ComponentHead from "../../Components/ComponentHead";

const Circle = () => {
  const [showcircleRules, setShowcircleRules] = useState(false);
  const [showhistory, setShowhistory] = useState(false);
  const [popupwinner, setpopupwinner] = useState(true);

  const togglecircleRules = () => {
    setShowcircleRules(!showcircleRules);
  };
  const togglehistory = () => {
    setShowhistory(!showhistory);
  };

  return (
    <>
      {popupwinner ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[300px] h-[350px] bg-white  rounded-lg relative ">
            <div className="bg-[red] w-full h-[50px] rounded-t text-white font-bold text-xl flex justify-center items-center">
              Win
            </div>
            <div className="absolute top-0 right-0 mr-2 mt-[-1rem]">
              <TbCoinRupee style={{ color: "gold" }} size={35} />
            </div>
            <div className="absolute top-0 left-0 ml-[-1rem] mt-2">
              <TbCoinRupee style={{ color: "gold" }} size={40} />
            </div>
            <div className="flex justify-center mt-2">
              <div className="bg-[red] w-[70px] h-[70px] rounded-full flex justify-center items-center text-3xl text-white font-bold">
                6
              </div>
            </div>
            <div className="">
              <div className="flex justify-between mt-2 mr-5 ml-5">
                <div>Period</div>
                <div>202032321</div>
              </div>
              <div className="flex justify-between mt-2 mr-5 ml-5">
                <div>Price</div>
                <div>₹202042</div>
              </div>
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <div className="bg-gray-100 w-[250px] h-[90px] p-2 ">
                <div className="flex justify-between">
                  <span>Select</span>
                  <span>RED</span>
                </div>
                <div className="flex justify-between">
                  <span>Point</span>
                  <span>200</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount</span>
                  <span className="text-[green] text-xl">+₹200.00</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setpopupwinner(false)}
                className="w-[200px] h-[40px] bg-[#87CEEB] text-white font-bold rounded-lg"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      ) : null}

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


            <ComponentHead title={"Circle"} subTitle={"Rules"} subLink  />
            <div className="overflow-y-auto overflow-x-hidden h-[700px] cicle-cont">
              {showcircleRules && (
                <div className="rules-popup z-50 overflow-y-auto h-full cicle-rules-main">
                  <div className="flex justify-center m-2">
                    <div className="bg-[#FFB800] rounded-2xl w-[200px] h-[38px] flex justify-center items-center font-bold">
                      Circle Rules
                    </div>
                  </div>
                  <div className="font-bold">How to play?</div>
                  <div>
                    The Circle game is played every 15 seconds, and one of the
                    54 grids is randomly selected in each draw. The 58 squares
                    correspond to 3 colors (yellow, red, green), three animals
                    (lion, elephant, camel) & one crown. If you choose the right
                    one, you will win the prize.
                  </div>

                  <div className="border-2 rounded-2xl ">
                    <div className="flex justify-center gap-2 mt-3">
                      <div className="flex flex-col gap-2 items-center">
                        <button className="bg-[#FFD958] w-[120px] h-[60px] circle-rule-btn text-white font-bold rounded-lg text-xl">
                          Yellow
                        </button>
                        <span>1.2</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <button className="bg-[#FF000B] w-[120px] h-[60px] circle-rule-btn text-white font-bold rounded-lg text-xl">
                          Red
                        </button>
                        <span>1.2</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <button className="bg-[#1D9377] w-[120px] h-[60px] circle-rule-btn text-white font-bold rounded-lg text-xl">
                          green
                        </button>
                        <span>1.2</span>
                      </div>
                    </div>
                    <div className="flex justify-around mt-3">
                      <div className="flex flex-col gap-2 items-center">
                        <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                          <img src={camel} alt="" className="w-10" />
                        </div>
                        <span>1.2</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                          <img src={tiger} alt="" className="w-10" />
                        </div>
                        <span>1.2</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                          <img src={elephant} alt="" className="w-10" />
                        </div>
                        <span>1.2</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                          <img src={king} alt="" className="w-10" />
                        </div>
                        <span>1.2</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    Choose any one to place an order
                  </div>
                  <div className="font-bold mt-2">
                    How is the amount calculated?
                  </div>
                  <div className="mt-2">
                    If you spend Rs.100 to trade, after deducting 6 rupees
                    service fee, your amount is 94 rupees.
                  </div>
                  <div className="mt-3">
                    18X: You will get (94 * 18) = 1692 rupees
                  </div>
                  <div className="flex justify-center mt-2">
                    <button
                      className="w-[430px] h-[50px] bg-[#F2A60C] text-white font-bold rounded-lg"
                      onClick={() => togglecircleRules(false)}
                    >
                      I Got it
                    </button>
                  </div>
                </div>
              )}
              {showhistory ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-5xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[350px] h-[400px] bg-white outline-none focus:outline-none">
                        <div className="flex justify-between m-3">
                          <div></div>
                          <div className="text-xl font-semibold">History</div>
                          <div className="bg-[#FFB800] w-[25px] h-[25px] rounded-lg flex justify-center items-center shadow-2xl">
                            <IoMdClose
                              size={25}
                              style={{ color: "white", cursor: "pointer" }}
                              onClick={() => setShowhistory(false)}
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="flex justify-between ml-2 mr-2">
                          <div>Periods</div>
                          <div>Results</div>
                        </div>
                        <hr />
                        <div className="flex justify-between m-2">
                          <div>2403152334</div>
                          <div className="flex gap-1">
                            <div className="bg-[#FF000B] w-[27px] h-[26px] rounded-lg"></div>
                            <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
                              <img src={tiger} alt="" className="w-5" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between m-2">
                          <div>2403152334</div>
                          <div className="flex gap-1">
                            <div className="bg-[#1D9377] w-[27px] h-[26px] rounded-lg"></div>
                            <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
                              <img src={camel} alt="" className="w-5" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between m-2">
                          <div>2403152334</div>
                          <div className="flex gap-1">
                            <div className="bg-[#1D9377] w-[27px] h-[26px] rounded-lg"></div>
                            <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
                              <img src={elephant} alt="" className="w-5" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between m-2">
                          <div>2403152334</div>
                          <div className="flex gap-1">
                            <div className="bg-[#FFB800] w-[27px] h-[26px] rounded-lg"></div>
                            <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
                              <img src={tiger} alt="" className="w-5" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between m-2">
                          <div>2403152334</div>
                          <div className="flex gap-1">
                            <div className="bg-[#1D9377] w-[27px] h-[26px] rounded-lg"></div>
                            <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
                              <img src={camel} alt="" className="w-5" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between m-2">
                          <div>2403152334</div>
                          <div className="flex gap-1">
                            <div className="bg-[#FFB800] w-[27px] h-[26px] rounded-lg"></div>
                            <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
                              <img src={elephant} alt="" className="w-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              <div className="flex mt-2 gap-1 cicle-color-div">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 w-[450px]">
                    <span className="w-[47px] h-[27px] bg-[#FFD958] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#FFD958] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#FFD958] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#FF000B] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#FFD958] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#1D9377] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#FFD958] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#FF000B] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#FFD958] rounded"></span>
                    <span className="w-[47px] h-[27px] bg-[#1D9377] rounded"></span>
                  </div>
                  <div className="flex gap-1 w-[450px]">
                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={tiger} alt="" />
                    </span>
                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={camel} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={elephant} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={camel} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={tiger} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={camel} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={elephant} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={tiger} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={camel} alt="" />
                    </span>

                    <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
                      <img src={tiger} alt="" />
                    </span>
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
                  <button className="bg-[#FFD958] circle-btn w-[150px] h-[60px] text-white font-bold rounded-lg text-xl">
                    Yellow
                  </button>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button className="bg-[#FF000B] circle-btn w-[150px] h-[60px] text-white font-bold rounded-lg text-xl">
                    Red
                  </button>
                  <span>1.8</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button className="bg-[#1D9377] circle-btn w-[150px] h-[60px] text-white font-bold rounded-lg text-xl">
                    green
                  </button>
                  <span>1.2</span>
                </div>
              </div>
              <div className="flex justify-around mt-3">
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img src={camel} alt="" className="w-10" />
                  </div>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img src={tiger} alt="" className="w-10" />
                  </div>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img src={elephant} alt="" className="w-10" />
                  </div>
                  <span>1.2</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                    <img src={king} alt="" className="w-10" />
                  </div>
                  <span>1.2</span>
                </div>
              </div>
              <div className="border-2 pb-2 mt-2 rounded-t-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="border-2 border-slate-200 p-2 m-3 rounded-2xl">
                  <div className="flex justify-around items-center mt-3">
                    <div className="w-[130px] flex flex-wrap gap-1">
                      <div className="w-[60px] circle-small  h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg">
                        20
                      </div>
                      <div className="w-[60px] circle-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg">
                        50
                      </div>
                      <div className="w-[60px] circle-small h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg">
                        100
                      </div>
                      <div className="w-[60px] circle-small  h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg">
                        200
                      </div>
                    </div>
                    <div>
                      <div className="w-[170px] cicle-large h-[80px] text-2xl bg-[#BEEBFF] underline flex justify-center items-center rounded-lg">
                        ₹20
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="w-[88px] h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg">
                        500
                      </div>
                      <div className="w-[88px] h-[40px] bg-[#BEEBFF] flex justify-center items-center rounded-lg">
                        1000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex justify-center">
                  <button className="bg-[#ED1B24] cicle-confirm-btn w-[450px] h-[50px] rounded-lg font-bold text-white  ">
                    Confirm
                  </button>
                </div>
              </div>

              <div className="border-2 pb-2  rounded-t-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex mt-2 justify-center">
                  <div className="w-[250px] cicle-menu h-[50px] flex justify-center items-center border-b border-black">
                    Everyone's Order
                  </div>
                  <div className="w-[250px] cicle-menu h-[50px] flex justify-center items-center border-b">
                    My Order
                  </div>
                </div>
                <div>
                  <div className="flex justify-around mt-2">
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Period</span>
                      <span className="w-[100px] h-[20px] flex justify-center items-center rounded ">
                        487348783
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Select</span>
                      <span className="bg-[gray] w-[30px] h-[20px] flex justify-center items-center rounded text-white">
                        2x
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Point</span>
                      <span className="">10.00</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Result</span>
                      <span className="bg-[#FA4359] w-[30px] h-[20px] flex justify-center items-center rounded text-white">
                        2x
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <span className="font-bold">Amount</span>
                      <span className=" text-[#FF0000]">-9.80</span>
                    </div>
                  </div>
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
