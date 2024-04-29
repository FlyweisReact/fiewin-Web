import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import comingsoon from "../Assets/comingsoon.svg";
const Ranking = () => {
  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full bg-[#9520FD] ranking-main-div md:w-[400px] flex flex-col">
          <div className="flex justify-between items-center bg-[#FFB800] h-[80px] text-xl font-semibold text-white">
            <div>
              <Link to="/Inviteandearn">
                <img src={back} alt="" className="ml-2" />
              </Link>
            </div>
            <div>Ranking</div>
            <div></div>
          </div>

          <div className="flex justify-center ">
            <img src={comingsoon} alt="" />
          </div>
          <div className="text-white text-center">
            We are preparing generous awards
            <br /> for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
