import React from "react"

import Title from "../../../assets/styles/Title"
import Input from "../../../components/inputs/InputsForm"
import style from './id.evo.module.css'
import Button from '../../../components/button/Button'
import newDoc from '../../../assets/images/newDoc.png'
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"


function IdEvo() {
  
  return(
    
    <div className={style.Content}>
      <div className={style.Header}>
                <Header/>
                </div>
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
      <div className={style.Footer}>
                <Footer/>
                </div>
    </div>
        


    )
}
export default IdEvo