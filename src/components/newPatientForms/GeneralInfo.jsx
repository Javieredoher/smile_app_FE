import React from "react"
import style from "../newPatientForms/general.module.css"
import Title from "../newPatientForms/Title"
import Input from "../newPatientForms/InputsForm"
import TitleFields from "./TitleFields"
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
        <div className={style.DivInputs}>
          <TitleFields value='ALERTA MÉDICA'/>
          <div className={style.Input}> 
        </div>
    </div>



  </div>

    

      
    )
  }
  
  export default GeneralInfo