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
import BerkoLogo from "../assets/berkologo.png";

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
      {/* <div className="navTop">
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
      </div> */}
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
