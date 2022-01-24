import React from 'react';
import nav_style from './Nav_style.module.css'; 

function Nav() {
    
  return(
  <div className={nav_style.default}>
    <div className={nav_style.nav}>
        <ul className={nav_style.ul}>
            <li className={nav_style.li}>HOME</li>
            <li className={nav_style.li}>ABOUT</li>
            <li className={nav_style.li}>CONTACT</li>
            <li className={nav_style.li}>INFO</li>
        </ul>
    </div>
    
  </div>
)}

export default Nav;
