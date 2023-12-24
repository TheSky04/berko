import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const { t } = useTranslation();

  return (
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
  );
}

export default Navbar;
