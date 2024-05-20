/** @format */

import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./quizSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    count: countSlice,
  },
});
