import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import TurkishFlag from "../assets/turkey-flag-icon.svg";
import UKFlag from "../assets/united-kingdom-flag-icon.svg";
import styles from "../styles/LanguageButtons.module.css";

function LanguageButtons() {
  const { t } = useTranslation();

  return (
    <div className={styles.languageButtons}>
      <img
        src={TurkishFlag}
        alt="Turkish Flag"
        onClick={() => i18n.changeLanguage("tr")}
      ></img>
      <img
        src={UKFlag}
        alt="Turkish Flag"
        onClick={() => i18n.changeLanguage("en")}
      ></img>
    </div>
  );
}

export default LanguageButtons;
