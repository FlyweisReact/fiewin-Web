/** @format */
import Footer from "../Components/Footer";
import orderrecord from "../Assets/Profile/orderrecord.svg";
import arrow from "../Assets/Profile/arrow.svg";
import financial from "../Assets/Profile/financial.svg";
import followus from "../Assets/Profile/followus.svg";
import support from "../Assets/Profile/support.svg";
import { Link } from "react-router-dom";
import knowMoreImg from "../Assets/book-solid.svg";

const data = [
  {
    link: "/privacy-policy",
    title: "Privacy Policy",
    img: orderrecord,
  },
  {
    link: "/about-us",
    title: "About Us",
    img: followus,
  },
  {
    link: "/contact-us",
    title: "Contact Us",
    img: support,
  },
  {
    link: "/refund",
    title: "Refund and Cancellation Policy",
    img: financial,
  },
  {
    link: "/terms-condition",
    title: "Terms and conditions",
    img: knowMoreImg,
  },
];

const KnowMore = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full bg-white md:w-[400px] profile-div-main">
          <div className="relative bg-[#38B6FF] h-[80px] flex justify-center items-center text-xl font-semibold"></div>
          <div>
            <div className="m-5 profile-menus">
              {data?.map((i, index) => (
                <>
                  <Link to={i.link} key={index}>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img src={i.img} alt="" className="w-5" />
                        <span className="text-[#4C8CD6] font-semibold">
                          {i.title}
                        </span>
                      </div>
                      <div className="">
                        <img src={arrow} alt="" className="w-5" />
                      </div>
                    </div>
                  </Link>
                  <hr className="m-3" />
                </>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
