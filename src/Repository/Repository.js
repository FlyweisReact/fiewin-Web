/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { Login } from "../store/authSlice";
import { openPopup } from "../store/InviteSlice";

export const showNotification = ({ type = "success", message }) => {
  Store.addNotification({
    title: "",
    message,
    type,
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const getApi = async ({
  url,
  setResponse,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.get(`${process.env.React_App_Baseurl}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setResponse(res.data);
    additionalFunctions.forEach((func) => {
      if (typeof func === "function") {
        func(res);
      }
    });
  } catch (e) {
    console.log(e);
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const postApi = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.post(
      `${process.env.React_App_Baseurl}${url}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (res) {
      if (successMsg) {
        showNotification({ message: successMsg });
      }

      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func(res?.data);
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message || "Something went worng !";
    showNotification({ message: msg, type: "danger" });
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const edit_module = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.put(
      `${process.env.React_App_Baseurl}${url}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (res) {
      if (successMsg) {
        showNotification({ message: successMsg });
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func();
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message || "Something went worng !";
    showNotification({ message: msg, type: "danger" });
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const user_login = ({
  url,
  payload,
  setLoading,
  successMsg,
  errorMsg,
  navigate,
}) => {
  return async (dispatch) => {
    if (setLoading) {
      setLoading(true);
    }
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}${url}`,
        payload
      );
      if (res) {
        if (successMsg) {
          showNotification({ message: successMsg });
        }
        dispatch(Login(res?.data));
        dispatch(openPopup());
        navigate("/home");
      }
    } catch (e) {
      const msg = e?.response?.data?.message || "Something went worng !";
      if (errorMsg && e?.response?.data?.message === undefined) {
        showNotification({ message: errorMsg, type: "danger" });
      } else {
        showNotification({ message: msg, type: "danger" });
      }
    } finally {
      if (setLoading) {
        setLoading(false);
      }
    }
  };
};
