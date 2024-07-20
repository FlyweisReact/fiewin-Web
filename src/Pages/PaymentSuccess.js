/** @format */
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    if (window.top !== window.self) {
      window.top.location.replace("/home");
    } else {
      window.location.href = "/home";
    }
  };
  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full wallet-first bg-white md:w-[400px] ">
          <div className="bg-[#FFDC82] w-[500px] p-5 flex justify-center items-center text-xl font-semibold top-0 fixed z-50"></div>
          <div className="withdraw-complete-div">
            <p>Your transaction has been successfully completed.</p>
            <button onClick={redirectToHome}>Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
