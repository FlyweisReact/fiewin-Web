/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 30,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    CountDownSaver: (state, action) => {
      
      state.time = action.payload;
    },
  },
});

export const { CountDownSaver } = countSlice.actions;

export const countTime = (state) => state.count.time;

export default countSlice.reducer;
