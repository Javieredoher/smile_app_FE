import React from 'react'

import style from './reg.evolution.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../assets/styles/Title'
import Fields from '../../components/newPatientForms/Fields'
import Input from '../../components/newPatientForms/InputsForm'
import Button from '../../components/button/Button'

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
                        <Input className={style.Input}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="Apellido"
                        />
                        <Input className={style.Input}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="N° Documento"
                        />
                        <Input className={style.InputInt}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="Edad"
                        />
                        <Input className={style.InputInt}/>
                    </div>
                    <div className={style.Nombre}>
                        <Fields 
                        className={style.Label}
                        value="Celular"
                        />
                        <Input className={style.InputInt}/>
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
                <div className={style.DivEvoInput}>
                    <textarea
                    className={style.EvoInput}
                    name="Evolution Input"
                    placeholder=  "Describa nuevos avances en el proceso clínico del paciente"
                    />
                </div>
            <div className={style.Footer}>
                <Footer/>
                </div>
        </div>
    )
}
export default RegisterEvolution