import React from "react";
import recycle from "../../src/assets/recycle.jpg";
import styles from "../styles/MenuBar.module.css";
import { Link } from "react-router-dom";

function MenuBar({ menu = "Home", subMenu = "Contact" }) {
  return (
    <div className={styles.menuBar}>
      <div className={styles.menuTitle}>
        <h4>{subMenu}</h4>
        <p className={styles.menuTitleText}>
          <Link to={`/`}>{menu}</Link> &rarr; {subMenu}
        </p>
      </div>
    </div>
  );
}

export default MenuBar;
