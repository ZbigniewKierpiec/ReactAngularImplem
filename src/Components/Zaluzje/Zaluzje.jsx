// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Shades.module.scss";

import { gsap, Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default function Zaluzje(props) {
  const { gridColumn, gridRow } = props;
  const [direction, setDirection] = useState("down");
  const [number, setNumber] = useState(100);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
 
  // const [activeText, setActiveText] = useState(false);
  const app = useRef(null);
       
  





  // useEffect(() => {
  //   const getBoundingClientRect = () => {
  //     const element = app.current;
  //     if (element) {
  //       const rect = element.getBoundingClientRect();
  //       console.log('Element position:', rect.y);
  //     }
  //   };

  //   // Call the function on mount or whenever the component updates
  //   getBoundingClientRect();

  //   // Optionally, you can add an event listener to recalculate on resize or other events
  //   window.addEventListener('resize', getBoundingClientRect);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', getBoundingClientRect);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once on mount







































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

      onDragEnd: function () {
        // Handle drag end event
        setActive(false);

        setTimeout(() => {
          setActive2(false);
        }, 2000);
      },
    });
    
    function updateDirection() {








      const getBoundingClientRect = () => {
        const element = app.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          console.log('Element position:', rect );
        }
      };
  
      // Call the function on mount or whenever the component updates
      getBoundingClientRect();
  

























      const xChange = this.x - startX;
      const yChange = this.y - startY;
      const ratio = Math.abs(xChange / yChange);
      const newDirection = [];
      if (newDirection) {
        setActive(true);
        setActive2(true);
      }
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
    <div style={{ gridColumn, gridRow }} className={`${styles.box}`}>
      <div className={`${styles.mask}  `}>
        <div ref={app} className={styles.blind}>
          <div className={styles.info}>
            <span
              className={`${styles.text}   ${active2 ? styles.active : ""}  `}
            >
              {number}
            </span>

            <span
              className={`${styles.icon} ${
                direction === "up" ? styles.down : styles.up
              } ${active ? styles.active : ""}`}
            >
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          </div>
        </div>

        <div className={styles.blindBackground}>
          <span className={`${styles.spanText}`}>{number}</span>
        </div>
      </div>
    </div>
  );
}

// className={` ${styles.icon}   ${direction === "up" ? styles.down : styles.up}   ${active ?'animate__animated animate__fadeInUp':'animate__animated animate__fadeOutDown animate__delay-2s  '}        `}
