import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Whatsapp from "../components/Whatsapp";
import Music from "../components/Music";

function AppLayout({ isMobile }) {
  return (
    <div className="layout">
      <Navbar isMobile={isMobile} />
      <Outlet />
      <Footer />
      <Whatsapp />
      <Music />
    </div>
  );
}

export default AppLayout;
