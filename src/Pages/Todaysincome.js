/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import { getApi } from "../Repository/Repository";

const Todaysincome = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    getApi({
      url: "/user/allday-referral/data",
      setResponse,
    });
  }, []);

  const data = response?.referralCounts?.flatMap((i) =>
    i?.earnings?.map((item) => [
      item?.createdAt?.slice(0, 10),
      `***${item?.user?.userId?.slice(-3)}`,
      `₹${item?.amount}`,
    ])
  );

  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full followus-main bg-white md:w-[400px] flex flex-col">
          <div className="relative text-xl font-semibold text-white">
            <div className="flex justify-between items-center bg-[#38B6FF] h-[60px] ">
              <div className="w-[100px]">
                <Link to="/Inviteandearn">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>

              <div className="text-center">Today's Income</div>
              <div className="w-[100px]"></div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-10">
              {data?.map((rowData, rowIndex) => (
                <div
                  className="bg-[#FFF1CC] w-[450px] h-[56px] income-card  rounded-lg flex items-center justify-between text-black pl-2 pr-2"
                  key={`row${rowIndex}`}
                >
                  {rowData?.map((cellData, cellIndex) => (
                    <div className="text-[15px]" key={`cell${cellIndex}`}>
                      {cellData}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todaysincome;
