import React from "react"
import Title from "../../newPatientForms/Title"
import Input from "../../newPatientForms/InputsForm"
import Fields from "../../newPatientForms/Fields"
import style from "../../Home/odont/o.module.css"


function omodule() {
    return( 
    
    <div className={style.Content}>
        <div className={style.DivTittle}>
          <Title value='REGISTRAR NUEVO PACIENTE'/>
          <img className={style.Img} src={newPatient} alt="Icon Nuevo Paciente"/>   
        </div> 
       </div>
        


    )
}
export default omodule