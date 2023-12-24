import React from "react";
import BerkoLogo from "../assets/berkologo.png";
import { useTranslation } from "react-i18next";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaHome, FaPhone } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <img src={BerkoLogo} alt="Berko Logo"></img>
        <p className={styles.footerLeftText}>{t("FooterLeftText")}</p>
        <div className={styles.footerLeftIcons}>
          <a href="https://www.instagram.com/berkoambalaj/">
            <FaInstagram
              size={32}
              color="#fff"
              className={styles.footerIconHover}
            />
          </a>
          <a href="https://www.facebook.com/O.Bedir29">
            <FaFacebook
              size={32}
              color="#fff"
              className={styles.footerIconHover}
            />
          </a>
        </div>
      </div>
      <div className={styles.footerCenter}>
        <h2 className={styles.footerTitle}>{t("FooterTitle")}</h2>
        <ul>
          <li>
            <Link to="/packaging-materials" className={styles.footerCenterLink}>
              {t("PackagingMaterialsTitle")}
            </Link>
          </li>
          <li>
            <Link to="/textile-consumables" className={styles.footerCenterLink}>
              {t("TextileConsumablesTitle")}
            </Link>
          </li>
          <li>
            <Link to="/stationary" className={styles.footerCenterLink}>
              {t("StationaryTitle")}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerRight}>
        <h2 className={styles.footerTitle}>{t("ContactInformation")}</h2>
        <div className={styles.footerRightIcon}>
          <FaHome size={32} color="white" />
          <p>{t("Address")}</p>
        </div>
        <div className={styles.footerRightIcon}>
          <FaPhone size={32} color="white" />
          <div className={styles.footerRightPhoneNumbers}>
            <p>{t("PhoneNumber1")}</p>
            <p>{t("PhoneNumber2")}</p>
            <p>{t("PhoneNumber3")}</p>
          </div>
        </div>
        <div className={styles.footerRightIcon}>
          <MdOutlineMail size={32} color="white" />
          <p>{t("Email")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
