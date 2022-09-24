import React from "react";

import style from '../../styles/Npatient.module.css'

import Header from "../../../components/header/Header";
import Content from "../../../components/newPatientForms/GeneralInfo"
import Footer from "../../../components/footer/Footer";





export const GeneralInformation = () => {
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

  export default GeneralInformation