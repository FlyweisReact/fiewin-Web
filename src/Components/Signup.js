/** @format */
import { useEffect, useState } from "react";
import logo from "../Assets/FieWinlogo.svg";
import key from "../Assets/key.svg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaFileCode } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { postApi } from "../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../store/authSlice";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [referenceCode, setRefrenceCode] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countDownTime, setCountDownTime] = useState(0);
  const [text, setText] = useState("Send OTP");
  const isLoggedIn = useSelector(isAuthenticated);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const startCountdown = () => {
    setText("Resend OTP");
    setCountDownTime(60);
    const countdownInterval = setInterval(() => {
      setCountDownTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const sendOtp = () => {
    const payload = {
      phoneNumber: `+91${phoneNumber}`,
    };
    const additionalFunctions = [startCountdown];
    postApi({
      url: "/user/sendOtp",
      payload,
      showMsg: true,
      successMsg: "OTP sent to your number",
      setLoading: setOtpLoading,
      additionalFunctions,
    });
  };

  const payload = {
    phoneNumber: `+91${phoneNumber}`,
    otp,
    password,
    confirm_password,
    referenceCode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const additionalFunctions = [() => setShow(true)];
    postApi({
      url: "/user/verifyOtpAndRegisterUser",
      payload,
      setLoading,
      additionalFunctions,
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  let otpBtn;
  if (otpLoading) {
    otpBtn = (
      <button
        type="button"
        className="bg-[#FFB800] register-btn rounded w-[174px] h-[48px] text-white font-semibold"
      >
        Sending...
      </button>
    );
  } else if (countDownTime === 0) {
    otpBtn = (
      <button
        type="button"
        className="bg-[#FFB800] register-btn rounded w-[174px] h-[48px] text-white font-semibold"
        onClick={() => sendOtp()}
      >
        {text}
      </button>
    );
  } else {
    otpBtn = (
      <button
        type="button"
        className="bg-[#FFB800] register-btn rounded w-[174px] h-[48px] text-white font-semibold"
      >
        {countDownTime}
      </button>
    );
  }

  return (
    <>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[400px] h-[120px] bg-white  rounded-lg relative p-5">
            <div className="font-semibold text-xl ">
              Registered Successfully
            </div>

            <div className="flex justify-center gap-2 mt-5">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="w-[150px] h-[40px] border font-bold rounded-lg"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-[150px] h-[40px] bg-[#FFB800] text-white font-bold rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="LoginSection">
        <div className="MainDiv">
          <div className="LoginDiv">
            <div className="Head-title">Register</div>

            <div className="logo-div">
              <img src={logo} alt="" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="formDiv">
                <div className="InputDiv">
                  <IoPhonePortraitOutline className="spansvg" />
                  <input
                    type={"tel"}
                    placeholder="Mobile Number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="InputDiv">
                  <CiLock className="spansvg" />
                  <input
                    type={"password"}
                    placeholder="Password"
                    required
                    value={password}
                    minLength={8}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="InputDiv">
                  <CiLock className="spansvg" />
                  <input
                    type={"password"}
                    placeholder="Confirm Password"
                    required
                    minLength={8}
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="InputDiv">
                  <FaFileCode className="spansvg" />
                  <input
                    type={"tel"}
                    placeholder="Reedem code"
                    value={referenceCode}
                    onChange={(e) => setRefrenceCode(e.target.value)}
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
                      type="tel"
                      className=" placeholder: ml-2 block register-btn w-[230px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                      value={otp}
                      required
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="OTP"
                    />
                  </div>

                  {otpBtn}
                 
                </div>

                <div className="mt-10">
                  <button className="submitBtn" type="submit">
                    {loading ? <ClipLoader color="#fff" /> : "Register"}
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

export default Signup;
