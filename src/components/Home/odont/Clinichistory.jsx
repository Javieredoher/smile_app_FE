import React from "react"
import Title from "../../newPatientForms/Title"
import Input from "../../newPatientForms/InputsForm"
import Fields from "../../newPatientForms/Fields"
import style from "../../Home/odont/clinichistory.css"
import Button from '../../button/Button'
function clinicalhistory() {
    return( 
    
    <div className={style.Content}>
        <div className={style.DivTittle}>
          <Title value='CONSULTAR HISTORIAL CLINICO'/>
          </div> 
          <div className={style.DivSubtitulo}>
         <h3>Busqueda paciente</h3>
        </div>  
    <div className={style.DivSubtitulo}>
         <h3> Datos paciente</h3>
        </div> 
    <div className={style.DivInputAlert}>
          <Input className={style.InputAlert} name="Alert" placeholder=" Digite número de documento"/>
        </div>
        
    <div className={style.DivButton}>
          <Button value='Buscar'/>
        </div>
    </div>
        


    )
}
export default clinicalhistory