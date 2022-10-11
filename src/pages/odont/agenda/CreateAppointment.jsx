import React from "react"
import style from '../../styles/Clinical.module.css'
import Header from "../../../components/header/Header"
import Content from "../../../components/agenda/FormCreateAppt"
import Footer from "../../../components/footer/Footer"

export const CreateAppointment = () => {
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

  export default CreateAppointment