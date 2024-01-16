import React from "react";
import i18n from "../i18n";
import TurkishFlag from "../assets/turkey-flag-icon.svg";
import UKFlag from "../assets/united-kingdom-flag-icon.svg";
import styles from "../styles/LanguageButtons.module.css";
import RussianFlag from "../assets/russia-flag-icon.svg";
import GermanyFlag from "../assets/germany-flag-icon.svg";
import ArabicFlag from "../assets/saudi-arabia-flag-icon.svg";

function LanguageButtons() {
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
      <img
        src={GermanyFlag}
        alt="Germany Flag"
        onClick={() => i18n.changeLanguage("de")}
      ></img>
      <img
        src={RussianFlag}
        alt="Russian Flag"
        onClick={() => i18n.changeLanguage("ru")}
      ></img>
      <img
        src={ArabicFlag}
        alt="Arabic Flag"
        onClick={() => i18n.changeLanguage("ar")}
      ></img>
    </div>
  );
}

export default LanguageButtons;
