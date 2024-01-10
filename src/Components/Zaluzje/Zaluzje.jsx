// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Shades.module.scss";

import { gsap, Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default function Zaluzje(props ) {
  const { gridColumn, gridRow } = props;
  const [direction, setDirection] = useState("down");
  const [number, setNumber] = useState(100);
  const app = useRef(null);



  useEffect(() => {
    gsap.registerPlugin(Draggable);
    let startX, startY;
    const draggableInstance = Draggable.create(app.current, {
      type: "y",
      bounds: { top: 0 },
      throwProps: true,
      onPress: function () {
        startX = this.x;
        startY = this.y;
      },
      onDrag: updateDirection,
    });

    function updateDirection() {
      const xChange = this.x - startX;
      const yChange = this.y - startY;
      const ratio = Math.abs(xChange / yChange);
      const newDirection = [];

      if (ratio > 0.25) {
        newDirection.push(xChange < 0 ? "left" : "right");
      }

      if (ratio < 4) {
        newDirection.push(yChange < 0 ? "up" : "down");
      }

      setDirection(newDirection.join("-"));

      const yPosition = this.y;
      const containerHeight = app.current.clientHeight;
      const percentage = Math.round(
        (Math.abs(yPosition) / containerHeight) * 100
      );

      if (yPosition < 0) {
        setNumber(100 - percentage);
      } else {
        setNumber(yPosition === 0 ? 100 : 100);
      }

      startX = this.x;
      startY = this.y;
    }

    return () => {
      if (draggableInstance) {
        draggableInstance[0].kill();
      }
    };
  }, []);

  return (
    <div      style={{ gridColumn , gridRow}}    className={`${styles.box}`}>
   
      <div className={`${styles.mask}  `}>
        <div ref={app} className={styles.blind}>
          <div className={styles.info}>
            <span className={styles.text}>{number}</span>

            <span
              className={` ${styles.icon}   ${
                direction === "up" ? styles.down : styles.up
              }`}
            >
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          </div>
        </div>

        <div className={styles.blindBackground}></div>
      </div>
    </div>
  );
}
