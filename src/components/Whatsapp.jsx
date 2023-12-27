import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Whatsapp.module.css";
import { configs } from "../config";
import { Link } from "react-router-dom";

function Whatsapp() {
  const whatsappUrl = `https://wa.me/${configs.whatsappNumber}`;

  return (
    <Link to={whatsappUrl} className={styles.whatsapp}>
      <FaWhatsapp size={50} color="#fff" className={styles.footerIconHover} />
    </Link>
  );
}

export default Whatsapp;
