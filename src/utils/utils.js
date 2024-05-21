/** @format */
import { LOGOUT } from "../store/authSlice";
import tiger from "../Assets/Games/tiger.svg";
import camel from "../Assets/Games/camel.svg";
import elephant from "../Assets/Games/elephant.svg";
import king from "../Assets/Games/king.svg";

export const signOut = (navigate) => {
  return async (dispatch) => {
    dispatch(LOGOUT());
    navigate("/");
  };
};

export const countDown_func = ({ setValue, setIsActive }) => {
  const timer = setInterval(() => {
    setValue((prevCountdown) => {
      if (prevCountdown <= 1) {
        setIsActive(true);
        return 30;
      }
      if (prevCountdown <= 8) {
        setIsActive(false);
      }
      return prevCountdown - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
};

export const formatCountDown = (count) => {
  const minutes = Math.floor(count / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (count % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

// Check Color
export const getVelocityColor = (color) => {
  if (color === "yellow") {
    return (
      <span
        className="w-[47px] h-[27px] bg-[#FFD958] rounded"
        style={{ display: "block" }}
      ></span>
    );
  } else if (color === "green") {
    return (
      <span
        className="w-[47px] h-[27px] bg-[#1D9377] rounded d-block"
        style={{ display: "block" }}
      ></span>
    );
  } else if (color === "red") {
    return (
      <span
        className="w-[47px] h-[27px] bg-[#FF000B] rounded d-block"
        style={{ display: "block" }}
      ></span>
    );
  } else {
    return (
      <span
        className="w-[47px] h-[27px] bg-[#fff] rounded d-block"
        style={{ display: "block" }}
      ></span>
    );
  }
};

export const getVelocityAnimal = (animal) => {
  if (animal === "lion") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={tiger} alt="" />
      </span>
    );
  } else if (animal === "elephant") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={elephant} alt="" />
      </span>
    );
  } else if (animal === "crown") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={king} alt="" />
      </span>
    );
  } else if (animal === "camel") {
    return (
      <span className="w-[47px] h-[27px] bg-[#D9D9D9] flex justify-center rounded">
        <img src={camel} alt="" />
      </span>
    );
  }
};


export const copyText = ({ textToCopy, setCopied }) => {
  navigator.clipboard.writeText(textToCopy);
  setCopied(true)
  setTimeout(() => {
    setCopied(false);
  }, 1000);
};