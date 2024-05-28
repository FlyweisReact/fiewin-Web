/** @format */

import React from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import grouppeople from "../Assets/gruoppeople.svg";

const Privilege = () => {
  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full bg-[#9520FD] main-div md:w-[400px] flex flex-col">
          <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white flex justify-between items-center">
            <div>
              <Link to="/Inviteandearn">
                <img src={back} alt="" className="ml-2" />
              </Link>
            </div>
            <div>Agency Privilege</div>
            <div></div>
          </div>
          <div className="flex justify-center m-5">
            3 level invites, each user will generate commission
          </div>
          <div className="flex justify-center">
            <div className="border-2 w-[450px] h-[250px] main-img bg-white flex justify-center items-center rounded-lg">
              <img src={grouppeople} alt="" className="w-[350px]" />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Link to="/Invitelink">
              <button className="w-[150px] h-[40px] bg-[#FFB800] text-white rounded-3xl">
                Refer To Get
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privilege;
