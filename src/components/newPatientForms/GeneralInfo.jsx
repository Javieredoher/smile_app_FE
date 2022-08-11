import React from "react"
import style from "../newPatientForms/general.module.css"
import Title from "../newPatientForms/Title"
import Input from "../newPatientForms/InputsForm"
import Fields from "./Fields"

import newPatient from "../../assets/images/newPatient.png"


function GeneralInfo() {

 return (
  <div className={style.Content}>
    <div className={style.DivTitle}>
      <Title value='REGISTRAR NUEVO PACIENTE' />   
    </div>
    <div className={style.DivSubtitulo}>
        <h3>I. INFORMACIÓN GENERAL</h3>
    </div>   
        <div className={style.DivInputAlert}>
          <Fields 
          className={style.TitleAlert}
          value='ALERTA MÉDICA'
          />
          <Input
          className={style.InputAlert}
          name="Alert"
          placeholder=" Describa afecciones importantes del paciente"         
          />
          </div>
            <div className={style.DivInputLine1}>
            <Fields
            className={style.TitleFirstSurname}
            value="1er Apellido"
            />
            <Input
            className={style.InputFirstSurname}
            name="FirstSurName"
            placeholder=" 1er Apellido"
            />
            <Fields
            className={style.TitleSecondSurname}
            value="2do Apellido"
            />
            <Input
            className={style.InputSecondSurname}
            name="SecondSurname"
            placeholder=  " 2do Apellido"
            />
            <Fields
            className={style.TitleFirstName}
            value="1er Nombre"
            />
            <Input
            className={style.InputFirstName}
            name="FirstName"
            placeholder=" 1er Nombre"
            />
            <Fields
            className={style.TitleSecondName}
            value="2do Nombre"
            />
            <Input
            className={style.InputSecondName}
            name="SecondName"
            placeholder=" 2do Nombre"
          />
        </div>


  </div>

    

      
    )
  }
  
  export default GeneralInfo