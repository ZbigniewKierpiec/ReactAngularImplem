import React, { useState } from "react";
import styles from "./Numbers.module.scss";
export default function Numbers() {
  const [number, setNumber] = useState(23);
  function handleClick(item) {
    setNumber((prevNumber) => (item === "+" ? prevNumber + 1 : prevNumber - 1));
  }
  return (
    <div className={styles.box}>
      <ion-icon
        onClick={() => handleClick("+")}
        name="chevron-up-outline"
      ></ion-icon>
      <span>{number}</span>

      <ion-icon
        onClick={() => handleClick("-")}
        name="chevron-down-outline"
      ></ion-icon>
    </div>
  );
}
