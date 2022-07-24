import React from 'react'
import ButtonHome from '../ButtonHome'
import Title from '../title'
import iconConsultHC from '../../../assets/images/consultHC.png'
import newDoc from '../../../assets/images/newDoc.png'
import style from '../content.module.css'



function ContentHome() {

  return (
    <div className={style.Content}> 
        <div className={style.DivTitle}>
            <Title value='MÓDULO CLÍNICO' />
        </div>
        <div className={style.DivContent}>
          <ButtonHome value='Consultar historial clínico' icon={iconConsultHC}/>
          <ButtonHome value='Registrar nueva evolución' icon={newDoc}/>
        </div>
    </div>
  )
}

export default ContentHome