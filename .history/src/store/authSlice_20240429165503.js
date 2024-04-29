/** @format */

import { createSlice } from "@reduxjs/toolkit";

const savedData = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: savedData ? true : false,
  },
  reducers: {
    Login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { Login, LOGOUT } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
