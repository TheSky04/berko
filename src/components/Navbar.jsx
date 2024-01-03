import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";
import { configs } from "../config";
import { FiMail } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import BerkoLogo from "../assets/berkologo.png";

function Navbar() {
  const { t } = useTranslation();

  const headerEl = document.querySelector(".header");

  const handleMenuOpen = function () {
    headerEl.classList.toggle("nav-open");
    console.log(headerEl);
  };

  return (
    <header className="header">
      <div className="navTop">
        <div className="navTopLeft">
          <div className="navTopLeftEmail">
            <FiMail color="#fff" />
            <p>{configs.email}</p>
          </div>
          <div className="navTopLeftAddress">
            <FaMapMarkerAlt color="#fff" />
            <p>{configs.address} </p>
          </div>
        </div>
        <div className="navTopCenter">
          <div className="navTopCenterSocial">
            <Link to={configs.instagramAdress}>
              <FaInstagram
                size={40}
                color="#fff"
                className="navTopCenterSocialInstagram"
              />
            </Link>
            <Link to={configs.facebookAdress}>
              <FaFacebook
                size={40}
                color="#fff"
                className="navTopCenterSocialFacebook"
              />
            </Link>
          </div>
        </div>
      </div>
      <nav className="nav">
        <div className="navLogo">
          <img src={BerkoLogo} alt="berko logo" />
        </div>
        <div className="navLeft">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
          >
            {t("Home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
          >
            {t("About")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
          >
            {t("Contact")}
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
          >
            {t("Products")}
          </NavLink>
          <NavLink
            to="/production"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
          >
            {t("Production")}
          </NavLink>
        </div>

        <div className="navRight">
          <LanguageButtons />
        </div>
        <div className="iconContainer" onClick={handleMenuOpen}>
          <FaBars className="menuIcon" />
          <FaTimes className="closeIcon" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
