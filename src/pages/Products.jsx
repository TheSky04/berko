import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "../components/MenuBar";
import styles from "../styles/Products.module.css";
import stationary from "../assets/stationary.jpg";
import ProductCart from "../components/ProductCart";
import textile from "../assets/tekstil.jpg";
import packaging from "../assets/packaging.webp";

function Products() {
  const { t } = useTranslation();
  return (
    <div>
      <MenuBar menu={t("Home")} subMenu={t("Products")} />

      <div className="background">
        <div className={styles.productsTitle}>
          <p>{t("ProductsSubTitle")}</p>
          <h4>{t("ProductsMainTitle")}</h4>
        </div>

        <ProductCart
          img={stationary}
          title={t("Stationary")}
          text={t("ProductStationaryText")}
          to="/products/stationary"
        />

        <ProductCart
          img={textile}
          title={t("TextileConsumableProducts")}
          text={t("ProductTextileConsumableText")}
        />

        <ProductCart
          img={packaging}
          title={t("packagingMaterials")}
          text={t("ProductPackagingMaterialsText")}
        />
      </div>
    </div>
  );
}

export default Products;
