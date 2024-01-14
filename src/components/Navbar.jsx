import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";
import { configs } from "../config";
import { FiMail } from "react-icons/fi";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import BerkoLogo from "../assets/berko-white-nobackground.png";

function Navbar({ isMobile }) {
  const { t } = useTranslation();

  const [navOpen, setNavOpen] = useState("");

  const handleMenuToggle = function (scroll = true) {
    navOpen === "" ? setNavOpen("nav-open") : setNavOpen("");
    if (scroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`${navOpen} header`}>
      <nav className="nav">
        <div className="navLogo">
          <img src={BerkoLogo} alt="berko logo" />
        </div>
        <div className="navLeft">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("Home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("About")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("Contact")}
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("Products")}
          </NavLink>
          <NavLink
            to="/survey"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("Survey")}
          </NavLink>
          {isMobile && <LanguageButtons />}
        </div>

        <div className="navRight">
          <LanguageButtons />
        </div>
        <div className="iconContainer" onClick={() => handleMenuToggle(false)}>
          <FaBars className="menuIcon" />
          <FaTimes className="closeIcon" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
