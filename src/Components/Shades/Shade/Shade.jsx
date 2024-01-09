// import React from "react";
import React, { useRef, useEffect , useState } from 'react';
import styles from "./Shade.module.scss";
import Draggable from 'react-draggable';
export default function Shade() {
  const [position, setPosition] = useState(50);
  const draggableRef = useRef(null);
  const handleDrag = (_, { y }) => {
    // Update the position based on the drag distance
    setPosition(y);
  };

  return (
   
<>
<div className={styles.box}>

  <div className={styles.blind}></div>

<div className={styles.blindBackground}></div>
</div>
   
</>

  );
}
