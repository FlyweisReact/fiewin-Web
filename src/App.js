/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Forgotpassword from "./Components/Forgotpassword";
import Home from "./Pages/Home";
import Inviteandearn from "./Pages/Inviteandearn";
import Wallet from "./Pages/Wallet";
import Profile from "./Pages/Profile";
import Finicialdetail from "./Pages/finicialdetail";
import Download from "./Pages/Download";
import Followus from "./Pages/Followus";
import Support from "./Pages/Support";
import Complaint from "./Pages/Complaint";
import Orderrecord from "./Pages/Orderrecord";
import Ranking from "./Pages/Ranking";
import Privilege from "./Pages/Privilege";
import Invitelink from "./Pages/Invitelink";
import Reward from "./Pages/Reward";
import Checkin from "./Pages/Checkin";
import Help from "./Pages/Help";
import Withdraw from "./Pages/Withdraw";
import Circle from "./Pages/Games/Circle";
import Headandtail from "./Pages/Games/Headandtail";
import Invitetoday from "./Pages/Invitetoday";
import Todaysincome from "./Pages/Todaysincome";
import Recharge from "./Pages/Recharge";
import Awardplains from "./Pages/Awardplains";
import { ReactNotifications } from "react-notifications-component";
import Thanks from "./Pages/Thanks";
import AgentWithdraw from "./Pages/AgentWithdraw";
import Refer from "./Components/Refer";
import "./CSS/style.css";
import "./CSS/MediaQuery.css";
import PaymentSuccess from "./Pages/PaymentSuccess";
import KnowMore from "./Pages/KnowMore";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import TermCondition from "./Pages/TermCondition";
import Refund from "./Pages/Refund";
import RechargeRecord from "./Pages/RechargeRecords";
import WithdrawRecord from "./Pages/WithdrawRecord";
import AgentWithdrawRecord from "./Pages/AgentWithdrawRecord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/Forgotpassword",
    element: <Forgotpassword />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Inviteandearn",
    element: <Inviteandearn />,
  },
  {
    path: "/Invitetoday",
    element: <Invitetoday />,
  },
  {
    path: "/Todaysincome",
    element: <Todaysincome />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/Awardplains",
    element: <Awardplains />,
  },
  {
    path: "/Recharge",
    element: <Recharge />,
  },
  {
    path: "/Recharge/record",
    element: <RechargeRecord />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/finicialdetail",
    element: <Finicialdetail />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/Followus",
    element: <Followus />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
  {
    path: "/Complaint",
    element: <Complaint />,
  },
  {
    path: "/Orderrecord",
    element: <Orderrecord />,
  },
  {
    path: "/Ranking",
    element: <Ranking />,
  },
  {
    path: "/Privilege",
    element: <Privilege />,
  },
  {
    path: "/Invitelink",
    element: <Invitelink />,
  },
  {
    path: "/Reward",
    element: <Reward />,
  },
  {
    path: "/Checkin",
    element: <Checkin />,
  },
  {
    path: "/Help",
    element: <Help />,
  },

  {
    path: "/Withdraw",
    element: <Withdraw />,
  },
  {
    path: "/agent-withdraw/record",
    element: <AgentWithdrawRecord />,
  },
  {
    path: "/Withdraw/record",
    element: <WithdrawRecord />,
  },
  {
    path: "/Circle",
    element: <Circle />,
  },
  {
    path: "/Headandtail",
    element: <Headandtail />,
  },
  {
    path: "/thanks/:id",
    element: <Thanks />,
  },
  {
    path: "/agent-withdraw",
    element: <AgentWithdraw />,
  },
  {
    path: "/:id/refer",
    element: <Refer />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "/know-more",
    element: <KnowMore />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },

  {
    path: "/terms-condition",
    element: <TermCondition />,
  },
  {
    path: "/refund",
    element: <Refund />,
  },
]);

function App() {
  return (
    <div>
      <ReactNotifications />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
