/** @format */

import React from "react";

const HeadTailOrders = ({
  gameId,
  createdDate,
  status,
  choice,
  result,
  point,
  winAmount,
}) => {
  const isWinLoss = (winAmount, amount) => {
    if (winAmount === 0) {
      return <span style={{ color: "#fa3c09" }}>-₹{amount}</span>;
    } else {
      return <span style={{ color: "#00c282" }}>+₹{winAmount}</span>;
    }
  };
  function updateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    
    if (isNaN(date)) {
        throw new Error('Invalid date format');
    }

    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 27);

    const updatedTime = date.toISOString().split("T")[1].slice(0, 8);

    return updatedTime;
}
  return (
    <div className="order-card">
      <div className="upper-div">
        <div> {gameId} </div>
        <div>
          {" "}
          {createdDate?.slice(0, 10)}{" "}
          {updateTime(createdDate)}
          {/* {createdDate?.split("T")?.[1]?.slice(0, 8)}{" "} */}
        </div>
      </div>

      <div className="flex justify-between ml-5 mr-5">
        <div className="flex flex-col gap-1 items-center">
          <span className="font-bold">Select</span>
          <span
            className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
              choice === "head" ? "bg-[#a5814f]" : "bg-[#ffb800]"
            }  `}
          >
            {choice === "head" ? "H" : "T"}
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <span className="font-bold">Result</span>
          <span
            className={`w-[30px] h-[20px] flex justify-center items-center rounded text-white ${
              result === "head" ? "bg-[#a5814f]" : "bg-[#ffb800]"
            }  `}
          >
            {result === "head" ? "H" : "T"}
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span className="font-bold">Status</span>
          <span
            className="text-right font-bold"
            style={{ textTransform: "uppercase" }}
          >
            {" "}
            {status}{" "}
          </span>
        </div>
        <div className="flex flex-col gap-1  w-[100px] text-right">
          <span className="font-bold">Point</span>
          <span className="text-right "> ₹{point} </span>
        </div>
      </div>

      <hr className="mt-3" />
      <div className="flex justify-between ml-5 mr-5">
        <div>Delivery: {isWinLoss(winAmount, point)} </div>
      </div>
    </div>
  );
};

export default HeadTailOrders;
