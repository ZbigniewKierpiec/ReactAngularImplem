/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./NavTest.module.css";
const links = [
  {
    id: 1,
    icon: "home-outline",
    name: "home",
  },

  {
    id: 2,
    icon: "tv-outline",
    name: "display",
  },
  {
    id: 3,
    icon: "scale-outline",
    name: "flip-tops",
  },
  {
    id: 4,
    icon: "bulb-outline",
    name: "lighting",
  },
  {
    id: 5,
    icon: "archive-outline",
    name: "lighting",
  },
  {
    id: 6,
    icon: "flash-outline",
    name: "power",
  },
  {
    id: 7,
    icon: "apps-outline",
    name: "matrix",
  },
  {
    id: 8,
    icon: "settings-outline",
    name: "settings",
  },
];
export default function NavTest() {


 function handleClick(id){
  console.log(id)
   
 }
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <span className={styles.menuMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </span>
      </div>
      <ul className={styles.ul}>
        {links.map((data) => (
          <List key={data.id}   handleClick={handleClick} data={data} />
        ))}
      </ul>
    </nav>
  );
}

function List({ data ,  handleClick }) {
  return (
    <li onClick={handleClick} className={styles.li}  >
      <a className={styles.a} href="#">
        <span className={styles.icon}>
          <ion-icon name={data.icon}></ion-icon>
        </span>
        <span className={styles.title}>{data.name}</span>
      </a>
    </li>
  );
}
