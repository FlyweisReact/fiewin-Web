/** @format */
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";

const ComponentHead = ({ title, subTitle, subLink,navigateLink }) => {
  return (
    <div className="bg-[#38B6FF] text-white h-[80px] flex justify-between items-center text-xl font-semibold p-2 sticky  ">
      <div className="w-[100px]">
        <Link to={navigateLink?navigateLink :"/Home"}>
          <img src={back} alt="" className="ml-2" />
        </Link>
      </div>
      <div className="text-2xl"> {title} </div>

      {subLink ? (
        <div  className="cursor-pointer" onClick={() => subLink()}>
          {" "}
          {subTitle}{" "}
        </div>
      ) : (
        <div className=""> {subTitle} </div>
      )}
    </div>
  );
};

export default ComponentHead;
