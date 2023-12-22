/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import styles from "./ColorMode.module.scss";
import ColorSlider from "./ColorSlider";
import "animate.css";
import { useTheme } from "../../Hooks/ThemeProvider";
// eslint-disable-next-line no-unused-vars
export default function ColorMode({ palette }) {
  const [checked, setChecked] = useState(true);

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode, toggleMode } = useTheme();
  const handleCheckboxChange = () => {
    setChecked(!checked);
    // setIsDarkMode(!isDarkMode);
           toggleMode();
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
        <div className={`${styles.sun}  ${isDarkMode ? styles.darkmode :''}  `}>
          <ion-icon name="sunny-outline"></ion-icon>
        
        </div>
        <ColorSlider handleCheckboxChange={handleCheckboxChange} />
        <div className={`${styles.moon} ${isDarkMode ? styles.darkmode :''}   `}>
          <ion-icon name="moon-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
