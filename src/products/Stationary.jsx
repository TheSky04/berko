import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ambalaj from "../assets/ambalaj.jpg";
import backgroundTree from "../assets/background-tree.jpg";
import nature from "../assets/nature.jpg";
import { configs } from "../config";
import { useState } from "react";

function Stationary({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  return (
    <div className="background">
      <SimpleImageSlider
        width="100%"
        height={isMobile ? "30vh" : "100vh"}
        images={[ambalaj, backgroundTree, nature]}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index) => setImageNum(index)}
        autoPlayDelay={configs.sliderDelay}
      />
    </div>
  );
}

export default Stationary;
