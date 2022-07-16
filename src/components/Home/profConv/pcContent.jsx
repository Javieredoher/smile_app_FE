import React from 'react'
import ButtonHome from '../ButtonHome'
import Title from '../title'
import style from '../content.module.css'


function ContentHome() {

  return (
    <div className={style.Content}> 
        <div className={style.DivTitle}>
            <Title value='MÓDULO CLÍNICO' />
        </div>
        <div className={style.DivContent}>
          <ButtonHome value='Consultar historial clínico'/>
          <ButtonHome value='Registrar nueva evolución'/>
        </div>
    </div>
  )
}

export default ContentHome