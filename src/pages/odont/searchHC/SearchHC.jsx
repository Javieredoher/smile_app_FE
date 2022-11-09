import React from "react"
import Title from "../../../assets/styles/Title"
import Input from "../../../components/inputs/InputsForm"
import Fields from "../../../components/inputs/Fields"
import style from './search.hc.module.css'
import Button from '../../../components/button/Button'

function SearchHC() {
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

export default SearchHC