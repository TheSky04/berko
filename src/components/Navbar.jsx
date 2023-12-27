import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";
import styles from "../styles/Navbar.module.css";
import { configs } from "../config";
import { FiMail } from "react-icons/fi";
import {} from "react-icons/fa";
import { FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
  const { t } = useTranslation();

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
        <div className={styles.navRight}>
          <LanguageButtons />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
