import { useState , useEffect } from 'react';
import styles from '../MenuMobile/MenuMobile.module.scss';
import { NavLink } from 'react-router-dom';

  export default function MenuMobile(){
isToggled=true;

    // useEffect(() => {
    //   // Your side effect logic here, for example:
    //   console.log('isToggled changed:', isToggled);
    // }, [isToggled]);


  return ( 



    <div className={`${styles.container} ${isToggled ? styles.active2 : ''}`}>
    <header className={styles.header}>
      <nav  className={`  ${styles.menu}          ${isToggled ? styles.active :''   }   `}>
        <ul className={styles.ul}>
          <li className={styles.li}>
       
            <NavLink className={styles.a} to="/">Home</NavLink>
      
          </li>
          <li className={styles.li}>
          <NavLink className={styles.a} to="/app">wiersze</NavLink>
          </li>
          <li className={styles.li}>
          <NavLink className={styles.a}  to="/login" >
            Login
          </NavLink>
          </li>
        
        </ul>
      </nav>
    </header>
    <div className={`${styles.containerBlur} ${isToggled ? styles.toggled : ''}`}></div>
  </div>
  );
      

  }
