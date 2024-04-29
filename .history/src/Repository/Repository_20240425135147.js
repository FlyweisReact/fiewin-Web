/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

export const showNotification = ({ type, message }) => {
  Store.addNotification({
    title: "",
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

// axios -normal

// React-redux
export const get_module_redux = ({
  url,
  payload ,
  setLoading,
  additionalFunctions = [],
  successMsg,
  dispatchFunc = [],
  showMsg = false,
}) => {
  return async (dispatch) => {
    if (setLoading) {
      setLoading(true);
    }
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}/${url}`,
        payload
      );
      const data = res.data;
      if (res) {
        if (showMsg && successMsg) {
          showNotification({ type: "success", message: successMsg });
        }
        dispatchFunc.forEach((func) => {
          if (typeof func === "function") {
            dispatch(func(data));
          }
        });
        additionalFunctions.forEach((func) => {
          if (typeof func === "function") {
            func(data);
          }
        });
      }
    } catch (e) {
      const msg = e?.response?.data?.message || "Something went worng !";
      if (msg) {
        showNotification({ type: "danger", message: msg });
      }
    } finally {
      if (setLoading) {
        setLoading(false);
      }
    }
  };
};
