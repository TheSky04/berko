import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Whatsapp from "../components/Whatsapp";

function AppLayout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default AppLayout;
