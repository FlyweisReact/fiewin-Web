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

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjIwZTkwMmQwYjE2NjU3MmRhOTYzNDAiLCJpYXQiOjE3MTQwMzMzNjcsImV4cCI6MTcxNDA3NjU2N30.tv1KynBLezYPeXfP0uM7_fAVISjRiCQsMeXt-WYwkJA";

