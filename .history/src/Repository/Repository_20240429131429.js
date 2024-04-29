/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

export const showNotification = ({ type = 'success', message }) => {
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

// axios
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
    const res = await axios.get(`${process.env.React_App_Baseurl}${url}`);
    setResponse(res.data);
    additionalFunctions.forEach((func) => {
      if (typeof func === "function") {
        func();
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
        showMsg("", successMsg, "success");
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

// Login Api
export const user_login = async ({
  url,
  payload,
  setLoading,
  successMsg,
  errorMsg,
}) => {
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
        showNotification({message : successMsg});
      }
      console.log(res)
    }
  } catch (e) {
    const msg = e?.response?.data?.message || "Something went worng !";
    if (errorMsg && e?.response?.data?.message === undefined) {
      showNotification("", errorMsg, "danger");
    } else {
      showNotification("", msg, "danger");
    }
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

// export const editApi = async ({
//   url,
//   payload,
//   setLoading,
//   additionalFunctions = [],
//   successMsg,
//   errorMsg,
// }) => {
//   if (setLoading) {
//     setLoading(true);
//   }
//   try {
//     const res = await axios.put(`${Baseurl}${url}`, payload, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//       },
//     });
//     if (res) {
//       if (successMsg) {
//         showMsg("", successMsg, "success");
//       }
//       additionalFunctions.forEach((func) => {
//         if (typeof func === "function") {
//           func();
//         }
//       });
//     }
//   } catch (e) {
//     const msg = e?.response?.data?.message || "Something went worng !";
//     if (errorMsg && e?.response?.data?.message === undefined) {
//       showMsg("", errorMsg, "danger");
//     } else {
//       showMsg("", msg, "danger");
//     }
//   } finally {
//     if (setLoading) {
//       setLoading(false);
//     }
//   }
// };

// export const deleteApi = async ({
//   url,
//   setLoading,
//   successMsg,
//   additionalFunctions = [],
// }) => {
//   if (setLoading) {
//     setLoading(true);
//   }
//   try {
//     const res = await axios.delete(`${Baseurl}${url}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//       },
//     });
//     if (res) {
//       if (successMsg) {
//         showMsg("", successMsg, "success");
//       }
//       additionalFunctions.forEach((func) => {
//         if (typeof func === "function") {
//           func();
//         }
//       });
//     }
//   } catch (e) {
//     console.log(e);
//     const msg = e?.response?.data?.message || "Something went wrong !";
//     showMsg("", msg, "danger");
//   } finally {
//     if (setLoading) {
//       setLoading(false);
//     }
//   }
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
//       const res = await axios.post(`${Baseurl}${url}`, payload, {
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
