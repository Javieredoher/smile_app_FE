import React from 'react'

import style from './dates.hc.module.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Title from '../../../assets/styles/Title'
import Fields from '../../../components/inputs/Fields'
import Input from '../../../components/inputs/InputsForm'
import Button from '../../../components/button/Button'
import DropdownCUPS from '../../regEvo/dropdown'

export const datesHC = () => {
return (
        <div className={style.REcontent}>
            <div className={style.Header}>
                <Header/>
                </div>
            <div className={style.DivTitle}>
                <Title value='CONSULTAR HISTORIAL CLINICO'/>
                </div>
            <div className={style.DivSubtitulo}>
                <h3>DATOS DEL PACIENTE</h3>
                </div>
                <div className={style.DivData}>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}/>
                        <Input className={style.Input}/>
                    </div>
                </div>
            <div className={style.DivSubtitulo}>
            <h3>EVOLUCIÓN</h3>
                </div>
                <div className={style.DivEvoInput}>
                    <textarea
                    className={style.EvoInput}
                    name="Evolution Input"
                    placeholder=  "Describa nuevos avances en el proceso clínico del paciente"
                    />
                </div>
                <div className={style.DivButton}>
                    <Button className={style.Button} value='Adjuntar archivos'/>
                </div>
            <div className={style.DivSubtitulo}>
                <h3>PROCEDIMIENTO (CUPS)</h3>
                </div>
                <div className={style.DivCUPS}>
                    <DropdownCUPS className={style.DropdownCUPS}/>
                </div>
            <div className={style.Footer}>
                <Footer/>
                </div>
        </div>
    )
}

export default datesHC