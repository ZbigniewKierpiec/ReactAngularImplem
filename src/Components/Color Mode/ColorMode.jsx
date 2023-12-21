import React, { useState } from "react";
import styles from "./ColorMode.module.scss";
import ColorSlider from "./ColorSlider";

export default function ColorMode() {
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={`${styles.box} ${checked ? styles.active : ""}`}>
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
