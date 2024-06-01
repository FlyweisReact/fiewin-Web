/** @format */

import { useEffect, useState } from "react";
import logo from "../Assets/FieWinlogo.svg";
import key from "../Assets/key.svg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaFileCode } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postApi } from "../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../store/authSlice";

const Refer = () => {
  const { id } = useParams();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isAuthenticated);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const sendOtp = () => {
    const payload = {
      phoneNumber: `+91${phoneNumber}`,
      referralCode: id,
    };
    postApi({
      url: "/user/sendOtp",
      payload,
      showMsg: true,
      successMsg: "OTP sent to your number",
      setLoading: setOtpLoading,
    });
  };

  const payload = {
    phoneNumber: `+91${phoneNumber}`,
    otp,
    password,
    confirm_password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const additionalFunctions = [() => navigate("/")];
    postApi({
      url: "/user/verifyOtpAndRegisterUser",
      payload,
      setLoading,
      additionalFunctions,
    });
  };

  return (
    <>
      <div className="LoginSection">
        <div className="MainDiv">
          <div className="LoginDiv">
            <div className="Head-title">Register</div>

            <div className="logo-div">
              <img src={logo} alt="logo" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="formDiv">
                <div className="InputDiv">
                  <IoPhonePortraitOutline className="spansvg" />
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="InputDiv">
                  <CiLock className="spansvg" />
                  <input
                    type="password"
                    required
                    value={password}
                    minLength={8}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="InputDiv">
                  <CiLock className="spansvg" />
                  <input
                    type="password"
                    required
                    value={confirm_password}
                    minLength={8}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="InputDiv">
                  <FaFileCode className="spansvg" />
                  <input value={id} placeholder="Reedem code" />
                </div>
                <div className="flex gap-6">
                  <div className="relative rounded">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                        <img src={key} alt="" />
                      </span>
                    </div>

                    <input
                      type="tel"
                      className=" placeholder: ml-2 block register-btn w-[230px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                      value={otp}
                      required
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="OTP"
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-[#FFB800] register-btn rounded w-[174px] h-[48px] text-white font-semibold"
                    onClick={() => sendOtp()}
                  >
                    {" "}
                    {otpLoading ? "Sending..." : "OTP"}
                  </button>
                </div>

                <div className="mt-10">
                  <button className="submitBtn" type="submit">
                    {loading ? <ClipLoader color="#fff" /> : "Login"}
                  </button>
                </div>
              </div>
            </form>

            <div className="text-center mt-5">
              Already have an account?
              <Link to={"/"}>
                <span className="text-[#FFB800] font-semibold"> Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Refer;
