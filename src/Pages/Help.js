import back from "../Assets/back.svg";
import { Link } from "react-router-dom";
import youtube from "../Assets/YouTube.svg"

const Help = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full help-div bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#38B6FF] h-[60px] text-xl font-semibold text-white">
            <div className=" help-main flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to="/Wallet">
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>

              <div className="w-[100px] text-center">Help</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div className="bg-[#C1DDFF] h-[60px] flex justify-between p-2 items-center text-white">
            <div className="font-bold">PhonePe</div>
            <div className="font-bold">Paytm</div>
            <div className="font-bold">GPay</div>
          </div>
          <div className="m-5">
            <div className="font-bold">Recharge using PhonePe</div>
            <div className="mt-5">
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
