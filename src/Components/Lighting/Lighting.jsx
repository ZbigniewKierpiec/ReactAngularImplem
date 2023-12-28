import React from "react";
import { useItemContext } from "../../Hooks/ItemProvider";
import styles from "./Lighting.module.scss";
export default function Lighting() {
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
