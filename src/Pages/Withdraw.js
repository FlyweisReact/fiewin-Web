/** @format */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ComponentHead from "../Components/ComponentHead";
import { getApi, postApi, showNotification } from "../Repository/Repository";
import { RxCross2 } from "react-icons/rx";

const Withdraw = () => {
  const [addupi, setaddupi] = useState(false);
  const [addAccount, setaddAccount] = useState(false);
  const [withDrowApi, setWithDrowApi] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const [accountDetail, setAccountDetail] = useState("");
  const [type, setType] = useState("");
  const [profile, setProfile] = useState({});
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmNumber, setConfirmNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, srtBranchName] = useState("");

  const submitUpiData = (e) => {
    e.preventDefault();
    const payload = {
      upiId,
      type: "Upi",
    };
    postApi({
      url: "/user/user-details",
      payload,
      setLoading,
      successMsg: "Upi Add Successfully",
    });
    setaddupi(false);
  };

  const submitAccountData = (e) => {
    e.preventDefault();
    const payload = {
      accountNumber,
      confirmNumber,
      ifscCode,
      branchName,
      type: "Bank",
    };
    postApi({
      url: "/user/user-details",
      payload,
      setLoading,
      successMsg: "Back Account added successfully",
    });
    setaddAccount(false);
  };

  const navigationHandler = (res) => {
    const id = res?.transaction?._id;
    navigate(`/thanks/${id}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      amount,
      paymentId,
      transType: type === "Bank" ? "account" : "upi",
    };
    const additionalFunctions = [
      () => setWithDrowApi(false),
      (res) => navigationHandler(res),
    ];
    postApi({
      url: "/payment/withdrawRequest",
      payload,
      additionalFunctions,
      setLoading,
    });
  };

  const getAccountDetail = () => {
    getApi({
      url: `/user/user-details?type=${type}`,
      setResponse: setAccountDetail,
    });
  };

  useEffect(() => {
    getAccountDetail();
  }, [type]);

  useEffect(() => {
    const prevData =
      accountDetail?.userdetails?.[accountDetail.userdetails?.length - 1];

    if (accountDetail) {
      const newDetails = accountDetail?.userdetails?.reverse();

      const accountNumber1 = newDetails?.find((item) => item?.type === "Bank");

      const upiId1 = newDetails?.find((item) => item?.type === "Upi");

      setUpiId(upiId1?.upiId);
      setAccountNumber(accountNumber1?.accountNumber || "");
      setConfirmNumber(accountNumber1?.accountNumber || "");
      setIfscCode(accountNumber1?.ifscCode || "");
      srtBranchName(prevData?.branchName);
    }
  }, [accountDetail]);

  const getProfile = () => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const openWidtrawPopup = (e) => {
    e.preventDefault();
    setWithDrowApi(true);
  };

  return (
    <>
      {addupi ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[400px] h-[auto] bg-white  rounded-lg relative  p-3">
            <form onSubmit={submitUpiData}>
              <div className="cross-button">
                <label>Enter UPI Detail</label>
                <p>
                  <RxCross2 onClick={() => setaddupi(false)} />
                </p>
              </div>
              <div className="flex justify-center flex-col items-center mt-2 gap-3">
                <div className="">
                  <label>Enter UPI Id</label>
                  <br />
                  <input
                    type="text"
                    value={upiId}
                    required
                    onChange={(e) => setUpiId(e.target.value)}
                    className=" w-[350px] border-black border-b outline-none"
                    placeholder="Enter Upi ID"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="w-[200px] h-[40px] bg-[#FFB800] text-white font-bold rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {addAccount ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[400px] h-[400px] bg-white  rounded-lg relative  gap-5 p-3">
            <form onSubmit={submitAccountData}>
              <div className="cross-button">
                <label>Enter Bank Detail</label>
                <p>
                  <RxCross2 onClick={() => setaddAccount(false)} />
                </p>
              </div>
              <div className="flex justify-center flex-col items-center mt-2 gap-3">
                <div className="mt-2">
                  <label>Enter Bank Account Number</label>
                  <br />
                  <input
                    type="number"
                    value={accountNumber}
                    required
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-[350px] border-black border-b outline-none"
                    placeholder="Enter Back Account"
                  />
                </div>

                <div className="mt-2">
                  <label> Confirm Bank Account Number</label>
                  <br />
                  <input
                    type="text"
                    required
                    value={confirmNumber}
                    onChange={(e) => setConfirmNumber(e.target.value)}
                    className="w-[350px] border-black border-b outline-none"
                    placeholder="Enter Confirm Account Number"
                  />
                </div>

                <div className="mt-2">
                  <label>Enter IFSC Code</label>
                  <br />
                  <input
                    type="text"
                    required
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                    className="w-[350px] border-black border-b outline-none"
                    placeholder="Enter IFSC Code "
                  />
                </div>

                <div className="mt-2">
                  <label>Enter Branch Name</label>
                  <br />
                  <input
                    type="text"
                    required
                    value={branchName}
                    onChange={(e) => srtBranchName(e.target.value)}
                    className="w-[350px] border-black border-b outline-none"
                    placeholder="Enter Branch Name"
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <button
                    type="submit"
                    className="w-[200px] h-[40px] bg-[#FFB800] text-white font-bold rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {withDrowApi ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[400px] h-[250px] bg-white  rounded-lg relative  gap-5 p-3">
            <form onSubmit={submitHandler}>
              <div className="cross-button">
                <label>Enter WithDrow Detail</label>
                <p>
                  <RxCross2 onClick={() => setWithDrowApi(false)} />
                </p>
              </div>
              <div className="flex justify-center flex-col items-center mt-2 gap-3">
                <div className="">
                  <label>Select Payment Method</label>
                  <br />
                  <select
                    required
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    className="w-[350px] border-black border-b outline-none"
                    placeholder="Enter Confirm Account Number"
                  >
                    <option value="">Select</option>
                    <option value="Bank">Bank</option>
                    <option value="Upi">Upi</option>
                  </select>
                </div>

                {type === "Bank" ? (
                  <div className="">
                    <label>Select Account</label>
                    <br />
                    <select
                      value={paymentId}
                      required
                      onChange={(e) => setPaymentId(e.target.value)}
                      className="w-[350px] border-black border-b outline-none"
                      placeholder="Enter Confirm Account Number"
                    >
                      <option value="">Select</option>
                      {accountDetail?.userdetails?.map((i, index) => (
                        <option
                          value={i?._id}
                        >{`${i?.type} ${i?.accountNumber} ${i?.branchName}`}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="">
                    <label>Select Upi Id</label>
                    <br />
                    <select
                      value={paymentId}
                      onChange={(e) => setPaymentId(e.target.value)}
                      className="w-[350px] border-black border-b outline-none"
                      required
                      placeholder="Enter Confirm Account Number"
                    >
                      <option value="">Select</option>
                      {accountDetail?.userdetails?.map((i, index) => (
                        <option
                          value={i?._id}
                        >{`${i?.type} ${i?.upiId}`}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="flex justify-center mt-5">
                  <button
                    type="submit"
                    className="w-[200px] h-[40px] bg-[#FFB800] text-white font-bold rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div className="h-screen flex justify-center">
        <div className="grid place-items-center ">
          <div className="lg:w-[500px] lg:h-full bg-white flex flex-col ">
            <ComponentHead title={"Withdraw"} subTitle={"Records"} />

            <div className="h-[700px] withdraw-header   mt-5">
              <div className="">
                <div className="text-center font-bold">Balance</div>
                <div className="font-bold text-center text-xl">
                  ₹
                  {profile?.data?.user?.wallet
                    ? profile?.data?.user?.wallet
                    : 0}
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 mt-5  ">
                  <div className="bg-[#FFEBB9] relative withdraw-card  w-[457px] h-[120px] rounded-lg flex  flex-col justify-center items-center">
                    <div class="absolute top-0 left-0 w-20  font-bold flex justify-center rounded-lg text-white bg-[#FFB800]">
                      UPI
                    </div>
                    <div className="card-font">
                      {!addupi &&
                        !upiId &&
                        `with your UPID , you can withdraw money quickly`}
                      {upiId && (
                        <p>
                          {" "}
                          <span
                            style={{ fontWeight: "bold", fontSize: "1rem" }}
                          >
                            UPI Id{" "}
                          </span>
                          :- {upiId}
                        </p>
                      )}
                    </div>
                    <div
                      className="underline cursor-pointer"
                      onClick={() => setaddupi(true)}
                    >
                      <p style={{ paddingBottom: upiId ? "2rem" : "" }}>
                        Click here to add
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FFEBB9] relative withdraw-card  w-[457px] h-[120px] rounded-lg flex  flex-col justify-center items-center">
                    <div class="absolute top-0 left-0 w-20  font-bold flex justify-center rounded-lg text-white bg-[#FFB800]">
                      Bank
                    </div>
                    <div className="card-font">
                      {!addAccount &&
                        !accountNumber &&
                        ` Bank account can be added to get fast withdrawals`}
                      {accountNumber && (
                        <p
                          style={{
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <span>
                            {" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              Account Number
                            </span>{" "}
                            :- {accountNumber}{" "}
                          </span>
                          <span>
                            {" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              {" "}
                              IFSC Code
                            </span>{" "}
                            :-{" "}
                            <span style={{ fontSize: "normal" }}>
                              {ifscCode}
                            </span>
                          </span>
                          <span>
                            {" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                              {" "}
                              Branch Name
                            </span>
                            :- {branchName}
                          </span>
                        </p>
                      )}
                    </div>
                    <div
                      className="underline cursor-pointer pb-3"
                      onClick={() => setaddAccount(true)}
                    >
                      Click here to add
                    </div>
                  </div>
                </div>
                <form onSubmit={openWidtrawPopup}>
                  <div className="p-6">
                    <div className="font-bold font-xl ">Amount</div>
                    <div className="text-2xl">
                      <input
                        type="number"
                        min={40}
                        max={50000}
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="40~50000"
                        className="text-[gray] w-full outline-none"
                      />
                    </div>
                    <hr />

                    <div className="flex justify-between">
                      <div className="flex items-center amount-font">
                        Amount {">"} 1000, fee ₹ 30{" "}
                      </div>
                      <div className="amount-font">
                        Maximum :{" "}
                        <span className="text-[#FFB800] "> ₹50000</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center amount-font">
                        Amount {"<"} 1000, fee 3%{" "}
                      </div>
                      <div className="amount-font">
                        Minimum : <span className="font-bold"> ₹40</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-center ">
                    <button
                      className="bg-[#ffb800] rounded-xl withdraw-btn w-[450px] h-[48px] text-white text-xl font-bold"
                      type="submit"
                    >
                      Withdrawal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
