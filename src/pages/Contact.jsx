import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return <div>{t("Contact")}</div>;
}

export default Contact;
