/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./Picker.module.scss";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";

gsap.registerPlugin(Draggable);
// eslint-disable-next-line no-unused-vars
export default function Picker({selectedValue}) {

  const logRef = useRef(null);
  const spinnerRef = useRef(null);
  const smoleRef = useRef(null);
  const [rotation, setRotation] = useState(0);


  const [colorStops, setColorStops] = useState([
    { color: "red", position: 0 },
    { color: "red", position: 51 },
    { color: "yellow", position: 51 },
    { color: "yellow", position: 102 },
    { color: "lime", position: 102 },
    { color: "lime", position: 153 },
    { color: "aqua", position: 153 },
    { color: "aqua", position: 204 },
    { color: "blue", position: 204 },
    { color: "blue", position: 255 },
    { color: "magenta", position: 255 },
    { color: "magenta", position: 306 },
    { color: "red", position: 306 },
    { color: "red", position: 360 },
  ]);




  useEffect(()=>{
    console.log(selectedValue)
    const calculateBackgroundColor = () => {
      // Ensure currentRotation is positive and within the range [0, 360)
    //   const rotationInDegrees = (currentRotation % 360 + 360 + 90) % 360;
      
    //   const colorStop = colorStops.find((stop) => rotationInDegrees <= stop.position);
    
    //   return colorStop ? colorStop.color : colorStops[0].color;
  

       // Ensure currentRotation is positive and within the range [0, 360)
//   const rotationInDegrees = (rotation % 360 + 360 + 90) % 360;
  const rotationInDegrees = (rotation % 360 + 360) % 360;
  // Map the rotation angle to a hue value within the range [0, 360)
  const hue = rotationInDegrees;

  // Set the saturation and lightness values (you can adjust these as needed)
  const saturation = 100; // Example value
  const lightness = 50; // Example value

  // Create the HSL color string
  const hslColor = `hsl(${hue}, ${saturation}%, ${selectedValue}%)`;

  return hslColor;




    };

    
  
    const backgroundColor = calculateBackgroundColor();

    // console.log("backgroundColor:", backgroundColor);
  
    // Update the background color using the ref
    if (smoleRef.current) {
      smoleRef.current.style.color = backgroundColor;
      smoleRef.current.style.boxShadow = `0px 0px 15px 3px ${backgroundColor}`;


      // style={{ background: `conic-gradient(${generateConicGradient()})` }}
    

    }

  },[rotation,colorStops,selectedValue])


  useEffect(() => {
    // const log = logRef.current;
    const spinner = spinnerRef.current;

    // gsap.set(spinner, { transformOrigin: "center" });

    gsap.set(spinner, { transformOrigin: "50% 100%" });
    const draggable = Draggable.create(spinner, {
      type: "rotation",
      inertia: true,
      onDrag: updateRotation,
      onThrowUpdate: updateRotation,
    });

    function updateRotation() {
      const newRotation = (this.rotation % 360 + 360) % 360;
    //   setRotation(this.rotation.toFixed(1));
      setRotation(newRotation.toFixed(1));
    //   const newRotation = this.rotation % 360;
    //   log.innerHTML = rotation;
     
    }
  
    // Clean up the Draggable instance when the component unmounts
    return () => {
      draggable[0].kill();
    };
  }, []); 


  return (
    <div className={styles.container}>
      {/* <div className={styles.log}>
        <span>{rotation}</span>
      </div> */}
      <div className={styles.box}>
      <div className={styles.clockface}>
        <div
          ref={spinnerRef}
          style={{ transform: "translate(0, -50%)" }}
          className={`${styles.secondshand}  ${styles.hand}`}
        ></div>
        <div  className={styles.mask}>
        <div ref={smoleRef}    className={styles.smole}>
        <ion-icon name="bulb-outline"></ion-icon>
        </div>
      
        </div>
      </div>

      </div>
    
    </div>
  );
}
