import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "../components/MenuBar";

function Production() {
  const { t } = useTranslation();

  return (
    <div>
      <MenuBar menu={t("Home")} subMenu={t("Production")} />
    </div>
  );
}

export default Production;
