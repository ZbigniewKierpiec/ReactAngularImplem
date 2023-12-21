/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ColorSlider.module.scss";
export default function ColorSlider({handleCheckboxChange , checked}) {


  return (
    <>
      <input   checked={checked}
        onChange={handleCheckboxChange} type="checkbox" id="toggle-slider" />
      <label htmlFor="toggle-slider">On/Off</label>
    </>
  );
}
