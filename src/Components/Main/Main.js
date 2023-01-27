import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div
        data-tf-popover="B9mOgUOl"
        data-tf-custom-icon="https://avatars.githubusercontent.com/u/109535601?v=4"
        data-tf-button-color="#F0E5C1"
        data-tf-button-text="Launch me"
        data-tf-iframe-props="title=Product Review Form Template (copy)"
        data-tf-medium="snippet"
        // style="all:unset;"
      ></div>
      <script src="//embed.typeform.com/next/embed.js"></script>
      <Footer></Footer>
    </div>
  );
};

export default Main;
