/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { getApi, postApi } from "../Repository/Repository";
import { ClipLoader } from "react-spinners";

const Complaint = () => {
  const [loading, setLoading] = useState(false);
  const [complainttrack, setcomplainttrack] = useState(false);
  const [complainBody, setComplainBody] = useState("");
  const [email, setEmail] = useState("");
  const [allComplaints, setAllComplaints] = useState([]);

  const fetchComplaint = () => {
    getApi({
      url: "/complain/fetchAllComplaints",
      setResponse: setAllComplaints,
    });
  };

  useEffect(() => {
    fetchComplaint();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      complainBody,
      email,
    };
    const additionalFunctions = [() => setcomplainttrack(true), fetchComplaint];
    postApi({
      url: "/complain/createComplaint",
      payload,
      additionalFunctions,
      setLoading,
    });
  };

  return (
    <>
      <div className=" h-screen flex justify-center">
        <div className=" h-screen flex justify-center">
          <div className="grid place-items-center">
            <div className="lg:w-[500px] lg:h-full complaint-main bg-[#9520FD] md:w-[400px] flex flex-col">
              <div className="relative bg-[#38B6FF] h-[60px] text-xl font-semibold text-white">
                <div className=" finical-tran flex justify-between items-center mt-4">
                  <div className="w-[100px]">
                    <Link to="/profile">
                      <img src={back} alt="" className="ml-2" />
                    </Link>
                  </div>
                  <div className="w-[100px] text-center">Complaint</div>
                  <div className="w-[100px]"></div>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <div className="flex complaint-header">
                  <div
                    className={`w-[225px] h-[50px]  font-semibold flex justify-center items-center rounded-l-lg cursor-pointer
                    ${
                      complainttrack === false
                        ? "bg-[#38B6FF] text-[#fff]"
                        : "bg-[#fff] text-[#000]"
                    }
                    `}
                    onClick={() => setcomplainttrack(false)}
                  >
                    Complaints
                  </div>
                  <div
                    className={`w-[225px] h-[50px]  font-semibold flex justify-center items-center rounded-r-lg cursor-pointer
                    ${
                      complainttrack === true
                        ? "bg-[#38B6FF] text-[#fff]"
                        : "bg-[#fff] text-[#000]"
                    }
                    `}
                    onClick={() => setcomplainttrack(true)}
                  >
                    Track
                  </div>
                </div>
              </div>

              {complainttrack ? (
                <div style={{ maxHeight: "700px", overflowY: "auto" }}>
                  {allComplaints?.complaints?.map((i, index) => (
                    <div
                      className="flex justify-center mt-5"
                      key={`complaint${index}`}
                    >
                      <div className="w-[450px] bg-white  rounded-lg p-2 complaint-text ">
                        <div className="flex justify-between">
                          {i?.remarks ? (
                            <div><span className="font-bold">Admin Reply:</span>{" "} {i.remarks}</div>
                          ) : (
                            <div></div>
                          )}
                          <div className="text-[#FFAC33] text-[12px]">
                            {" "}
                            {i.status}{" "}
                          </div>
                        </div>
                        <div>
                          <span className="font-bold">User:</span>{" "}
                          {i.complainBody}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="bg-slate-100 flex justify-center">
                    <div className="grid place-items-center">
                      <div className="lg:w-[500px] lg:h-full complaint-main bg-[#9520FD] md:w-[400px] flex flex-col">
                        <div className="ml-10 mt-5 mb-2 text-xl  text-white font-bold">
                          Complaints? Let us know
                        </div>
                        <div className="flex justify-center flex-col items-center gap-2">
                          <div className="relative rounded">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                                <MdOutlineEmail style={{ color: "white" }} />
                              </span>
                            </div>

                            <input
                              type="email"
                              className="bg-[#9520FD] text-[#fff] compaint-input placeholder: ml-2 block w-[430px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2   sm:text-sm sm:leading-6 outline-none"
                              placeholder="Enter Your Email"
                              style={{ color: "#fff" }}
                              value={email}
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex justify-center ml-2 mt-2">
                          <div className="relative rounded">
                            <div className="relative">
                              <span className="absolute  left-0 top-2 flex items-center pl-3 pointer-events-none">
                                <GrCompliance style={{ color: "white" }} />
                              </span>
                              <textarea
                                type="text"
                                className="bg-[#9520FD] text-[#fff]  compaint-input block w-[430px] h-[100px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2   sm:text-sm sm:leading-6 outline-none "
                                placeholder="Explain about your complaint.."
                                min={0}
                                style={{ color: "#fff" }}
                                max={500}
                                value={complainBody}
                                required
                                onChange={(e) =>
                                  setComplainBody(e.target.value)
                                }
                              />
                              <span className="text-white flex justify-end">
                                0/500 Character
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mt-10">
                          <button
                            type="submit"
                            className=" complaint-btn w-[430px] h-[50px] bg-[#38B6FF] text-white font-bold rounded-lg"
                          >
                            {loading ? <ClipLoader color="#fff" /> : "Send"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complaint;
