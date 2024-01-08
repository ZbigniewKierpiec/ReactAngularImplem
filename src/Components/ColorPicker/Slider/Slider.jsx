import React, { useState } from 'react'
import styles from './Slider.module.scss';
export default function Slider({handleSliderMouseDown, handleSliderMouseUp,sliderValue , handleSlider }) {
  
  return (
    <div className={styles.container}>
    <p>brightness</p>
 <div className={styles.rangeslider}>
 <label style={{ width: `${sliderValue}%` }}    className={styles.zee} htmlFor="slider"></label>
      <input
       onMouseDown={handleSliderMouseDown}
        onMouseUp={handleSliderMouseUp}
      onChange={(e)=>handleSlider(e)}
      className={styles.rangesliderrange}
        type="range"
        value={sliderValue}
        min="0"
        max="100"
        id='slider'
      />



    </div>
    </div>
   
  )
}
