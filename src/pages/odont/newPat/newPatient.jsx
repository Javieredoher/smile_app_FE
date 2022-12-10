import React from 'react'

import style from './newpatient.module.css'
import Header from '../../../components/header/Header'
import Title from '../../../assets/styles/Title'
import Footer from '../../../components/footer/Footer'
import GeneralInfo from './infoGen/GeneralInfo'
import Anamnesis from './anamnesis/Anamnesis'
import newPatient from '../../../assets/images/newPatient.png'
import Button from '../../../components/button/Button'
import Habits from './habits/Habits'
import Enfermedad from './enfermedad/Enfermedad'
import Examen from './examen/Examen1'
import Diagnostico from './diagnostico/Diagnostico'
import Consent from './consentimiento/Consent'


export const NewPatient = () => {
return (
    <div className={style.REcontent}>
        <div className={style.Header}>
            <Header/>
            </div>
        <div className={style.DivTitle}>
            <Title value='REGISTRAR NUEVO PACIENTE'/>
            <img className={style.Img} src={newPatient} alt="Icon Nuevo Paciente"/>   
            </div>
            <GeneralInfo/>
            <Enfermedad/>
            <Anamnesis/>
            <Examen/>
            <Habits/>
            <Diagnostico/>
            <Consent/>
        <div className={style.DivButtons}>
            <Button className={style.Button} value='Anterior'/>
            <Button className={style.Button} value='Siguiente'/>
            </div>
        <div className={style.Footer}>
            <Footer/>
            </div>
        </div>
)
}

export default NewPatient