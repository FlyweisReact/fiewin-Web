/** @format */

import { configureStore } from "@reduxjs/toolkit";
import quiz from "./quizSlice";
import common from "./commonSlice";
import user from "./userSlice";
import authSlice from "./authSlice";


export const store = configureStore({
  reducer: {

    auth: authSlice,

  },
});
