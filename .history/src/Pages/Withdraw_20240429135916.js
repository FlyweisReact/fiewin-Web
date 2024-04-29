/** @format */
import React, { useState } from "react";
import { LiaLessThanSolid } from "react-icons/lia";
import ComponentHead from "../Components/ComponentHead";

const Withdraw = () => {
  const [addupi, setaddupi] = useState(false);
  const [price, setPrice] = useState("");

  return (
    <>
      {addupi ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[400px] h-[270px] bg-white  rounded-lg relative  gap-5 p-3">
            <form>
              <div className="flex justify-center flex-col items-center mt-2 gap-3">
                <div className="">
                  <label>First Name</label>
                  <br />
                  <input
                    type="text"
                    className=" w-[350px] border-black border-b "
                    placeholder="Enter Your Full Name"
                  />
                </div>

                <div className="">
                  <label>Email</label>
                  <br />
                  <input
                    type="text"
                    className="w-[350px] border-black border-b"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="">
                  <label>UPI ID</label>
                  <br />
                  <input
                    type="text"
                    className="w-[350px] border-black border-b"
                    placeholder="Enter UPI ID"
                  />
                </div>
              </div>
            </form>

            <div className="flex justify-center mt-5">
              <button
                onClick={() => setaddupi(false)}
                className="w-[200px] h-[40px] bg-[#FFB800] text-white font-bold rounded-lg"
              >
                Submit
              </button>
            </div>
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
                <div className="font-bold text-center text-xl">₹ 29.20</div>
                <div className="flex justify-center flex-col items-center gap-y-2 mt-5  ">
                  <div className="bg-[#FFEBB9] relative withdraw-card  w-[457px] h-[120px] rounded-lg flex  flex-col justify-center items-center">
                    <div class="absolute top-0 left-0 w-20  font-bold flex justify-center rounded-lg text-white bg-[#FFB800]">
                      UPI
                    </div>
                    <div className="card-font">
                      with your UPID , you can withdraw money quickly
                    </div>
                    <div
                      className="underline cursor-pointer"
                      onClick={() => setaddupi(true)}
                    >
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
                <div className="p-6">
                  <div className="font-bold font-xl ">Amount</div>
                  <div className="text-2xl">
                    <input
                      type="number"
                      min={0}
                      placeholder="₹40~100000"
                      className="text-[gray] w-full"
                    />
                  </div>
                  <hr />

                  <div className="flex justify-between">
                    <div className="flex items-center amount-font">
                      Amount <LiaLessThanSolid /> 10000, fee ₹ 30{" "}
                    </div>
                    <div className="amount-font">
                      Maximum : <span className="text-[#FFB800] "> ₹50000</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center amount-font">
                      Amount <LiaLessThanSolid /> = 10000, fee 3%{" "}
                    </div>
                    <div className="amount-font">
                      Manimum : <span className="font-bold"> ₹50</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-center ">
                  <button className="bg-[#D3D3D3] rounded-xl withdraw-btn w-[450px] h-[48px] text-white text-xl font-bold">
                    withdrawal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
