import home from "../Assets/home.svg";
import refer from "../Assets/refer.svg";
import wallet from "../Assets/wallet.svg";
import Profile from "../Assets/profile.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (


  
    <div className="flex justify-around bg-slate-50 lg:w-[500px] md:w-[500px] sm:[500px] border-t-2 pt-2 pb-2 rounded-t-lg footer-width fixed bottom-0 ">
      <Link to="/home">
        <div className="flex flex-col text-[#818181] items-center cursor-pointer">
          <div>
            <img src={home} alt="" />
          </div>
          Home
        </div>
      </Link>
      <Link to="/Inviteandearn">
        <div className="flex flex-col text-[#818181] items-center cursor-pointer">
          <div>
            <img src={refer} alt="" />
          </div>
          Invite & Earn
        </div>
      </Link>
      <Link to="/wallet">
        <div className="flex flex-col text-[#818181] items-center cursor-pointer">
          <div>
            <img src={wallet} alt="" />
          </div>
          Wallet
        </div>
      </Link>
      <Link to="/Profile">
        <div className="flex flex-col text-[#818181] items-center cursor-pointer">
          <div>
            <img src={Profile} alt="" />
          </div>
          Profile
        </div>
      </Link>
    </div>
   
  );

};

export default Footer;
