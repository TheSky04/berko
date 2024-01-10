import React from "react";
import BerkoLogo from "../assets/berko-white-nobackground.png";
import { useTranslation } from "react-i18next";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaHome, FaPhone } from "react-icons/fa";
import { configs } from "../config";

function Footer() {
  const { t } = useTranslation();

  const iconStyle = {
    backgroundColor: "#000",
    width: "5rem",
    height: "5rem",
    borderRadius: "50%",
    padding: "1rem",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <img src={BerkoLogo} alt="Berko Logo"></img>
        <p className={styles.footerLeftText}>{t("FooterLeftText")}</p>
        <div className={styles.footerLeftIcons}>
          <Link to={configs.instagramAdress}>
            <FaInstagram
              style={iconStyle}
              size={32}
              color="#fff"
              className={styles.footerIconHover}
            />
          </Link>
          <Link to={configs.facebookAdress}>
            <FaFacebookF
              style={iconStyle}
              size={32}
              color="#fff"
              className={styles.footerIconHover}
            />
          </Link>
        </div>
      </div>
      <div className={styles.footerCenter}>
        <h2 className={styles.footerTitle}>{t("FooterTitle")}</h2>
        <ul>
          <li>
            <Link
              to="/products/stationary"
              className={styles.footerCenterLink}
              onClick={scrollToTop}
            >
              {t("StationaryTitle")}
            </Link>
          </li>
          <li>
            <Link
              to="/products/packaging-materials"
              className={styles.footerCenterLink}
              onClick={scrollToTop}
            >
              {t("PackagingMaterialsTitle")}
            </Link>
          </li>
          <li>
            <Link
              to="/products/textile-consumables"
              className={styles.footerCenterLink}
              onClick={scrollToTop}
            >
              {t("TextileConsumablesTitle")}
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
          <p>{configs.email2}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
