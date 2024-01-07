import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import styles from "../styles/Location.module.css";
import { useTranslation } from "react-i18next";
import { configs } from "../config";

function Location() {
  const { t } = useTranslation();

  return (
    <div className={styles.locationContainer}>
      <div className={styles.mapTitle}>
        <p>{t("mapText")}</p>
        <h4>{t("mapTitle")}</h4>
      </div>

      <div style={{ height: "60dvh" }}>
        <MapContainer
          center={configs.position}
          zoom={20}
          scrollWheelZoom={true}
          style={{ height: "100%" }}
          autoPan={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={configs.position}>
            <Popup>{t("WeAreHereText")}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Location;
