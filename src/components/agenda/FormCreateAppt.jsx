import React from "react"
import style from "../agenda/agenda.module.css"
import Title from "../newPatientForms/Title"
import Input from "../newPatientForms/InputsForm"
import Button from "../button/Button"



function FormCreateAppt() {
    
    return(
        <div className={style.Content}>
            <div className={style.DivTittle}>
                <Title value='AGENDA'/>
            </div>
            <div className={style.DivSubtitulo}>
                <h3>CREAR CITA</h3>
            </div>
            <form>
                <div className={style.DivInput}>
                    <Input className={style.Input} name="namePatient" placeholder=" NOMBRE DEL PACIENTE"/>
                </div>
                <div className={style.DivInput}>
                    <Input className={style.Input} type="datetime-local" name="date-time"/>
                </div>
                <div className={style.DivInput2}>
                    <Input className={style.Input2} name="description" placeholder=" DESCRIPCIÓN"/>
                </div>
            </form>
            <div className={style.DivButton}>
                <Button className={style.ButtonForm} value="Anterior"/>
                <Button className={style.ButtonForm} value="Guardar"/>
            </div>
        </div>




    )
    
}





export default FormCreateAppt