import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import invitebg from "../Assets/invitebg.svg";
import diamond from "../Assets/daimond.svg";
import ranking from "../Assets/ranking.svg";
import mylink from "../Assets/mylink.svg";
import banner from "../Assets/banner.svg";
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { getApi } from "../Repository/Repository";

const Inviteandearn = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [referData, setReferData] = useState({});
  const [totalRefer, setTotalRefer] = useState({});

  const [response, setResponse] = useState({});

  useEffect(() => {
    getApi({
      url: "/user/allday-referral/data",
      setResponse,
    });
  }, []);

  const data = response?.referralCounts
    ?.flatMap((i) =>
      i?.earnings?.map((item) => {
        return { ...item, level: i.level };
      })
    )
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  useEffect(() => {
    getApi({
      url: "/user/profile",
      setResponse: setProfile,
    });
    getApi({
      url: "/user/today-referral/data",
      setResponse: setReferData,
    });
    getApi({
      url: "/user/level-wise-income",
      setResponse: setTotalRefer,
    });
  }, []);

  let totalUserCount = 0;

  if (referData?.data?.referralLevels) {
    referData?.data?.referralLevels?.forEach((level) => {
      totalUserCount += level.users.length;
    });
  }
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/");
    }
  }, []);

  function addTimeToTimestamp(timestamp, hoursToAdd, minutesToAdd) {
    const originalTime = timestamp.slice(11, 19);

    if (originalTime) {
      const date = new Date(`1970-01-01T${originalTime}Z`);

      date.setUTCHours(date.getUTCHours() + hoursToAdd);
      date.setUTCMinutes(date.getUTCMinutes() + minutesToAdd);

      return date.toISOString().slice(11, 19);
    }

    return null;
  }
  return (
    <div className=" flex justify-center">
      <div className="grid place-items-center ">
        <div className="w-[500px]  h-[850px] first-div-main bg-slate-100 ">
          <div className="relative bg-[#38B6FF] text-white h-[80px] flex justify-center items-center text-xl font-semibold"></div>
          <div className="bg-[white] ">
            <img src={invitebg} alt="" className="agent-background" />
            <div className="flex justify-center">
              <div className="absolute flex flex-col  gap-20 mt-[-270px] agent-div-main">
                <div className="flex justify-between items-center agent-div bg-white w-[470px] h-[120px]  rounded-lg">
                  <div className="flex flex-col ml-5">
                    Agent amount
                    <span className="text-3xl">
                      ₹
                      {profile?.data?.user?.agentWallet
                        ? profile?.data?.user?.agentWallet
                        : 0}
                    </span>
                  </div>
                  <div className="mr-5">
                    <Link to="/agent-withdraw">
                      <button className="bg-[#38B6FF] rounded-3xl w-[100px] h-[48px] text-white font-semibold">
                        Withdraw
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link to="/Privilege">
                    {" "}
                    <div className="bg-[#F15B36] agent-card { w-[150px] h-[126px] rounded-lg flex flex-col justify-center items-center">
                      <img src={diamond} alt="" />
                      <div className="text-white font-bold text-xl">
                        Privilege
                      </div>
                    </div>
                  </Link>
                  <Link to="/Ranking">
                    <div className="bg-[#2F7EF3] agent-card { w-[150px] h-[126px] rounded-lg flex flex-col justify-center items-center">
                      <img src={ranking} alt="" />
                      <div className="text-white font-bold text-xl">
                        Ranking
                      </div>
                    </div>
                  </Link>
                  <div
                    className="bg-[#38C56D] agent-card { w-[150px] h-[126px] rounded-lg flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => navigate("/Invitelink")}
                  >
                    <img src={mylink} alt="" />
                    <div className="text-white font-bold text-xl">My Link</div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex justify-center mt-16 agent-banner">
              <Link to="/Awardplains">
                <img
                  src={banner}
                  alt=""
                  className="w-[450px] agent-banner-img"
                />{" "}
              </Link>
            </div>

            <div className="flex justify-between m-5 pb-2">
              <div className="flex flex-col gap-2 items-center">
                <div className="font-semibold">Invited today</div>
                <div>
                  {" "}
                  {referData?.referralCounts?.length
                    ? referData?.referralCounts?.length
                    : 0}{" "}
                </div>
                <div className="flex items-center gap-1">
                  Total {totalUserCount}
                  <Link to="/Invitetoday">
                    <span className="bg-[#F6C100] w-[23px] h-[23px] rounded-full flex justify-center items-center cursor-pointer">
                      <IoChevronForward style={{ color: "white" }} />{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="font-semibold"> Today's Income</div>
                <div> ₹{referData?.earnings ? referData?.earnings : 0} </div>
                <div className="flex items-center gap-1">
                  Total ₹
                  {totalRefer?.data?.[0]?.totalIncome
                    ? totalRefer?.data?.[0]?.totalIncome
                    : 0}
                  <Link to="/Todaysincome">
                    <span className="bg-[#F6C100] w-[23px] h-[23px] rounded-full flex justify-center items-center cursor-pointer">
                      <IoChevronForward style={{ color: "white" }} />{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-2">
              <Link to="/Invitelink">
                <button className="bg-[#38B6FF] w-[120px] h-[40px] text-white rounded-3xl">
                  Invite Now
                </button>
              </Link>
            </div>
            <div className="text-xl font-semibold mb-2">Recent Income</div>
            <div>
              {data?.slice(0, 15)?.map((rowData, rowIndex) => (
                <div
                  key={`row${rowIndex}`}
                  className="mb-2 pb-2 border-b border-gray-300"
                >
                  <div className="flex flex-wrap md:flex-nowrap justify-between w-11/12 mx-auto mb-2 pb-2 items-center">
                    <div className="flex gap-2 md:gap-4 items-center">
                      <div className="grid place-items-center text-center p-1.5 md:p-2 rounded-full bg-blue-900 text-white w-10 h-10 md:w-12 md:h-12">
                        <p className="text-xs md:text-base">
                          Lv{rowData?.level}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-base">
                          {/* {rowData?.createdAt} */}
                          Level-{rowData?.level} Commission
                        </p>
                        <p className="flex flex-col md:flex-row gap-2 md:gap-5 text-xs md:text-sm">
                          <span>
                            {rowData?.timestamps
                              ?.slice(0, 10)
                              ?.split("-")
                              .reverse()
                              .join("-")}{" "}
                            {addTimeToTimestamp(rowData?.timestamps, 5, 27)}
                          </span>
                          <span>
                            from{" "}
                            {rowData?.product?.description?.split(
                              "UserId"
                            )?.[1] || ""}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-xs md:text-base">
                      <p>+₹{rowData?.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: data?.length > 3 ? "80px" : "0" }}>
                .
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Inviteandearn;
