import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import styles from "../styles/Home.module.css";

function Home() {
  const [imageNum, setImageNum] = useState(1);
  return (
    <div>
      <SimpleImageSlider
        width={configs.sliderWidth}
        height={configs.sliderHeight}
        images={configs.sliderImages}
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
