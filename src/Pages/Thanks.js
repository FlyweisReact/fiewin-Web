/** @format */

import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { edit_module } from "../Repository/Repository";

const Thanks = () => {
  const { id } = useParams();
  const [isDone, setIsDone] = useState(true);
  const navigate = useNavigate();

  // const submitHanlder = useCallback(() => {
  //   const additionalFunctions = [() => setIsDone(true)];
  //   edit_module({
  //     url: `/payment/withdraw-request/${id}`,
  //     payload: {
  //       status: "successful",
  //     },
  //     additionalFunctions,
  //   });
  // }, [id]);

  // useEffect(() => {
  //   submitHanlder();
  // }, [submitHanlder]);

  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full wallet-first bg-white md:w-[400px] ">
          <div className="bg-[#FFDC82] w-[500px] p-5 flex justify-center items-center text-xl font-semibold top-0 fixed z-50"></div>
          {isDone ? (
            <div className="withdraw-complete-div">
              {/* <p>
                Your withdrawal transaction has been successfully completed. The
                funds have been transferred to your account.
              </p> */}
              <p>Amount will be transfer soon!</p>

              <button onClick={() => navigate("/home")}>Home</button>
            </div>
          ) : (
            <div className="withdraw-complete-div">
              <ClipLoader />
              <p>
                Your withdrawal request is being processed. Please wait a moment
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Thanks;
