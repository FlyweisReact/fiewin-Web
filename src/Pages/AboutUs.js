/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import back from "../Assets/back.svg";

const AboutUs = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full support-main bg-[#fff] md:w-[400px] flex flex-col">
          <div className="relative bg-[#38B6FF] h-[60px] text-xl font-semibold text-white">
            <div className=" finical-tran flex justify-between items-center mt-4">
              <div className="w-[100px]">
                <Link to={-1}>
                  <img src={back} alt="" className="ml-2" />
                </Link>
              </div>
              <div className="text-center">About Us</div>
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
                  <span>Fiewin</span> is a Professional <span>Gaming</span>{" "}
                  Platform. Here we will only provide you with interesting
                  content that you will enjoy very much. We are committed to
                  providing you the best of <span>Gaming</span>, with a focus on
                  reliability and <span>Gaming App </span>. we strive to turn
                  our passion for <span>Gaming</span> into a thriving website.
                  We hope you enjoy our <span>Gaming</span> as much as we enjoy
                  giving them to you.
                </p>
                <p className="mt-5">
                  I will keep on posting such valuable anf knowledgeable
                  information on my Website for all of you. Your love and
                  support matters a lot.
                </p>
                <p className="mt-5 text-center" style={{ fontWeight: "bold" }}>
                  Thank you For Visiting Our Site
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

export default AboutUs;
