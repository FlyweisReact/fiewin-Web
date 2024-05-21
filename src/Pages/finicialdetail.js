/** @format */

import React, { useEffect, useState } from "react";
import rupee from "../Assets/rupee.svg";
import back from "../Assets/back.svg";
import { Link } from "react-router-dom";
import { getApi } from "../Repository/Repository";

const Finicialdetail = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getApi({
      url: "/payment/recordAllUser",
      setResponse: setData,
    });
  }, []);


  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full finical-main-div bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/profile">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="w-[100px] text-center">Transactions</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center mt-5 finical-card-main">
            {data?.transactions?.map((i, index) => (
              <div
                key={index}
                className="bg-[#FFF3D5] finical-card w-[450px] h-[68px] rounded-lg flex items-center justify-between "
              >
                <div className="flex gap-2 ml-2">
                  <img src={rupee} alt="" className="w-8" />
                  <div className="flex flex-col ">
                    <div> {i.product?.description} </div>
                    <div>
                      {i.timestamp}{" "}

                    </div>
                  </div>
                </div>
                <div className="font-bold mr-2">₹{i.amount} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finicialdetail;
