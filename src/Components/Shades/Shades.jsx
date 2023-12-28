import React from 'react'
import styles from './Shades.module.scss';
import "animate.css";
import { useItemContext } from '../../Hooks/ItemProvider';
export default function Shades() {
    const { clickedItem } = useItemContext();
    let active = true;
  return (
    <div className={`${styles.box}  ${active ? 'animate__animated animate__fadeIn animate__slower 2s ':''}`}>{clickedItem}</div>
  )
}
