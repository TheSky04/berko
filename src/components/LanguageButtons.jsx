import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import TurkishFlag from "../assets/turkey-flag-icon.svg";
import UKFlag from "../assets/united-kingdom-flag-icon.svg";

function LanguageButtons() {
  const { t } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("tr")}>
        <TurkishFlag />
      </button>
      <button onClick={() => i18n.changeLanguage("en")}>
        <img src={UKFlag} />
      </button>
    </div>
  );
}

export default LanguageButtons;
