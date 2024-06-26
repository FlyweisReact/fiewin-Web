/** @format */

import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { edit_module, getApi, postApi } from "../Repository/Repository";
import { ClipLoader } from "react-spinners";

const Wallet = () => {
  const [selectedAmount, setSelectedAmount] = useState();
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);

  const payload = {
    totalAmount: parseInt(selectedAmount),
  };

  const getProfile = () => {
    getApi({
      url: "/user/profile",
      setResponse: setRes,
    });
  };

  const navigationHandler = (res) => {
    const url = res?.data?.short_url;
    window.location.href = url;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const additionalFunctions = [navigationHandler];
    // edit_module({
    //   url: "/user/addWallet",
    //   payload,
    //   additionalFunctions,
    // });

    postApi({
      url: "/user/razorpayPayment",
      payload,
      additionalFunctions,
      setLoading,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full wallet-first bg-white md:w-[400px] ">
          <div className="bg-[#FFB800] text-white  h-[50px] flex justify-between items-center text-xl font-semibold p-2 sticky">
            <span>Records</span>
            <span> Recharge </span>

            <Link to="/Help">
              <span>Help</span>
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-16">
              <div className="text-center font-bold">Balance</div>
              <div className="text-center font-bold text-3xl">
                ₹{res?.data?.user?.wallet ? res?.data?.user?.wallet : 0}{" "}
              </div>
              <div className="ml-3 mr-3">
                <div className="text-2xl font-bold">Amount</div>
                <div className="text-3xl">
                  <input
                    className="text-[#A1A1A1] outline-none w-full"
                    placeholder="₹35 ~ 20000"
                    min={35}
                    type="number"
                    onChange={(e) => setSelectedAmount(e.target.value)}
                    value={selectedAmount}
                    required
                  />
                </div>
                <hr />
              </div>

              <div className="flex flex-wrap gap-2 justify-center mt-10">
                <button
                  type="button"
                  className="bg-[#FFDE89] rounded-xl w-[150px] h-[48px] "
                  onClick={() => setSelectedAmount(250)}
                >
                  ₹250
                </button>
                <button
                  type="button"
                  className="bg-[#FFDE89] rounded-xl w-[150px] h-[48px] "
                  onClick={() => setSelectedAmount(500)}
                >
                  ₹500
                </button>
                <div class="relative">
                  <button
                    type="button"
                    class="relative bg-[#FFDE89] rounded-xl w-[150px] h-[48px]"
                    onClick={() => setSelectedAmount(1000)}
                  >
                    ₹1000
                  </button>
                  <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#FFB800]">
                    Get ₹100 extra
                  </div>
                </div>

                <div class="relative">
                  <button
                    type="button"
                    class="relative bg-[#FFDE89] rounded-xl w-[150px] h-[48px]"
                    onClick={() => setSelectedAmount(2000)}
                  >
                    ₹2000
                  </button>
                  <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#FFB800]">
                    Get ₹100 extra
                  </div>
                </div>
                <div class="relative">
                  <button
                    type="button"
                    class="relative bg-[#FFDE89] rounded-xl w-[150px] h-[48px]"
                    onClick={() => setSelectedAmount(5000)}
                  >
                    ₹5000
                  </button>
                  <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#FFB800]">
                    Get ₹100 extra
                  </div>
                </div>
                <div class="relative">
                  <button
                    type="button"
                    class="relative bg-[#FFDE89] rounded-xl w-[150px] h-[48px]"
                    onClick={() => setSelectedAmount(10000)}
                  >
                    ₹10000
                  </button>
                  <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#FFB800]">
                    Get ₹100 extra
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-20 mb-10">
                <button
                  type="submit"
                  className="bg-[#FFB800] rounded-xl recharge-btn w-[430px] h-[48px] text-white text-xl font-bold"
                >
                  {loading ? <ClipLoader color="#fff" /> : "Recharge"}
                </button>
              </div>
            </div>
          </form>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
