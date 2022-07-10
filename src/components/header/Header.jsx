import React from 'react'
import Logo from '../../assets/images/logo.jpg'
import styles from './header.module.css'

function Header() {

  return (
    <header>
        <div className={styles.divLogo}>
            <img src={Logo} alt="Logo" className={styles.Logo}/>
        </div>
        <div className={styles.divHeader}></div>        
    </header>
  )
}

export default Header
