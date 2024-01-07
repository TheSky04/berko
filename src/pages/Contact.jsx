import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "../components/MenuBar";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";

function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <MenuBar menu={t("Home")} subMenu={t("Contact")} />
      <div className="background">
        <ContactForm img={false} />
      </div>
      <Location />
    </div>
  );
}

export default Contact;
