import React from 'react'

import style from '../styles/Clinical.module.css'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/profConv/ProfConv'
import Home from '../../components/Home/profConv/HomeProfConv'


const Appointments = () => {
  return (
    <div>
        <Header/>
        <div className={style.HomeContent}>
          {/* <Menu/> */}
          <Home/>
        </div>
        <Footer/>
    </div>
  )
}

export default Appointments