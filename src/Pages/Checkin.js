import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import coins from "../Assets/coins.svg";
import teasure from "../Assets/Treasure.svg";
import teasureanimation from "../Assets/teasureanimation.svg";

const Checkin = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full check-main-div bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className="h-[60px] check-header flex justify-between items-center ">
              <div className="w-[100px]">
              <Link to="/Home">
                <img src={back} alt="" className="ml-2" />
              </Link>

              </div>
              <div className="w-[100px] text-center">
              Check In
              </div>
            <div className="w-[100px]"></div>
           
            </div>
          </div>

          <div className="bg-[#FFEBB9] h-[100%]">
            <div className="flex justify-center mt-10">
              <div className="w-[450px] checkin-card h-[300px] bg-white rounded-lg">
                <div className="flex flex-wrap justify-center gap-12 m-5">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">Day 1</span>
                    <img src={coins} alt="" />
                    <span className="font-bold">₹1</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">Day 2</span>
                    <img src={coins} alt="" />
                    <span className="font-bold">₹2</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">Day 3</span>
                    <img src={coins} alt="" />
                    <span className="font-bold">₹2</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">Day 4</span>
                    <img src={coins} alt="" />
                    <span className="font-bold">₹3</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">Day 5</span>
                    <img src={coins} alt="" />
                    <span className="font-bold">₹3</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">Day 6</span>
                    <img src={coins} alt="" />
                    <span className="font-bold">₹3</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">Day 7</span>
                    <img src={coins} alt="" />
                    <span className="font-bold">₹4</span>
                  </div>

                  <div>
                    <img src={teasure} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <button className="w-[150px] h-[40px] bg-[#FFB800] text-white rounded-xl  font-semibold text-xl">
                Check in
              </button>
            </div>
            <div className="flex justify-center mt-2">
              <div className="text-center w-[450px] check-p font-semibold">
                Check in for 7 consecutive days to get treasure box, and receive
                mysterious prizes.
              </div>
            </div>
            <div className="flex justify-center">
              <img src={teasureanimation} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
