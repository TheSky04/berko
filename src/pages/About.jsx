import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "../components/MenuBar";

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <MenuBar menu={t("Home")} subMenu={t("About")} />
    </div>
  );
}

export default About;
