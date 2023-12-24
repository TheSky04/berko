import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-700 text-slate-100 flex align-center justify-between w-full p-5">
      <div className="flex gap-2 font-semibold">
        <NavLink to="/home">{t("Home")}</NavLink>
        <NavLink to="/about">{t("About")}</NavLink>
        <NavLink to="/communication">{t("Communication")}</NavLink>
        <NavLink to="/products">{t("Products")}</NavLink>
        <NavLink to="/production">{t("Production")}</NavLink>
      </div>
      <div className="flex align-center justify-center">
        <LanguageButtons />
      </div>
    </div>
  );
}

export default Navbar;
