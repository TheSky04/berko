import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import styles from "../styles/Home.module.css";
import ControlledAccordions from "../components/ControlledAccordions";

function Home() {
  const [imageNum, setImageNum] = useState(1);
  return (
    <div>
      <SimpleImageSlider
        width={configs.sliderWidth}
        height={configs.sliderHeight}
        images={configs.sliderImages}
        style={{ backgroundSize: "cover", margin: "50px 0" }}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
      <ControlledAccordions />
    </div>
  );
}

export default Home;
