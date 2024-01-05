/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

import "react-circular-progressbar/dist/styles.css";

import styles from "./RadialColor.module.scss";

export default function RadialColor() {
  

  return (
    <div className={styles.ui}>
      <div     
        className={styles.progresscontainer}>
        <div 
            className={styles.progresscircle}>
          <div   
             className={styles.mask}>
            <div    
        
              className={styles.handle}></div>

            <div   
     
               className={styles.extraMask}>
              <ion-icon name="bulb-outline"></ion-icon>
            </div>
          </div>
          <div className={styles.conicfill}></div>
        </div>
        <div className={styles.percentagetext}>%</div>
      </div>
    </div>
  );
}
