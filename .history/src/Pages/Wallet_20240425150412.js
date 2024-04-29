/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Wallet = () => {
  const [selectedAmount, setSelectedAmount] = useState(35);
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    localStorage.setItem("selectedAmount", amount);
  };
  useEffect(() => {
    const storedAmount = localStorage.getItem("selectedAmount");
    if (storedAmount) {
      setSelectedAmount(storedAmount);
    }
    const clearLocalStorageTimeout = setTimeout(() => {
      localStorage.removeItem("selectedAmount");
    }, 2000);

    return () => clearTimeout(clearLocalStorageTimeout);
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
          <div className="mt-16">
            <div className="text-center font-bold">Balance</div>
            <div className="text-center font-bold text-3xl">₹29.40</div>
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
                />
              </div>
              <hr />
            </div>

            <div className="flex flex-wrap gap-2 justify-center mt-10">
              <button
                className="bg-[#FFDE89] rounded-xl w-[150px] h-[48px] "
                onClick={() => setSelectedAmount(250)}
              >
                ₹250
              </button>
              <button
                className="bg-[#FFDE89] rounded-xl w-[150px] h-[48px] "
                onClick={() => setSelectedAmount(500)}
              >
                ₹500
              </button>
              <div class="relative">
                <button
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
                  class="relative bg-[#FFDE89] rounded-xl w-[150px] h-[48px]"
                  onClick={() => setSelectedAmount(250)}
                >
                  ₹2000
                </button>
                <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#FFB800]">
                  Get ₹100 extra
                </div>
              </div>
              <div class="relative">
                <button
                  class="relative bg-[#FFDE89] rounded-xl w-[150px] h-[48px]"
                  onClick={() => handleAmountSelect("5000")}
                >
                  ₹5000
                </button>
                <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#FFB800]">
                  Get ₹100 extra
                </div>
              </div>
              <div class="relative">
                <button
                  class="relative bg-[#FFDE89] rounded-xl w-[150px] h-[48px]"
                  onClick={() => handleAmountSelect("10000")}
                >
                  ₹10000
                </button>
                <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#FFB800]">
                  Get ₹100 extra
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-20 mb-10">
              <Link to="/Recharge">
                <button className="bg-[#FFB800] rounded-xl recharge-btn w-[430px] h-[48px] text-white text-xl font-bold">
                  Recharge
                </button>
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
