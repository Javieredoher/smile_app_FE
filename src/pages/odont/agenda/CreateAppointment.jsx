import React from "react"
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import style from '../agenda/agenda.module.css'
import Title from "../../../assets/styles/Title"
import Input from "../../../components/newPatientForms/InputsForm"
import Button from "../../../components/button/Button"


export const CreateAppointment = () => {
    return (
      <div className={style.REcontent}>
        <div className={style.Header}>
            <Header/>
            </div>
            <div className={style.DivTitle}>
                <Title value='AGENDA'/>
            </div>
            <div className={style.DivSubtitulo}>
                <h3>CREAR CITA</h3>
            </div>
            <form>
                <div className={style.DivData2}>
                    <Input className={style.Input} name="namePatient" placeholder=" NOMBRE DEL PACIENTE"/>
                    <Input className={style.Input} type="datetime-local" name="date-time"/>
                </div>
                <div className={style.DivData}>
                    <Input className={style.EvoInput} name="description" placeholder=" DESCRIPCIÓN"/>
                </div>
            </form>
            <div className={style.DivData}>
                <Button className={style.ButtonForm} value="Anterior"/>
                <Button className={style.ButtonForm} value="Guardar"/>
            </div>
        <div className={style.Footer}>
            <Footer/>
            </div>
  </div>


  
    )
  }

  export default CreateAppointment