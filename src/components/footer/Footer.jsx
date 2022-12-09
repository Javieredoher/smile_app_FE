import React from 'react'
import styles from '../footer/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.Footer}> 
  <div className='footer-info'>
      <h1>smile here </h1>
    </div>
    <div className='footer contact'>
      <h1> Agosto 2022</h1>
    </div>
    <div className='footer-sns'>
      <div className='design by'>
      <h1>© Derechos reservados</h1>
      </div>
    
  </div>

    </footer>

  )
}

export default Footer