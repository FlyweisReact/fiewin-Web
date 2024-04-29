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
    payload = {} ,
    setLoading,
    additionalFunctions = [],
    successMsg,
    errorMsg,
    dispatchFunc = [],
    showMsg = false 
  }) => {
    return async (dispatch) => {
      if (setLoading) {
        setLoading(true);
      }
      try {
        const res = await axios.get(`${process.env.React_App_Baseurl}${url}`, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        if (res) {
          if (showMsg && successMsg) {
            showMsg("", successMsg, "success");
          }
          dispatchFunc.forEach((func) => {
            if (typeof func === "function") {
              dispatch(func(res));
            }
          });
          additionalFunctions.forEach((func) => {
            if (typeof func === "function") {
              func();
            }
          });
        }
      } catch (e) {
        const msg = e?.response?.data?.message || "Something went worng !";
        if (errorMsg && e?.response?.data?.message === undefined) {
          showMsg("", errorMsg, "danger");
        } else {
          showMsg("", msg, "danger");
        }
      } finally {
        if (setLoading) {
          setLoading(false);
        }
      }
    };
  };