// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Shade.module.scss";

import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time

export default function Shade() {
  const nodeRef = useRef(null);
  // const [initialY, setInitialY] = useState(0);

 
  const [dragPosition, setDragPosition] = useState("down");
  const[number,setNumber]=useState(50)
  
  // const handleStart = (e, data) => {
  //   setInitialY(data.y);
  // };

  const handleDrag = (_, { deltaY }) => {
    if (deltaY < 0) {
      setDragPosition("up");
      // setNumber((prev) => Math.max(0, prev - 1));
     
    } else if (deltaY > 0) {
      setDragPosition("down");
     
    }

  
  
  };


  const handleDragStop = () => {
    // The drag operation is complete, you can capture the final number here
    console.log("Final Number:");
    console.log("Dragging Distance:", draggingDistance);
    
  };


  return (
    <div  className={styles.box}>
      <div className={styles.mask}>
        <Draggable
        
          nodeRef={nodeRef}
          axis="y"
          bounds={{ top: -195, bottom: -21 }}
          // onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleDragStop}
        >
          <div ref={nodeRef} className={styles.blind}>
            <div className={styles.info}>
              <span className={styles.text}>{number}</span>

              <span
                className={` ${styles.icon}   ${
                  dragPosition === "up" ? styles.down : styles.up
                }`}
              >
                <ion-icon name="chevron-up-outline"></ion-icon>
              </span>
            </div>
          </div>
        </Draggable>
        <div className={styles.blindBackground}></div>
      </div>
    </div>
  );
}
