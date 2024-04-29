import logo from "../Assets/FieWinlogo.svg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";


const Login = () => {
  const [ ] = useSta

  return (
    <div className="bg-slate-100 h-[100vh] flex justify-center ">
      <div className="grid place-items-center">
        <div className="lg:w-[500px] lg:h-[700px] bg-white bg-height">
          <div className="bg-[#FFB800] h-[80px] flex justify-center items-center text-xl font-semibold">
            Login
          </div>

          <div className="flex justify-center mt-10">
            <img src={logo} alt="logo" />
          </div>

          <form>
            <div className="flex flex-col gap-5 items-center mt-10">
              <div className="relative rounded">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                    <IoPhonePortraitOutline style={{ color: "gray" }} />
                  </span>
                </div>

                <input
                  type="tel"
                  className=" placeholder: ml-2 block input-css  lg:w-[430px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="relative rounded">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                    <CiLock style={{ color: "gray" }} />
                  </span>
                </div>

                <input
                  type="tel"
                  className=" placeholder: ml-2 block input-css lg:w-[430px] h-[48px] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2   sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>

              <div className="mt-10">
                <Link to="/home">
                  <button className="bg-[#FFB800] rounded-xl input-css lg:w-[430px] h-[48px] text-white font-semibold">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </form>


          <div className="mt-5 flex justify-center gap-1">
            <Link to="/signup">
              <button className="text-[#FFB800] rounded-xl w-[210px] h-[48px] border-2 btn-btn">
                Create an Account
              </button>
            </Link>
            <Link to="forgotpassword">
              <button className="text-[#FFB800] rounded-xl w-[210px] h-[48px] border-2  btn-btn">
                Forgot Password?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
