import React from 'react'
import style from './consentimiento.module.css'
import Consentimiento from './Consentimiento'
import InfoField from '../../../../components/inputs/InfoField'
import Fields from '../../../../components/inputs/Fields'


export const Consent = () =>  {
    return(
      <div className={style.REcontent}>
        <div className={style.DivSubtitulo}>
          <h3>XII. CONSENTIMIENTO INFORMADO</h3>
        </div>        
        <div>
            <Consentimiento/>
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
      </div>

      )
  }
  
  export default Consent