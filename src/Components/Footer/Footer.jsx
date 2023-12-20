import React from "react";
import styles from "./Footer.module.scss";
import VolumeSlider from "../Volume Slider/VolumeSlider";
export default function Footer() {
  return <footer className={styles.footer}>
<div className={styles.volume}>
  <span><ion-icon name="volume-medium-outline"></ion-icon></span>
  <span><ion-icon name="volume-low-outline"></ion-icon></span>
  <div className={styles.slider}>
    <VolumeSlider/>
  </div>
  <span><ion-icon name="volume-high-outline"></ion-icon></span>
</div>
   <span className={styles.color}>
   <ion-icon name="color-palette-outline"></ion-icon>
   </span>
  </footer>;
}
