/** @format */
import { useEffect, useState } from "react";
import back from "../Assets/back.svg";
import { Link, useNavigate } from "react-router-dom";
import { getApi } from "../Repository/Repository";
import { AmountDisplay } from "../utils/utils";

const AgentWithdrawRecord = () => {
  const [data, setData] = useState({});
const navigate=useNavigate()
  useEffect(() => {
    getApi({
      url: "/payment/recordAll-for-user?type=withdraw",
      setResponse: setData,
    });
  }, []);
  function addTime(timestamp) {
    const [datePart, timePart] = timestamp.split(", ");

    const [time, modifier] = timePart.trim().split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    } else if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    hours += 5;
    minutes += 27;

    while (minutes >= 60) {
      minutes -= 60;
      hours += 1;
    }

    while (hours >= 24) {
      hours -= 24;
    }

    const newModifier = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    const updatedTimeString = `${formattedHours}:${formattedMinutes} ${newModifier}`;

    const updatedTimestamp = `${datePart}, ${updatedTimeString}`;

    return updatedTimestamp;
  }

  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full finical-main-div bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#38B6FF] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/agent-withdraw">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="w-[300px] text-center">Agent Records</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center mt-5 finical-card-main">
            
            {data?.transactions?.filter((i) => i.transactionType === "agentWallet")?.map(
              (i, index) =>
            
                <div className="wallet-card-transaction">
                <div className="flex justify-between  pr-2">
                  <p
                    style={{
                      padding: "0.1rem 0.4rem",
                      backgroundColor:
                        i?.status === "pending" ? "yellow":i?.status === "failed" ?"red"  : "green",
                      color: i?.status === "pending" ? "black" : "white",
                      borderRadius: "8px",
                    }}
                  >
                    {i.status}
                  </p>
                  <p>{addTime(i?.timestamp)}</p>
                </div>
                <div className="recharge-card-transaction-secondary">
                  <p className="recharge-card-transaction-primary">
                    <span className="flex flex-col">
                      <span>OrderId: {i?.paymentId?._id} </span>
                      <span>
                        UPI:{" "}
                        <span className="text-[#8682CA]">
                          {i?.paymentId?.upiId}
                        </span>
                      </span>
                    </span>
                  </p>
                  <AmountDisplay
                    amount={i.amount}
                    withdrawFee={i.withdrawfee}
                  />
                </div>
                <div className="withdraw-card__transaction_1">
                  {/* <p>Wallet:</p> */}
                  <p>Bank: {i?.paymentId?.accountNumber}</p>
                  {/* <p>Primary:</p> */}
                  <p>IFSC: {i?.paymentId?.ifscCode}</p>
                </div>
                <div className="withdrawRecordUserDetails">
                  <div>
                    <p>{i?.userId?.name}</p>
                    <p>Fee: {i?.withdrawfee} </p>
                    <p>Bank: {i?.amount}</p>
                  </div>
                  {/* {i?.status === "failed" && ( */}
                    <div className="flex justify-between pr-2 ">
                      <p></p>
                      <p
                        onClick={() => navigate(`/Complaint`)}
                        className="withDrawRecordUserDetails_2"
                      >
                        Complaint {">"}
                      </p>
                    </div>
                  {/* )} */}
                </div>
              </div>
                
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentWithdrawRecord;
