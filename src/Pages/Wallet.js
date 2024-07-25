/** @format */
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getApi, postApi } from "../Repository/Repository";
import { ClipLoader } from "react-spinners";
import { Icon } from "@iconify/react/dist/iconify.js";

const Wallet = () => {
  const [selectedAmount, setSelectedAmount] = useState(35);
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const [showPaymentUrl, setShowPaymentUrl] = useState(false);

  const payload = {
    totalAmount: parseInt(selectedAmount),
  };

  const getProfile = () => {
    getApi({
      url: "/user/profile",
      setResponse: setRes,
    });
  };

  const navigationHandler = (res) => {
    const url = res?.data?.data;
    
    setPaymentData(url);
    setPaymentStatus(true);
    // window.location.href = url;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const additionalFunctions = [navigationHandler];
    // edit_module({
    //   url: "/user/addWallet",
    //   payload,
    //   additionalFunctions,
    // });

    postApi({
      url: "/user/razorpayPayment",
      payload,
      additionalFunctions,
      setLoading,
    });
  };
  const handleShowPaymentUrl = () => {
    setShowPaymentUrl(true);
  };
  useEffect(() => {
    getProfile();
  }, []);
  const handleRedirect = (url) => {
    // 
    window.location.href = url;
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/");
    }
  }, []);
  return (
    <div className="bg-slate-100 h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full wallet-first bg-white md:w-[400px] ">
          <div className="bg-[#38B6FF] text-white  h-[50px] flex justify-between items-center text-xl font-semibold p-2 sticky">
            <span
              className="cursor-pointer"
              onClick={() => {
                setPaymentStatus(false);
                navigate("/Recharge/record");
              }}
            >
              Records
            </span>
            <span> Recharge </span>

            <Link to="/Help">
              <span>Help</span>
            </Link>
          </div>

          {!paymentStatus ? (
            <form onSubmit={handleSubmit}>
              <div className="mt-16">
                <div className="text-center font-bold">Balance</div>
                <div className="text-center font-bold text-3xl">
                  ₹
                  {res?.data?.user?.wallet
                    ? Math.floor(res.data.user.wallet * 100) / 100
                    : 0}{" "}
                </div>
                <div className="ml-3 mr-3">
                  <div className="text-2xl font-bold">Amount</div>
                  <div className="text-3xl">
                    <input
                      className="text-[#A1A1A1] outline-none w-full"
                      placeholder="₹35 ~ 20000"
                      min={35}
                      type="number"
                      onChange={(e) => setSelectedAmount(e.target.value)}
                      value={selectedAmount}
                      required
                    />
                  </div>
                  <hr />
                </div>

                <div className="flex flex-wrap gap-2 justify-center mt-10">
                  <button
                    type="button"
                    className="bg-[#C1DDFF] rounded-xl w-[150px] h-[48px] "
                    onClick={() => setSelectedAmount(250)}
                  >
                    ₹250
                  </button>
                  <button
                    type="button"
                    className="bg-[#C1DDFF] rounded-xl w-[150px] h-[48px] "
                    onClick={() => setSelectedAmount(500)}
                  >
                    ₹500
                  </button>
                  <div class="relative">
                    <button
                      type="button"
                      class="relative bg-[#C1DDFF] rounded-xl w-[150px] h-[48px]"
                      onClick={() => setSelectedAmount(1000)}
                    >
                      ₹1000
                    </button>
                    <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#38B6FF]">
                      Get ₹100 extra
                    </div>
                  </div>

                  <div class="relative">
                    <button
                      type="button"
                      class="relative bg-[#C1DDFF] rounded-xl w-[150px] h-[48px]"
                      onClick={() => setSelectedAmount(2000)}
                    >
                      ₹2000
                    </button>
                    <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#38B6FF]">
                      Get ₹200 extra
                    </div>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="relative bg-[#C1DDFF] rounded-xl w-[150px] h-[48px]"
                      onClick={() => setSelectedAmount(5000)}
                    >
                      ₹5000
                    </button>
                    <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#38B6FF]">
                      Get ₹500 extra
                    </div>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      class="relative bg-[#C1DDFF] rounded-xl w-[150px] h-[48px]"
                      onClick={() => setSelectedAmount(10000)}
                    >
                      ₹10000
                    </button>
                    <div class="absolute bottom-0 right-0  font-bold flex justify-center items-center rounded-br text-black w-[63px] h-[14px] text-[7px] bg-[#38B6FF]">
                      Get ₹1000 extra
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-20 mb-10">
                  <button
                    type="submit"
                    className="bg-[#38B6FF] rounded-xl recharge-btn w-[430px] h-[48px] text-white text-xl font-bold"
                  >
                    {loading ? <ClipLoader color="#fff" /> : "Recharge"}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="bg-gray-100 flex flex-col items-center justify-center p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg mt-10 mb-10 ">
                <h2 className="text-2xl font-bold mb-4">
                  Choose your payment method:
                </h2>
                <ul className="list-none mb-4">
                  {/* {paymentStatus && (
                    <div className="mb-4 p-4 bg-gray-200 rounded-lg">
                      
                      <a
                        href={paymentData?.payment_url}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer break-all"
                      >
                        <iframe
                          src={paymentData?.payment_url}
                          style={{ width: "100%", height: "500px" }}
                        />
                      </a>
                    </div>
                  )} */}
                  <li className="mb-2">
                    <button
                      onClick={() => handleRedirect(paymentData?.payment_url)}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1"
                    >
                      <span>Pay with QR</span>{" "}
                      <span>
                        <Icon
                          icon="pepicons-pop:qr-code-circle-filled"
                          width="1.2rem"
                          height="1.2rem"
                          style={{ color: "#E86C01" }}
                        />
                      </span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      onClick={() =>
                        handleRedirect(paymentData?.upi_intent?.bhim_link)
                      }
                      className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1"
                    >
                      <span>Pay with BHIM</span>{" "}
                      <span>
                        <Icon
                          icon="arcticons:bhim"
                          width="1.2rem"
                          height="1.2rem"
                          style={{ color: "#E86C01" }}
                        />
                      </span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      onClick={() =>
                        handleRedirect(paymentData?.upi_intent?.phonepe_link)
                      }
                      className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1"
                    >
                      <span> Pay with PhonePe </span>
                      <span>
                        <Icon
                          icon="simple-icons:phonepe"
                          width="1.2rem"
                          height="1.2rem"
                          style={{ color: "#7a1b9d" }}
                        />
                      </span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      onClick={() =>
                        handleRedirect(paymentData?.upi_intent?.paytm_link)
                      }
                      className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1"
                    >
                      <span>Pay with Paytm</span>{" "}
                      <span>
                        <Icon
                          icon="simple-icons:paytm"
                          width="1.2rem"
                          height="1.2rem"
                          style={{ color: "#042F6A" }}
                        />
                      </span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      onClick={() =>
                        handleRedirect(paymentData?.upi_intent?.gpay_link)
                      }
                      className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1"
                    >
                      <span> Pay with Google Pay</span>
                      <span>
                        <Icon
                          icon="logos:google-pay"
                          width="1.2rem"
                          height="1.2rem"
                        />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
