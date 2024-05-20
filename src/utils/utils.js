/** @format */
import { LOGOUT } from "../store/authSlice";

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


