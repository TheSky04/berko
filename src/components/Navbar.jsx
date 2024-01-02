import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";
import styles from "../styles/Navbar.module.css";
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
import { useState, useEffect } from "react";

function Navbar() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth < 1000 ? setIsMobile(true) : setIsMobile(false);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = () => {
    console.log("okey");
  };

  return (
    <>
      <div className={styles.navTop}>
        <div className={styles.navTopLeft}>
          <div className={styles.navTopLeftEmail}>
            <FiMail color="#fff" />
            <p>{configs.email}</p>
          </div>
          <div className={styles.navTopLeftAddress}>
            <FaMapMarkerAlt color="#fff" />
            <p>{configs.address} </p>
          </div>
        </div>
        <div className={styles.navTopCenter}>
          <div className={styles.navTopCenterSocial}>
            <Link to={configs.instagramAdress}>
              <FaInstagram
                size={40}
                color="#fff"
                className={styles.navTopCenterSocialInstagram}
              />
            </Link>
            <Link to={configs.facebookAdress}>
              <FaFacebook
                size={40}
                color="#fff"
                className={styles.navTopCenterSocialFacebook}
              />
            </Link>
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <img src={BerkoLogo} alt="berko logo" />
        </div>
        {!isMobile && (
          <div className={styles.navLeft}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              {t("Home")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              {t("About")}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              {t("Contact")}
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              {t("Products")}
            </NavLink>
            <NavLink
              to="/production"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              {t("Production")}
            </NavLink>
          </div>
        )}

        {!isMobile && (
          <div className={styles.navRight}>
            <LanguageButtons />
          </div>
        )}

        {isMobile && (
          <div className={styles.iconContainer}>
            <FaBars className={styles.menuIcon} onClick={handleMenuOpen} />
            <FaTimes className={styles.closeIcon} />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
