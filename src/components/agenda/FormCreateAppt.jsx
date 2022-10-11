import React from "react"
import style from "../agenda/agenda.module.css"
import Title from "../newPatientForms/Title"
import Input from "../newPatientForms/InputsForm"



function FormCreateAppt() {
    
    return(
        <div className={style.Content}>
            <div className={style.DivTittle}>
                <Title value='AGENDA'/>
            </div>
            <div className={style.DivSubtitulo}>
                <h3>CREAR CITA</h3>
            </div>
            <div className={style.DivInput}>
                <Input className={style.Input} name="namePatient" placeholder=" NOMBRE DEL PACIENTE"/>
            </div>
            <div className={style.DivInput}>
                <Input className={style.Input} name="namePatient" placeholder=" FECHA"/>
                <Input className={style.Input} name="namePatient" placeholder=" HORA"/>
            </div>
            <div className={style.DivInput2}>
                <Input className={style.Input2} name="namePatient" placeholder=" DESCRIPCIÓN"/>
            </div><br />
        </div>



    )
    
}





export default FormCreateAppt