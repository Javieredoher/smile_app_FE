import React from 'react'

import style from '../styles/Clinical.module.css'
import Header from '../../components/header/Header'
import Menu from '../../components/menu/odont/OdontMenu'
import Footer from '../../components/footer/Footer'
import ContentOdont from '../../components/Home/odont/oContent'

export const OdClinicalModule = () => {
  return (
    <div>
        <Header/>
          <div className={style.HomeContent}>
          <Menu/>
          <ContentOdont/>
          </div>
        <Footer/>
    </div>

  )
}

export default OdClinicalModule