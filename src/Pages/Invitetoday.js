import React from "react";
import { Link } from "react-router-dom";
import back from "../Assets/back.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
const Invitetoday = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-full followus-main bg-white md:w-[400px] flex flex-col">
          <div className="relative bg-[#FFB800] h-[60px] text-xl font-semibold text-white">
            <div className="flex justify-between items-center mt-4">
              <div className="w-[100px]">
              <Link to="/Inviteandearn">
                <img src={back} alt="" className="ml-2" />
              </Link>
              </div>
             
              <div className="text-center">Invite Today </div>
              <div className="w-[100px]"></div>
            </div>
          </div>
          <div className="p-3">
            <div>
              The total number of invites is{" "}
              <span className="text-[#FFB800]">141906</span>
            </div>
            <div className="mt-2">
              <table className="table-fixed border-slate-950 border">
                <thead>
                  <tr>
                    <th className="w-[150px] bg-[#FFF1CC] border-slate-950 border"></th>
                    <th className="w-[200px] bg-[#FFF1CC] border-slate-950 border">
                      {" "}
                      Lv1
                    </th>
                    <th className="w-[150px] bg-[#FFF1CC] border-slate-950 border">
                      Lv2
                    </th>
                    <th className="w-[150px] bg-[#FFF1CC] border-slate-950 border">
                      Lv3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-[150px] text-center  bg-[#FFF1CC] border-slate-950 border">
                      Number
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC] border-slate-950 border">
                      2196
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC] border-slate-950 border">
                      20378
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC] border-slate-950 border">
                      11385
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">Real time Statistics*</div>
            <div className="bg-[#FFB800] h-[38px] text-xl  text-white flex justify-between items-center pl-2 pr-2 mt-4">
              <div>All</div>

              <div>
                <RiArrowDropDownLine size={30} />
              </div>
            </div>
            <div className="">
              <table className="">
                <thead>
                  <tr>
                    <th className="w-[150px] bg-[#FFF1CC] border-b border-r border-slate-950">
                      User
                    </th>
                    <th className="w-[200px] bg-[#FFF1CC] border-b border-r border-slate-950">
                      {" "}
                      Level
                    </th>
                    <th className="w-[150px] bg-[#FFF1CC] border-b  border-slate-950">
                      Registration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-[150px] text-center  bg-[#FFF1CC]  border-r border-slate-950 ">
                      655245
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC] border-r border-slate-950 ">
                      Level 2
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]  border-slate-950">
                      22-03-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[150px] text-center  bg-[#FFF1CC] border-r border-slate-950 ">
                      655245
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC] border-r border-slate-950 ">
                      Level 1
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]   border-slate-950">
                      22-03-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[150px] text-center  bg-[#FFF1CC] border-r border-slate-950 ">
                      655245
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC] border-r border-slate-950 ">
                      Level 3
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]  border-slate-950">
                      22-03-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[150px] text-center  bg-[#FFF1CC]  border-r border-slate-950 ">
                      655245
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]  border-r border-slate-950 ">
                      Level 2
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]  border-slate-950">
                      22-03-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[150px] text-center  bg-[#FFF1CC]  border-r border-slate-950 ">
                      655245
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]  border-r border-slate-950 ">
                      Level 1
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]  border-slate-950">
                      22-03-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[150px] text-center  bg-[#FFF1CC]  border-r border-slate-950 ">
                      655245
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]  border-r border-slate-950 ">
                      Level 3
                    </td>
                    <td className="w-[150px] text-center bg-[#FFF1CC]   border-slate-950">
                      22-03-2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitetoday;
