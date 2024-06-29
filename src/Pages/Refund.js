/** @format */

import React from "react";
import Footer from "../Components/Footer";
import back from "../Assets/back.svg";
import { Link } from "react-router-dom";

const Refund = () => {
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
              <div className="text-center">Refund and Cancellation Policy</div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div>
            <div className="m-5 p-2" style={{marginBottom : '100px'}}>
              <p style={{ fontWeight: "900" }}>Return & Refund Policy</p> Thank
              you for shopping at FieWin. We value your satisfaction and aim to
              provide you with the best possible shopping experience. If you are
              not entirely satisfied with your purchase, we're here to help.
              <br />
              <p style={{ fontWeight: "900" }}>Returns</p> Eligibility for
              Returns
              <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                <li>
                  You have 30 calendar days to return an item from the date you
                  received it.
                </li>
                <li>
                  To be eligible for a return, your item must be unused and in
                  the same condition that you received it.
                </li>
                <li>Your item must be in the original packaging.</li>
                <li> You must have the receipt or proof of purchase.</li>
              </ul>
              <p style={{ fontWeight: "900" }}> Non-returnable Items</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Some health and personal care items</li>
              </ul>
              <p style={{ fontWeight: "900" }}>How to Return an Item</p>
              <ul style={{ listStyle: "number", paddingLeft: "20px" }}>
                <li>
                  Contact Us: Before returning an item, please contact our
                  customer service team at support@fiewin.org to obtain a Return
                  Merchandise Authorization (RMA) number.
                </li>
                <li>
                  Prepare Your Package: Place the item securely in its original
                  packaging and include your receipt or proof of purchase, and
                  the RMA number.
                </li>
                <li>
                  Ship Your Return: Mail your return to the following address:
                </li>
              </ul>
              <p style={{ fontWeight: "900" }}>Exchanges</p>
              We only replace items if they are defective or damaged. If you
              need to exchange it for the same item, contact us at
              support@fiewin.org and send your item to the address provided.
              <p style={{ fontWeight: "900" }}>Shipping Costs</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                <li>
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are non-refundable.
                </li>
                <li>
                  If you receive a refund, the cost of return shipping will be
                  deducted from your refund.
                </li>
              </ul>
              <p style={{ fontWeight: "900" }}>Contact Us</p>
              If you have any questions on how to return your item to us,
              contact us atsupport@fiewin.org .
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Refund;
