import React, { useState } from "react";
import styles from "./Footer.module.scss";
import VolumeSlider from "../Volume Slider/VolumeSlider";
import ColorMode from "../Color Mode/ColorMode";
export default function Footer() {
  const [palette, setPalette] = useState(false);

  function handlePaletteClick() {
    setPalette(!palette);
 
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.volume}>
        <span>
          <ion-icon name="volume-medium-outline"></ion-icon>
        </span>
        <span>
          <ion-icon name="volume-low-outline"></ion-icon>
        </span>
        <div className={styles.slider}>
          <VolumeSlider />
        </div>
        <span>
          <ion-icon name="volume-high-outline"></ion-icon>
        </span>
      </div>
      <span onClick={handlePaletteClick} className={styles.color}>
        <ion-icon name="color-palette-outline"></ion-icon>
      </span>
      <ColorMode palette={palette} />
    </footer>
  );
}
