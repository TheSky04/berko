import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "../components/MenuBar";

function Products() {
  const { t } = useTranslation();
  return (
    <div>
      <MenuBar menu={t("Home")} subMenu={t("Products")} />
    </div>
  );
}

export default Products;
