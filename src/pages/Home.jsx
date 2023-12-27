import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { sliderConfigs } from "../config";
import styles from "../styles/Home.module.css";

function Home() {
  const [imageNum, setImageNum] = useState(1);
  return (
    <div>
      <SimpleImageSlider
        width={sliderConfigs.width}
        height={sliderConfigs.height}
        images={sliderConfigs.sliderImages}
        style={{ backgroundSize: "cover" }}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
    </div>
  );
}

export default Home;
