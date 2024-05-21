/** @format */

import React, { useState, useEffect } from "react";
import { LiaLessThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ComponentHead from "../Components/ComponentHead";
import { getApi, postApi } from "../Repository/Repository";

const AgentWithdraw = () => {
  const [profile, setProfile] = useState({});
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigationHandler = (res) => {
    const id = res?.transaction?._id;
    navigate(`/thanks/${id}`);
  };

  const payload = {
    amount,
    transType: "agentWallet",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const additionalFunctions = [(res) => navigationHandler(res)];
    postApi({
      url: "/payment/withdrawRequest",
      payload,
      additionalFunctions,
      setLoading,
    });
  };

  const getProfile = () => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="grid place-items-center ">
          <div className="lg:w-[500px] lg:h-full bg-white flex flex-col ">
            <ComponentHead title={"Withdraw"} subTitle={"Records"} />

            <div className="h-[700px] withdraw-header   mt-5">
              <div className="">
                <div className="text-center font-bold">Balance</div>
                <div className="font-bold text-center text-xl">
                  ₹
                  {profile?.data?.user?.agentWallet
                    ? profile?.data?.user?.agentWallet
                    : 0}
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 mt-5  ">
                  <div className="bg-[#FFEBB9] relative withdraw-card  w-[457px] h-[120px] rounded-lg flex  flex-col justify-center items-center">
                    <div class="absolute top-0 left-0 w-20  font-bold flex justify-center rounded-lg text-white bg-[#FFB800]">
                      UPI
                    </div>
                    <div className="card-font">
                      with your UPID , you can withdraw money quickly
                    </div>
                    <div className="underline cursor-pointer">
                      Click here to add
                    </div>
                  </div>
                  <div className="bg-[#FFEBB9] relative withdraw-card  w-[457px] h-[120px] rounded-lg flex  flex-col justify-center items-center">
                    <div class="absolute top-0 left-0 w-20  font-bold flex justify-center rounded-lg text-white bg-[#FFB800]">
                      Bank
                    </div>
                    <div className="card-font">
                      Bank account can be added to get fast withdrawals
                    </div>
                    <div className="underline">Click here to add</div>
                  </div>
                  <div className="bg-[#FFEBB9] w-[457px] withdraw-card h-[120px] rounded-lg flex  flex-col justify-center items-center">
                    <div className="card-font">Paytm</div>
                  </div>
                </div>

                <form onSubmit={submitHandler}>
                  <div className="p-6">
                    <div className="font-bold font-xl ">Amount</div>
                    <div className="text-2xl">
                      <input
                        type="number"
                        min={10}
                        max={50000}
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="40~100000"
                        className="text-[gray] w-full outline-none"
                      />
                    </div>
                    <hr />

                    <div className="flex justify-between">
                      <div className="flex items-center amount-font">
                        Amount <LiaLessThanSolid /> 10000, fee ₹ 30{" "}
                      </div>
                      <div className="amount-font">
                        Maximum :{" "}
                        <span className="text-[#FFB800] "> ₹50000</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center amount-font">
                        Amount <LiaLessThanSolid /> = 10000, fee 3%{" "}
                      </div>
                      <div className="amount-font">
                        Minimum : <span className="font-bold"> ₹50</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-center ">
                    <button
                      className="bg-[#ffb800] rounded-xl withdraw-btn w-[450px] h-[48px] text-white text-xl font-bold"
                      type="submit"
                    >
                      {loading ? <ClipLoader color="#fff" /> : "Withdrawal"}
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

export default AgentWithdraw;
