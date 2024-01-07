import React from "react";
import styles from "../styles/ProductCart.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductCart({ img, title, text, to }) {
  const { t } = useTranslation();
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <img src={img} alt="berko produce stationary products" />
        <div className={styles.productCartContent}>
          <h4>{title}</h4>
          <p>{text}</p>
          <Link to={to}>{t("Discover")}</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
