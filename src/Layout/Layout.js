import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{Outlet}</main>
      <Footer />
    </div>
  );
};

export default Layout;
