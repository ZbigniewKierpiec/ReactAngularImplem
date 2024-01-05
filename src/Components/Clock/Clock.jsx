import React, { useEffect, useState } from 'react'
import styles from './Clock.module.scss';
export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    const secondHandStyle = {
      transform: `rotate(${(seconds / 60) * 360}deg)`,
    };
  
    const minuteHandStyle = {
      transform: `rotate(${((minutes * 60 + seconds) / 3600) * 360}deg)`,
    };
  
    const hourHandStyle = {
      transform: `rotate(${((hours % 12) * 3600 + minutes * 60 + seconds) / 43200 * 360}deg)`,
    };
  
  return (
    <div className={styles.ui}>
        <div className="analog-clock">
        <div className="hand second" style={secondHandStyle}></div>
      <div className="hand hour" style={hourHandStyle}></div>
      <div className="hand minute" style={minuteHandStyle}></div>
    
      <div className="center">
    
      </div>
    </div>

    </div>
  )
}
