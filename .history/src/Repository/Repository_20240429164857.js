/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { Login } from "../store/authSlice";

export const showNotification = ({ type = "success", message }) => {
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
        Authorization: localStorage.getItem("token"),
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
  errorMsg,
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
          func();
        }
      });
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

export const edit_module = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
  errorMsg,
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
          Authorization: localStorage.getItem("token"),
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
    const msg = e?.response?.data || "Something went worng !";
    if (errorMsg && e?.response?.data === undefined) {
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
        navigate("/home");
      }
    } catch (e) {
      const msg = e?.response?.data || "Something went worng !";
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

// redux modules
// export const create_module_redux = ({
//   url,
//   payload,
//   setLoading,
//   additionalFunctions = [],
//   successMsg,
//   errorMsg,
//   dispatchFunc = [],
// }) => {
//   return async (dispatch) => {
//     if (setLoading) {
//       setLoading(true);
//     }
//     try {
//       const res = await axios.post(`${process.env.React_App_Baseurl}${url}`, payload, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//         },
//       });
//       if (res) {
//         if (successMsg) {
//           showMsg("", successMsg, "success");
//         }
//         dispatchFunc.forEach((func) => {
//           if (typeof func === "function") {
//             dispatch(func());
//           }
//         });
//         additionalFunctions.forEach((func) => {
//           if (typeof func === "function") {
//             func();
//           }
//         });
//       }
//     } catch (e) {
//       const msg = e?.response?.data?.message || "Something went worng !";
//       if (errorMsg && e?.response?.data?.message === undefined) {
//         showMsg("", errorMsg, "danger");
//       } else {
//         showMsg("", msg, "danger");
//       }
//     } finally {
//       if (setLoading) {
//         setLoading(false);
//       }
//     }
//   };
// };



// // Module with dispatch
// export const edit_module_redux = ({
//   url,
//   payload,
//   setLoading,
//   additionalFunctions = [],
//   successMsg,
//   errorMsg,
//   dispatchFunc = [],
// }) => {
//   return async (dispatch) => {
//     if (setLoading) {
//       setLoading(true);
//     }
//     try {
//       const res = await axios.put(`${Baseurl}${url}`, payload, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//         },
//       });
//       if (res) {
//         if (successMsg || res.data.msg) {
//           showMsg("", successMsg || res.data.msg, "success");
//         }
//         dispatchFunc.forEach((func) => {
//           if (typeof func === "function") {
//             dispatch(func());
//           }
//         });
//         additionalFunctions.forEach((func) => {
//           if (typeof func === "function") {
//             func();
//           }
//         });
//       }
//     } catch (e) {
//       const msg = e?.response?.data?.message || "Something went worng !";
//       if (errorMsg && e?.response?.data?.message === undefined) {
//         showMsg("", errorMsg, "danger");
//       } else {
//         showMsg("", msg, "danger");
//       }
//     } finally {
//       if (setLoading) {
//         setLoading(false);
//       }
//     }
//   };
// };

// export const remove_module_redux = ({
//   url,
//   setLoading,
//   additionalFunctions = [],
//   successMsg,
//   errorMsg,
//   dispatchFunc = [],
// }) => {
//   return async (dispatch) => {
//     if (setLoading) {
//       setLoading(true);
//     }
//     try {
//       const res = await axios.delete(`${Baseurl}${url}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//         },
//       });
//       if (res) {
//         if (successMsg) {
//           showMsg("", successMsg, "success");
//         }
//         dispatchFunc.forEach((func) => {
//           if (typeof func === "function") {
//             dispatch(func());
//           }
//         });
//         additionalFunctions.forEach((func) => {
//           if (typeof func === "function") {
//             func();
//           }
//         });
//       }
//     } catch (e) {
//       const msg = e?.response?.data?.message || "Something went worng !";
//       if (errorMsg && e?.response?.data?.message === undefined) {
//         showMsg("", errorMsg, "danger");
//       } else {
//         showMsg("", msg, "danger");
//       }
//     } finally {
//       if (setLoading) {
//         setLoading(false);
//       }
//     }
//   };
// };
