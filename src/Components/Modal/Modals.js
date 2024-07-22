/** @format */
import { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { edit_module, getApi } from "../../Repository/Repository";
import tiger from "../../Assets/Games/tiger.svg";
import camel from "../../Assets/Games/camel.svg";
import elephant from "../../Assets/Games/elephant.svg";
import king from "../../Assets/Games/king.svg";
import { IoMdClose } from "react-icons/io";
import { ClipLoader } from "react-spinners";
import teasureanimation from "../../Assets/teasureanimation.svg";
import { getVelocityAnimal, getVelocityColor } from "../../utils/utils";

export const SpinResModal = ({
  show,
  handleClose,
  data,
  fetchHandler,
  resultData,
  animalOptions,
  buttonClicked,
}) => {
  const closeBtn = () => {
    handleClose();
    fetchHandler();
  };

  const [visible, setVisible] = useState(show);
  useEffect(() => {
    

    if (show === "true" || show === "boss") {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        closeBtn();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  const colorResult = resultData?.game?.colourResult;
  const animalResult = animalOptions?.find(
    (i) => i.name === resultData?.game?.animalResult
  )?.img;
  return visible && show && buttonClicked ? (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      style={{
        boxShadow: "(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div className="w-[300px] h-[350px] bg-white  rounded-lg relative ">
        <div
          className={`bg-[${
            data?.result?.status === "Loss" ? "red" : "#1D9377"
          }] w-full h-[50px] rounded-t text-white font-bold text-xl flex justify-center items-center`}
        ></div>
        <div
          className="absolute top-0 right-0 mr-[-.5rem] mt-[-1rem] cursor-pointer"
          onClick={() => closeBtn()}
        >
          <IoCloseCircle color="gold" size={35} />
        </div>
        <div className="flex justify-center mt-2">
          {data?.result?.status === "Loss" ? (
            <div className="bg-[red] w-[70px] h-[70px] rounded-full flex justify-center items-center text-3xl text-white font-bold">
              Loss
            </div>
          ) : (
            <div className="bg-[#1D9377] w-[70px] h-[70px] rounded-full flex justify-center items-center text-3xl text-white font-bold">
              Win
            </div>
          )}
        </div>
        <div className="">
          <div className="flex justify-between mt-2 mr-5 ml-5">
            <div>Period</div>
            <div> {data?.game?.gameId} </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 mb-2">
          <div className="bg-gray-100 w-[250px] h-[auto] p-2 ">
            <div className="flex justify-between">
              <span>Selected Choice</span>
              {data?.result?.colourChoice
                ? getVelocityColor(data?.result?.colourChoice)
                : getVelocityAnimal(data?.result?.animalChoice)}
            </div>

            <div className="flex justify-between">
              <span>Amount</span>
              {data?.result?.status === "Loss" ? (
                <span className="text-[red] text-xl">
                  -₹{data?.result?.lossAmount}{" "}
                </span>
              ) : (
                <span className="text-[#1D9377] text-xl">
                  +₹{data?.result?.prizeAmount}{" "}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => closeBtn()}
            className="w-[200px] h-[40px] bg-[#87CEEB] text-white font-bold rounded-lg"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  ) : show === "boss" && visible && colorResult ? (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      style={{
        boxShadow: "(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div className="w-[300px] h-[150px] bg-white  rounded-lg relative ">
        <div
          className={`bg-[${
            resultData?.result?.status === "Loss" ? "red" : "#1D9377"
          }] w-full h-[50px] rounded-t text-red-600 font-bold text-xl flex justify-center items-center`}
        >
          Result
        </div>
        <div className="mt-2">
          <div className="flex justify-center">
            <div
              className="w-[55px] h-[35px] rounded-[10px]"
              style={{ backgroundColor: colorResult==="yellow"?"#FFD958":colorResult==="red"?"red": "#1D9377" }}
            ></div>
            <div className="w-[55px] h-[35px] rounded-[10px] bg-gray-200 ml-2">
              <img
                className="w-full h-full object-contain"
                src={animalResult}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : show === false ? null : null;
};

export const SpinRulesModal = ({ show, handleClose }) => {
  const [res, setRes] = useState({});

  useEffect(() => {
    if (show) {
      getApi({
        url: "/headTail/spinRule",
        setResponse: setRes,
      });
    }
  }, [show]);

  return (
    show && (
      <div className="rules-popup z-50 overflow-y-auto h-full cicle-rules-main">
        <div className="flex justify-center m-2">
          <div className="bg-[#38B6FF] rounded-2xl w-[200px] h-[38px] flex justify-center items-center font-bold">
            {res?.gameName} Rules
          </div>
        </div>
        <div className="font-bold">How to play?</div>
        <div>{res?.description}</div>
        <div>{res?.rule}</div>

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
              <span>1.18</span>
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
              <span>1.3</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                <img src={tiger} alt="" className="w-10" />
              </div>
              <span>1.3</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                <img src={elephant} alt="" className="w-10" />
              </div>
              <span>1.3</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="bg-[#BEEBFF]  flex justify-center items-end  border circle-tiger w-[100px] h-[50px] text-white font-bold rounded-lg ">
                <img src={king} alt="" className="w-10" />
              </div>
              <span>1.12</span>
            </div>
          </div>
        </div>
        <div className="text-center">Choose any one to place an order</div>
        <div className="font-bold mt-2">How is the amount calculated?</div>
        <div className="mt-2">{res?.amountCalculation}</div>
        <div className="mt-3">{res?.calculationExample}</div>
        <div className="flex justify-center mt-2">
          <button
            className="w-[430px] h-[50px] bg-[#F2A60C] text-white font-bold rounded-lg"
            onClick={() => handleClose()}
          >
            I Got it
          </button>
        </div>
      </div>
    )
  );
};

export const UpdateProfileModal = ({
  show,
  handleClose,
  fetchApi,
  PreviouseData,
}) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    name,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const additionalFunctions = [handleClose, fetchApi];
    edit_module({
      url: "/user/updateName",
      payload,
      additionalFunctions,
      setLoading,
    });
  };

  useEffect(() => {
    if (PreviouseData) {
      setName(PreviouseData?.data?.user?.name);
    }
  }, [PreviouseData]);

  return (
    show && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="w-[400px] h-[170px] bg-white  rounded-lg relative p-5">
          <div className="font-semibold text-xl ">Change Nick Name</div>

          <form onSubmit={submitHandler}>
            <div className="flex justify-center flex-col items-center  gap-3">
              <div className="">
                <br />
                <input
                  type="text"
                  className="w-[350px] border-black border-b outline-none"
                  placeholder="Enter Nick Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-5">
              <button
                onClick={() => handleClose()}
                type="button"
                className="w-[150px] h-[40px] border font-bold rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[150px] h-[40px] bg-[#38B6FF] text-white font-bold rounded-lg"
              >
                {loading ? <ClipLoader color="#fff" /> : "Confirm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export const UpdatePasswordModal = ({ show, handleClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    oldPassword,
    password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const additionalFunctions = [handleClose];
    edit_module({
      url: "/user/updatePassword ",
      payload,
      successMsg: "Your password has been updated successfully",
      additionalFunctions,
      setLoading,
    });
  };

  return (
    show && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="w-[400px] h-[200px] bg-white  rounded-lg relative p-5">
          <div className="font-semibold text-xl ">Set New Password</div>

          <form onSubmit={submitHandler}>
            <div className="flex justify-center flex-col items-center mt-2  gap-5">
              <div className="">
                <input
                  type="password"
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-[350px] border-black border-b outline-none"
                  placeholder="Old Password"
                />
              </div>
              <div className="">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[350px] border-black border-b outline-none"
                  placeholder="New Password"
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              <button
                onClick={() => handleClose()}
                type="button"
                className="w-[150px] h-[40px] border font-bold rounded-lg"
              >
                Cancel
              </button>
              <button
                className="w-[150px] h-[40px] bg-[#38B6FF] text-white font-bold rounded-lg"
                type="submit"
              >
                {loading ? <ClipLoader color="#fff" /> : "Confirm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export const ShowHistory = ({ show, handleClose, data }) => {
  const giveColor = (color) => {
    if (color === "yellow") {
      return <div className="bg-[#FFD958] w-[27px] h-[26px] rounded-lg"></div>;
    } else if (color === "green") {
      return <div className="bg-[#1D9377] w-[27px] h-[26px] rounded-lg"></div>;
    } else if (color === "red") {
      return <div className="bg-[#FF000B] w-[27px] h-[26px] rounded-lg"></div>;
    } else {
      return <div className="bg-[#fff] w-[27px] h-[26px] rounded-lg"></div>;
    }
  };

  const giveAnimal = (animal) => {
    if (animal === "lion") {
      return (
        <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
          <img src={tiger} alt="" className="w-5" />
        </div>
      );
    } else if (animal === "elephant") {
      return (
        <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
          <img src={elephant} alt="" className="w-5" />
        </div>
      );
    } else if (animal === "king") {
      return (
        <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
          <img src={king} alt="" className="w-5" />
        </div>
      );
    } else if (animal === "camel") {
      return (
        <div className="bg-[#D9D9D9] flex justify-center items-center w-[27px] h-[26px] rounded-lg">
          <img src={camel} alt="" className="w-5" />
        </div>
      );
    }
  };
  return (
    show && (
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-5xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[350px] h-[400px] bg-white outline-none focus:outline-none">
            <div className="flex justify-between m-3">
              <div></div>
              <div className="text-xl font-semibold">History</div>
              <div className="bg-[#38B6FF] w-[25px] h-[25px] rounded-lg flex justify-center items-center shadow-2xl">
                <IoMdClose
                  size={25}
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => handleClose()}
                />
              </div>
            </div>
            <hr />
            <div className="flex justify-between ml-2 mr-2">
              <div>Periods</div>
              <div>Results</div>
            </div>
            <hr />
            {data?.map((i, index) => (
              <div className="flex justify-between m-2" key={index}>
                <div> {i.PeriodNumber} </div>
                <div className="flex gap-1">
                  {giveColor(i?.result?.color)}
                  {giveAnimal(i?.result?.animal)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export const HeadTailRulesPopup = ({ show, handleClose }) => {
  const [rules, setRules] = useState({});

  useEffect(() => {
    getApi({
      url: "/headTail/headTailRule",
      setResponse: setRules,
    });
  }, []);

  return (
    show && (
      <div className="rules-popup overflow-y-auto  headtail-rule z-50">
        <div className="flex justify-center m-2">
          <div className="bg-[#38B6FF] rounded-2xl w-[200px] h-[38px] flex justify-center items-center font-bold">
            HeadTail Rules
          </div>
        </div>
        <div>{rules?.statement}</div>

        <div className="m-2">
          <ul>
            {rules?.points?.map((i, index) => (
              <li className="font-bold list-decimal" key={`options${index}`}>
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
                  Bet
                </th>

                <th className="w-[150px] bg-[#FFE7A9] border-slate-950 border">
                  Multiplier
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
            onClick={() => handleClose()}
          >
            I Got it
          </button>
        </div>
      </div>
    )
  );
};

export const RewardClamedModal = ({ show, handleClose }) => {
  return (
    show && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="w-[380px] h-[270px] bg-white  rounded-lg relative p-5 reward-claimed-modal">
          <div className="close_btn">
            <IoMdClose onClick={() => handleClose()} />
          </div>
          <h5 className="title">Reward Claimed</h5>

          <img src={teasureanimation} alt="" className="treasure-img" />
        </div>
      </div>
    )
  );
};

export const HeadResModal = ({
  show,
  handleClose,
  data,
  fetchHandler,
  getLastOrder,
  setOpenUserModal,
  resultData,
}) => {
  const [visible, setVisible] = useState(show);
  const closeBtn = () => {
    handleClose();
    fetchHandler();
    getLastOrder();
  };

  useEffect(() => {
    if (show === "true") {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        closeBtn();
        setOpenUserModal("false");
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (show === "boss") {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        closeBtn();
        setOpenUserModal("false");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return visible && show === "true" ? (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      style={{
        boxShadow: "(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div className="w-[300px] h-[350px] bg-white  rounded-lg relative ">
        <div
          className={`bg-[${
            data?.result?.status === "Loss" ? "red" : "#1D9377"
          }] w-full h-[50px] rounded-t text-white font-bold text-xl flex justify-center items-center`}
        >
          {data?.result?.status === "Loss" ? "Loss" : "Win"}
        </div>
        <div
          className="absolute top-0 right-0 mr-[-.5rem] mt-[-1rem] cursor-pointer"
          onClick={() => closeBtn()}
        >
          <IoCloseCircle color="gold" size={35} />
        </div>
        <div className="flex justify-center mt-2">
          <div
            className={`headandTail  ${
              data?.game?.result === "head" ? "H" : "T"
            } `}
            style={{ margin: 0 }}
          >
            {data?.game?.result === "head" ? "H" : "T"}
          </div>
        </div>
        <div className="">
          <div className="flex justify-between mt-2 mr-5 ml-5">
            <div>Period</div>
            <div> {data?.game?.gameId} </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 mb-2">
          <div className="bg-gray-100 w-[250px] h-[auto] p-2 ">
            <div className="flex justify-between">
              <span>Amount</span>
              {data?.result?.status === "Loss" ? (
                <span className="text-[red] text-xl">
                  -₹{data?.result?.lossAmount}{" "}
                </span>
              ) : (
                <span className="text-[#1D9377] text-xl">
                  +₹{data?.result?.prizeAmount}{" "}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => closeBtn()}
            className="w-[200px] h-[40px] bg-[#87CEEB] text-white font-bold rounded-lg"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  ) : visible && show === "boss" && resultData ? (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      style={{
        boxShadow: "(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div className="w-[300px] h-[150px] bg-white  rounded-lg relative ">
        <div
          className={`bg-[${
            resultData?.result?.status === "Loss" ? "red" : "#1D9377"
          }] w-full h-[50px] rounded-t text-white font-bold text-xl flex justify-center items-center`}
        >
          Result
        </div>
        {/* <div
          className="absolute top-0 right-0 mr-[-.5rem] mt-[-1rem] mt-3 cursor-pointer"
          onClick={() => closeBtn()}
        >
          <IoCloseCircle color="gold" size={35} />
        </div> */}
        <div className="flex justify-center mt-4">
          <div
            className={`headandTail  ${
              resultData?.game?.result === "head" ? "H" : "T"
            } `}
            style={{ margin: 0 }}
          >
            {resultData?.game?.result === "head" ? "H" : "T"}
          </div>
        </div>
        {/* <div className="">
          <div className="flex justify-between mt-2 mr-5 ml-5">
            <div>Period</div>
            <div> {data?.game?.gameId} </div>
          </div>
        </div> */}
        {/* <div className="flex justify-center mt-2 mb-2">
          <div className="bg-gray-100 w-[250px] h-[auto] p-2 ">
            <div className="flex justify-between">
              <span>Amount</span>
              {data?.result?.status === "Loss" ? (
                <span className="text-[red] text-xl">
                  -₹{data?.result?.lossAmount}{" "}
                </span>
              ) : (
                <span className="text-[#1D9377] text-xl">
                  +₹{data?.result?.prizeAmount}{" "}
                </span>
              )}
            </div>
          </div>
        </div> */}
        {/* <div className="flex justify-center">
          <button
            onClick={() => closeBtn()}
            className="w-[200px] h-[40px] bg-[#87CEEB] text-white font-bold rounded-lg"
          >
            Ok
          </button>
        </div> */}
      </div>
    </div>
  ) : null;
};

export const WithdrawRequestModal = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      style={{
        boxShadow: "(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div className="w-[300px] h-[150px] bg-white  rounded-lg relative ">
        <div className="flex justify-center mt-4">
          <div style={{ margin: 0 }}>Boss</div>
        </div>
      </div>
    </div>
  );
};
