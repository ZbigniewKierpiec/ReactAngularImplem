/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./ColorMode.module.scss";
import ColorSlider from "./ColorSlider";
import "animate.css";
// eslint-disable-next-line no-unused-vars
export default function ColorMode({ palette }) {
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={`${styles.box} ${checked ? styles.active : ""}  ${
        palette
          ? "animate__animated animate__fadeInRight"
          : "animate__animated animate__fadeOut"
      }     `}
    >
      <div className={styles.left}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.right}>
        <div className={styles.sun}>
          <ion-icon name="sunny-outline"></ion-icon>
        </div>
        <ColorSlider handleCheckboxChange={handleCheckboxChange} />
        <div className={styles.moon}>
          <ion-icon name="moon-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
