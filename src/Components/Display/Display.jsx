import React from "react";
import styles from "./Display.module.scss";
import "animate.css";
import { useItemContext } from "../../Hooks/ItemProvider";
import Panel from "./Panel/Panel";
const panels = [
  {
    id:1,
    name: "samsung tv",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id:2,
    name: "sony wf-tx1000",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id:3,
    name: "panasonic tr-100",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id:4,
    name: "philips hu12",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id:5,
    name: "wibble",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
];
export default function Display() {
  let active = true;
  return (
    <div
      className={`${styles.box}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.topLeftName}>
              <p>displays</p>
            </div>
            <div className={styles.scroll}>
             {panels.map((data)=>  <Panel key={data.id} data={data}  />  )}
            </div>
          </div>
          <div className={styles.topRight}></div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
