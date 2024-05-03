/** @format */

import { showNotification } from "../Repository/Repository";
import { LOGOUT } from "../store/authSlice";

export const signOut = (navigate) => {
  return async (dispatch) => {
    dispatch(LOGOUT());
    navigate("/");
    showNotification({ message: "Logged Out Successfully" });
  };
};
