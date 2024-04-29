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

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjIwZTkwMmQwYjE2NjU3MmRhOTYzNDAiLCJpYXQiOjE3MTQwMzMzNjcsImV4cCI6MTcxNDA3NjU2N30.tv1KynBLezYPeXfP0uM7_fAVISjRiCQsMeXt-WYwkJA";

// axios -normal
export const get_module = async ({
  url,
  setLoading,
  additionalFunctions = [],
  setResponse,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.get(`${process.env.React_App_Baseurl}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      setResponse(res.data);
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func();
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



// React-redux
export const get_module_redux = ({
  url,
  payload,
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
