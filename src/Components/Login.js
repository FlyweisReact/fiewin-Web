/** @format */

import logo from "../Assets/FieWinlogo.svg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { user_login } from "../Repository/Repository";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isAuthenticated);

  const payload = {
    password,
    phoneNumber: `+91${phoneNumber}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      user_login({
        url: "/user/signIn",
        payload,
        setLoading,
        navigate,
      })
    );
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="LoginSection">
        <div className="MainDiv">
          <div className="LoginDiv">
            <div className="Head-title">Login</div>

            <div className="logo-div">
              <img src={logo} alt="logo" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="formDiv">
                <div className="InputDiv">
                  <IoPhonePortraitOutline className="spansvg" />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="InputDiv">
                  <CiLock className="spansvg" />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    minLength={8}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mt-10">
                  <button className="submitBtn" type="submit">
                    {loading ? <ClipLoader color="#fff" /> : "Login"}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5 flex justify-center gap-1">
              <Link to="/signup">
                <button className="text-[#38B6FF] rounded-xl w-[210px] h-[48px] border-2 btn-btn">
                  Create an Account
                </button>
              </Link>
              <Link to="forgotpassword">
                <button className="text-[#38B6FF] rounded-xl w-[210px] h-[48px] border-2  btn-btn">
                  Forgot Password?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
