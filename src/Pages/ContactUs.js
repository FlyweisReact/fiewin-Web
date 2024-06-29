/** @format */

import React from "react";
import Footer from "../Components/Footer";
import back from "../Assets/back.svg";
import { Link } from "react-router-dom";


const ContactUs = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full support-main bg-[#fff] md:w-[400px] flex flex-col">
          
        <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to={-1}>
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="text-center">Contact Us</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div>
            <div className="m-5 p-2">
              <div>
            
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Welcome To <span>Fiewin</span>
                </h2>
                <p className="mt-5">
                  Please email us at support@fiewin.org if you have any queries
                  about the site, or anything else.
                </p>
                <p className="mt-5 text-center">
                  We will revert you as soon as possible...!
                </p>
                <p className="mt-5 text-center" style={{ fontWeight: "bold" }}>
                  Thank you for contacting us!
                  <br />
                  <br />
                  <span>Have a great day !</span>
                </p>
              </div>
              <br />
              <br />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
