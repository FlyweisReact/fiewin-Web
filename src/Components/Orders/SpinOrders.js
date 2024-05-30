/** @format */

import React from "react";
import { getVelocityAnimal, getVelocityColor } from "../../utils/utils";

const SpinOrders = ({
  gameId,
  createdAt,
  colorChoice,
  animalChoice,
  colorResult,
  animalResult,
  status,
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
  return (
    <div className="order-card">
      <div className="upper-div">
        <div> {gameId} </div>
        <div>
          {" "}
          {createdAt?.slice(0, 10)} {createdAt?.split("T")?.[1]?.slice(0, 8)}{" "}
        </div>
      </div>

      <div className="flex justify-between ml-5 mr-5">
        <div className="flex flex-col gap-1 items-center">
          <span className="font-bold">Select</span>
          {colorChoice
            ? getVelocityColor(colorChoice)
            : getVelocityAnimal(animalChoice)}
        </div>

        <div className="flex flex-col gap-1 items-center">
          <span className="font-bold">Result</span>
          {getVelocityColor(colorResult)}
          {getVelocityAnimal(animalResult)}
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

export default SpinOrders;
