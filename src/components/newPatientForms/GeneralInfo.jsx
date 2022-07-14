import React from "react"
import style from "../newPatientForms/general.module.css"
import Title from "../newPatientForms/Title"
import newPatient from "../../assets/images/newPatient.png"


function GeneralInfo() {

    return (
        <div className={style.Content}>
                <Title value="REGISTRAR NUEVO PACIENTE"/>
        </div>

      
    )
  }
  
  export default GeneralInfo