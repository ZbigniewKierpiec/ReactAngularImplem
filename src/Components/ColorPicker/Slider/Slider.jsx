import React, { useState } from 'react'
import styles from './Slider.module.scss';
export default function Slider({handleSlider,sliderValue}) {
  
  return (
    <div className={styles.container}>
    <p>brightness</p>
 <div className={styles.rangeslider}>
      <input
      onChange={(e)=>handleSlider(e)}
      className={styles.rangesliderrange}
        type="range"
        value={sliderValue}
        min="0"
        max="100"
      />



    </div>
    </div>
   
  )
}
