import React from 'react'

import style from './reg.evolution.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../assets/styles/Title'
import Fields from '../../components/inputs/Fields'
import InfoField from '../../components/inputs/InfoField'
import Input from '../../components/inputs/InputsForm'
import Button from '../../components/button/Button'
import DropdownCUPS from './dropdown'

export const RegisterEvolution = () => {
return (
        <div className={style.REcontent}>
            <div className={style.Header}>
                <Header/>
                </div>
            <div className={style.DivTitle}>
                <Title value='REGISTRAR EVOLUCIÓN'/>
                </div>
            <div className={style.DivSubtitulo}>
                <h3>DATOS PERSONALES</h3>
                </div>
                <div className={style.DivData}>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="Nombre"
                        />
                        <InfoField className={style.InfoField}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="Apellido"
                        />
                        <InfoField className={style.InfoField}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="N° Documento"
                        />
                        <InfoField className={style.IntField}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="Edad"
                        />
                        <InfoField className={style.IntField}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="Celular"
                        />
                        <InfoField className={style.IntField}/>
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
            <div className={style.DivSubtitulo}>
                <h3>PROCEDIMIENTO (CUPS)</h3>
                </div>
                <div className={style.DivCUPS}>
                    <DropdownCUPS className={style.DropdownCUPS}/>
                    <Fields/>
                </div>
            <div className={style.DivFirmas}>
                <div className={style.Paciente}>
                    <InfoField className={style.Firmas}/>
                    <Fields className={style.FirmasTexto}
                    value="Firma del paciente"/>
                    </div>
                    <div className={style.Odon}>
                    <InfoField className={style.Firmas}/>
                    <Fields className={style.FirmasTexto}
                    value="Firma del odontólogo"/>
                    </div>
            </div>
            <div className={style.Footer}>
                <Footer/>
                </div>
        </div>
    )
}

export default RegisterEvolution