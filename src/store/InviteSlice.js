/** @format */

import { createSlice } from "@reduxjs/toolkit";

const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    popup: true,
  },
  reducers: {
    openPopup: (state) => {
      state.popup = true;
    },
    closePopup: (state) => {
      state.popup = false;
    },
  },
});

export const { openPopup, closePopup } = inviteSlice.actions;

export const showPopup = (state) => state.invite.popup;

export default inviteSlice.reducer;
