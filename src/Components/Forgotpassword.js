/** @format */
import { useEffect, useState } from "react";
import logo from "../Assets/FieWinlogo.svg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import key from "../Assets/key.svg";
import { postApi } from "../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpLoader, setOtpLoader] = useState(false);
  const [countDownTime, setCountDownTime] = useState(0);
  const [text, setText] = useState("Send OTP");
  const isLoggedIn = useSelector(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

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
      email: `+91${email}`,
    };
    const additionalFunctions = [
      (res) => setId(res?.data?._id),
      startCountdown,
    ];
    postApi({
      url: "/user/forgetPassword",
      payload,
      setLoading: setOtpLoader,
      successMsg: "OTP has been sent to your mobile number",
      additionalFunctions,
    });
  };

  const payload = {
    otp,
    newPassword,
    confirmPassword,
  };

  const updatePassword = (e) => {
    e.preventDefault();
    postApi({
      url: `/user/changePassword/${id}`,
      payload,
      successMsg: "Password updated successfully",
      setLoading,
    });
  };

  return (
    <div className="LoginSection">
      <div className="MainDiv">
        <div className="LoginDiv">
          <div className="Head-title"> Reset Password</div>
          <div className="logo-div">
            <img src={logo} alt="" />
          </div>

          <form onSubmit={updatePassword}>
            <div className="formDiv">
              <div className="InputDiv">
                <IoPhonePortraitOutline className="spansvg" />
                <input
                  type="tel"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Mobile Number"
                />
              </div>
              <div className="InputDiv">
                <CiLock className="spansvg" />
                <input
                  type="password"
                  value={newPassword}
                  required
                  minLength={8}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                />
              </div>
              <div className="InputDiv">
                <CiLock className="spansvg" />
                <input
                  type="password"
                  value={confirmPassword}
                  required
                  minLength={8}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
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
                <button
                  type="button"
                  className="bg-[#FFB800] register-btn rounded w-[174px] h-[48px] text-white font-semibold"
                  onClick={() => sendOtp()}
                >
                  {otpLoader
                    ? "Sending..."
                    : countDownTime === 0
                    ? text
                    : countDownTime}
                </button>
              </div>

              <div className="mt-10">
                <button className="submitBtn" type="submit">
                  {loading ? <ClipLoader color="#fff" /> : "Reset"}
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
