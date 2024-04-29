import React, { useState } from "react";
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
import { Link } from "react-router-dom";
const Profile = () => {
  const [chnagenicknamepopup, setChnagenicknamepopup] = useState(false);
  const [changepassowrdpopup, setChangepassowrdpopup] = useState(false);
  return (
    <>
      {chnagenicknamepopup ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[300px] h-[170px] bg-white  rounded-lg relative p-5">
            <div className="font-semibold text-xl ">Change Nick Name</div>

            <form>
              <div className="flex justify-center flex-col items-center  gap-3">
                <div className="">
                  <br />
                  <input
                    type="text"
                    className="w-[250px] border-black border-b"
                    placeholder="Enter Nick Name"
                  />
                </div>
              </div>
            </form>

            <div className="flex justify-center gap-2 mt-5">
              <button
                onClick={() => setChnagenicknamepopup(false)}
                className="w-[150px] h-[40px] border font-bold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => setChnagenicknamepopup(false)}
                className="w-[150px] h-[40px] bg-[#FFB800] text-white font-bold rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {changepassowrdpopup ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-[400px] h-[200px] bg-white  rounded-lg relative p-5">
            <div className="font-semibold text-xl ">Set New Password</div>

            <form>
              <div className="flex justify-center flex-col items-center mt-2  gap-5">
                <div className="">
                  <input
                    type="text"
                    className="w-[350px] border-black border-b"
                    placeholder="Old Password"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-[250px] border-black border-b"
                    placeholder="New Password"
                  />
                </div>
              </div>
            </form>

            <div className="flex justify-center gap-2 mt-5">
              <button
                onClick={() => setChangepassowrdpopup(false)}
                className="w-[150px] h-[40px] border font-bold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => setChangepassowrdpopup(false)}
                className="w-[150px] h-[40px] bg-[#FFB800] text-white font-bold rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className=" h-screen flex justify-center">
        <div className="grid place-items-center">
          <div className="lg:w-[500px] lg:h-full bg-white md:w-[400px] profile-div-main">
            <div className="relative bg-[#FFB800] h-[80px] flex justify-center items-center text-xl font-semibold"></div>

            <div className="m-6 absolute mt-[-4rem]">
              <div className=" bg-[#F1F1F1] profile-div w-[450px] h-[120px] rounded-lg p-3">
                <div className="flex gap-5">
                  <div>
                    <img src={profilecircle} alt="" />
                  </div>
                  <div>
                    <div className="">+91 1234567890</div>
                    <div>Mob: 1234567890, ID: 6324853</div>
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
              </div>
              <div className=" flex justify-center profile-btn mt-10">
                <Link to="/">
                  <button className="border-2 bg-[#ECECEC] w-[152px] h-[39px] text-[#4C8CD6] font-semibold  rounded-lg flex justify-center items-center gap-2">
                    <img src={logout} alt="" /> Sign-out
                  </button>
                </Link>
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
