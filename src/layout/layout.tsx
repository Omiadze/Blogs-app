import React from "react";
import { NavMenu } from "./header/nav";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
