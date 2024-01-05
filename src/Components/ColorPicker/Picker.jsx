

import React, { useEffect, useState } from 'react'
import styles from './Picker.module.scss';
import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/style.css';

export default function Picker() {
    const [color, setColor] = useState({
        hue: 90,
        saturation: 100,
        luminosity: 50,
        alpha: 1,
        
    });
   
    const onInput = (hue) => {
        setColor((prev) => ({ ...prev, hue }));
    };

 // Effect to update icon color when the color changes
 useEffect(() => {
  updateIconColor();
}, [color]);

// Function to update the icon color based on the selected color
const updateIconColor = () => {
  const icon = document.querySelector('.customcolorpicker::after');
  if (icon) {
    const iconColor = `hsla(${color.hue}, ${color.saturation}%, ${color.luminosity}%, ${color.alpha})`;
    icon.style.color = iconColor;
  }
};


  return (
    <div className={styles.box}>
    

    <ColorPicker className={styles.customcolorpicker}    {...color} onInput={onInput}></ColorPicker>
   
   
    

    </div>
  )
}
