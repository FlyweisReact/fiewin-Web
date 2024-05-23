/** @format */

import logo from "../Assets/FieWinlogo.svg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import key from "../Assets/key.svg";

const Forgotpassword = () => {
  return (
    <div className="h-[100vh] flex justify-center">
      <div className="grid place-items-center">
        <div className="w-[500px] h-[700px] bg-white forgetbg-height">
          <div className="bg-[#FFB800] h-[80px] flex justify-center items-center text-xl font-semibold">
            Reset Password
          </div>

          <div className="flex justify-center mt-10">
            <img src={logo} alt="logo" />
          </div>

          <form>
            <div className="flex flex-col gap-5 items-center mt-10">
              <div className="relative rounded">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                    <IoPhonePortraitOutline style={{ color: "gray" }} />
                  </span>
                </div>

                <input
                  type="tel"
                  className=" placeholder: ml-2 block forget-input-css w-[430px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="relative rounded">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                    <CiLock style={{ color: "gray" }} />
                  </span>
                </div>

                <input
                  type="Password"
                  className=" placeholder: ml-2 block forget-input-css w-[430px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                  placeholder="New Password"
                />
              </div>
              <div className="flex gap-6">
                <div className="relative rounded">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                      <img src={key} alt="" />
                    </span>
                  </div>

                  <input
                    type=""
                    className=" placeholder: ml-2 block  forget-btn w-[230px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                    placeholder="OTP"
                  />
                </div>
                <button className="bg-[#FFB800] rounded forget-btn w-[174px] h-[48px] text-white font-semibold">
                  OTP
                </button>
              </div>

              <div className="mt-10">
                <button className="bg-[#FFB800] rounded-xl forget-input-css w-[430px] h-[48px] text-white font-semibold">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
