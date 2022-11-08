import React from "react"
import Title from "../../newPatientForms/Title"
import Input from "../../newPatientForms/InputsForm"
import style from "../../Home/odont/o.module.css"
import Button from '../../button/Button'
import newDoc from '../../../assets/images/newDoc.png'


function omodule() {
  
  return(
    <div className={style.Content}>
      <div className={style.DivTittle}>
        <Title value='REGISTRAR EVOLUCIÓN'/>
        <img className={style.Img} src={newDoc} alt="Icon Register Evolution" />
      </div> 
      <div className={style.DivSubtitulo}>
         <h3> Datos del paciente</h3>
      </div> 
      <div className={style.DivInputSearch}>
        <Input className={style.InputSearch} name="Search" placeholder=" Digite número de documento" label="Digite número de documento"/>
        <Button className={style.ButtonCons} value='Buscar'/>
      </div>
    </div>
        


    )
}
export default omodule