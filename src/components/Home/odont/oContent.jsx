import React from 'react'
import ButtonHome from '../ButtonHome'
import Title from '../../../assets/styles/Title'
import style from '../content.module.css'
import consultHC from '../../../assets/images/consultHC.png'
import newPatient from '../../../assets/images/newPatient.png'
import newDoc from '../../../assets/images/newDoc.png'


function ContentOdont() {

  return (
    <div className={style.Content}> 
        <div className={style.DivTitle}>
            <Title className={style.Title} value='MÓDULO CLÍNICO'/>
        </div>
        <div className={style.DivContent}>
          <ButtonHome value='Consultar historial clínico' icon={consultHC}/>
          <ButtonHome value='Agregar nuevo paciente' icon={newPatient}/>
          <ButtonHome value='Registrar nueva evolución' icon={newDoc}/>
        </div>
    </div>
  )
}

export default ContentOdont