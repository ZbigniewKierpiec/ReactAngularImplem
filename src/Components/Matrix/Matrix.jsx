import React from "react";
import styles from "./Matrix.module.scss";
import { useItemContext } from "../../Hooks/ItemProvider";
export default function Matrix() {
  const { clickedItem } = useItemContext();
  let active = true;
  return (
    <div
      className={`${styles.box}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      {clickedItem}
    </div>
  );
}
