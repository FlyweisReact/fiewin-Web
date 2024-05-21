/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import { getApi } from "../Repository/Repository";
import { copyText } from "../utils/utils";

const Invitelink = () => {
  const [profile, setProfile] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
  }, []);

  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full bg-[#9520FD] invitelink-main md:w-[400px] flex flex-col">
          <div className="relative  justify-between items-center  bg-[#FFB800] h-[80px] text-xl font-semibold text-white flex">
            <div>
              <Link to="/Inviteandearn">
                <img src={back} alt="" className="ml-2" />
              </Link>
            </div>
            <div> Invite Link</div>
            <div></div>
          </div>
          <div className="flex justify-center items-center flex-col gap-5 mt-10">
            <div className="text-center text-white">
              *The invitee will get Rs.40 reward
            </div>
            <div className="text-white">My invite link</div>
            <div className="">
              <input
                type="text"
                className=" placeholder: ml-2 block w-[430px] invitelink-div h-[30px] rounded-xl border-0 py-1.5 pl-1 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                placeholder="Link"
                value={profile?.data?.user?.referralCode}
              />
            </div>
            <div className="">
              <button
                className="w-[430px] invitelink-div h-[40px] bg-[#FFB800] text-white rounded-xl"
                type="button"
                onClick={() =>
                  copyText({
                    textToCopy: profile?.data?.user?.referralCode,
                    setCopied,
                  })
                }
              >
                {copied ? "Code copied" : " Copy link and share"}
              </button>
            </div>
            <div className=" w-[430px] invitelink-div text-white ">
              <div>
                Fiewin’s rules and regulations prohibit multiple accounts. You
                may be blocked if you use multiple accounts or conduct
                suspicious activities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitelink;
