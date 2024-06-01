/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import InviteSlice from "./InviteSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    invite: InviteSlice,
  },
});
