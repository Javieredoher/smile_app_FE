import React from 'react'
import style from '../styles/Clinical.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Content from'../../components/Home/odont/clinichistory'

export const OdClinicalhistory = () => {
  return (
    <div>
        <Header/>
          <div className={style.HomeContent}>
            <Content/>
          </div>
        <Footer/>
    </div>

  )
}

export default OdClinicalhistory