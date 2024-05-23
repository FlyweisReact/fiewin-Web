/** @format */
import { useLocation, useNavigate } from "react-router-dom";
import { FooterNav } from "../Constant/Constant";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-around bg-slate-50 lg:w-[500px] md:w-[500px] sm:[500px] border-t-2 pt-2 pb-2 rounded-t-lg footer-width fixed bottom-0 ">
      {FooterNav?.map((i, index) => (
        <div
          className={`footer-nav ${
            i.link === location.pathname ? "active" : ""
          } `}
          key={index}
          onClick={() => navigate(i.link)}
        >
          {i.icon}
          <p>{i.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
