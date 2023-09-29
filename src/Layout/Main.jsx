import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import HomeMain from "../Component/Main/HomeMain";
import Home from "../Component/Home/Home";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <HomeMain></HomeMain>
      <Footer></Footer>
    </div>
  );
};

export default Main;
