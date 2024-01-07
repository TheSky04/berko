import React from "react";
import styles from "../styles/ProductCart.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductCart({ img, title, text, to }) {
  const { t } = useTranslation();
  return (
    <div className={styles.productCardContainer}>
      <Link className={styles.productCard} to={to}>
        <img src={img} alt="berko produce stationary products" />
        <div className={styles.productCartContent}>
          <h4>{title}</h4>
          <p>{text}</p>
          <p className={styles.discover}>{t("Discover")}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCart;
