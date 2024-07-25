/** @format */
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import orderrecord from "../Assets/Profile/orderrecord.svg";
import arrow from "../Assets/Profile/arrow.svg";
import financial from "../Assets/Profile/financial.svg";
import download from "../Assets/Profile/download.svg";
import followus from "../Assets/Profile/followus.svg";
import support from "../Assets/Profile/support.svg";
import complaint from "../Assets/Profile/complaint.svg";
import logout from "../Assets/Profile/logout.svg";
import profilecircle from "../Assets/profilecirlce.svg";
import { Link, useNavigate } from "react-router-dom";
import { getApi } from "../Repository/Repository";
import {
  UpdatePasswordModal,
  UpdateProfileModal,
} from "../Components/Modal/Modals";
import { useDispatch } from "react-redux";
import { signOut } from "../utils/utils";
import knowMoreImg from "../Assets/book-solid.svg";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [chnagenicknamepopup, setChnagenicknamepopup] = useState(false);
  const [changepassowrdpopup, setChangepassowrdpopup] = useState(false);

  const fetchHandler = () => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const log_out = () => {
    dispatch(signOut(navigate));
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/");
    }
  }, []);

  return (
    <>
      <UpdateProfileModal
        show={chnagenicknamepopup}
        handleClose={() => setChnagenicknamepopup(false)}
        fetchApi={fetchHandler}
        PreviouseData={profile}
      />

      <UpdatePasswordModal
        show={changepassowrdpopup}
        handleClose={() => setChangepassowrdpopup(false)}
      />

      <div className=" h-screen flex justify-center">
        <div className="grid place-items-center">
          <div className="lg:w-[500px] lg:h-full bg-white md:w-[400px] profile-div-main">
            <div className="relative bg-[#38B6FF] h-[80px] flex justify-center items-center text-xl font-semibold"></div>

            <div className="m-6 absolute mt-[-4rem]">
              <div className=" bg-[#F1F1F1] profile-div w-[450px] h-[120px] rounded-lg p-3">
                <div className="flex gap-5">
                  <div>
                    <img src={profilecircle} alt="" />
                  </div>
                  <div>
                    <div className=""> {profile?.data?.user?.name} </div>
                    <div>
                      Mob: {profile?.data?.user?.phoneNumber}, ID:{" "}
                      {profile?.data?.user?.userId}{" "}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    className="border-amber-400 border-2 rounded-lg text-sm h-[44px] w-[150px] font-semibold"
                    onClick={() => setChnagenicknamepopup(true)}
                  >
                    Change Nick Name
                  </button>
                  <button
                    className="border-amber-400 border-2 rounded-lg text-sm h-[44px] w-[150px] font-semibold"
                    onClick={() => setChangepassowrdpopup(true)}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[5rem]">
              <div className="m-5 profile-menus">
                <Link to="/Orderrecord">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img src={orderrecord} alt="" className="w-5" />
                      <span className="text-[#4C8CD6] font-semibold">
                        Order Record
                      </span>
                    </div>
                    <div className="">
                      <img src={arrow} alt="" className="w-5" />
                    </div>
                  </div>
                </Link>
                <hr className="m-3" />
                <Link to="/finicialdetail">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img src={financial} alt="" className="w-5" />
                      <span className="text-[#4C8CD6] font-semibold">
                        Financial Details
                      </span>
                    </div>
                    <div className="">
                      <img src={arrow} alt="" className="w-5" />
                    </div>
                  </div>{" "}
                </Link>
                <hr className="m-3" />
                <Link to="/download">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img src={download} alt="" className="w-5" />
                      <span className="text-[#4C8CD6] font-semibold">
                        Download
                      </span>
                    </div>
                    <div className="">
                      <img src={arrow} alt="" className="w-5" />
                    </div>
                  </div>
                </Link>
                <hr className="m-3" />
                <Link to="/Followus">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img src={followus} alt="" className="w-5" />
                      <span className="text-[#4C8CD6] font-semibold">
                        Follow us
                      </span>
                    </div>
                    <div className="">
                      <img src={arrow} alt="" className="w-5" />
                    </div>
                  </div>
                </Link>
                <hr className="m-3" />
                <Link to="/Support">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img src={support} alt="" className="w-5" />
                      <span className="text-[#4C8CD6] font-semibold">
                        Support
                      </span>
                    </div>
                    <div className="">
                      <img src={arrow} alt="" className="w-5" />
                    </div>
                  </div>{" "}
                </Link>
                <hr className="m-3" />
                <Link to="/Complaint">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img src={complaint} alt="" className="w-5" />
                      <span className="text-[#4C8CD6] font-semibold">
                        Complaint
                      </span>
                    </div>
                    <div className="">
                      <img src={arrow} alt="" className="w-5" />
                    </div>
                  </div>
                </Link>

                <hr className="m-3" />
                <Link to="/know-more">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img src={knowMoreImg} alt="" className="w-5" />
                      <span className="text-[#4C8CD6] font-semibold">
                        Know More
                      </span>
                    </div>
                    <div className="">
                      <img src={arrow} alt="" className="w-5" />
                    </div>
                  </div>
                </Link>
                <hr className="m-3" />
              </div>
              <div className=" flex justify-center profile-btn mt-10">
                <button
                  className="border-2 bg-[#ECECEC] w-[152px] h-[39px] text-[#4C8CD6] font-semibold  rounded-lg flex justify-center items-center gap-2"
                  onClick={() => log_out()}
                >
                  <img src={logout} alt="" /> Sign-out
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
