import React from "react"
import Title from "../../../assets/styles/Title"
import Input from "../../../components/inputs/InputsForm"
import Fields from "../../../components/inputs/Fields"
import style from './search.hc.module.css'
import Button from '../../../components/button/Button'
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"

function SearchHC() {
    return( 
    <div className={style.Content}>
          <div className={style.Header}>
                <Header/>
                </div>
        <div className={style.DivTittle}>
            <Title value='CONSULTAR HISTORIAL CLINICO'/>
            </div> 
            <div className={style.DivSubtitulo}>
            <h3>BUSQUEDA DE PACIENTES</h3>
        </div>  
    <div className={style.DivSubtitulo1}>
        <h3> Datos paciente</h3>
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

export default SearchHC