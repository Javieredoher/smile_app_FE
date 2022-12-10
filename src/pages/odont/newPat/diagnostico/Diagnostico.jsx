import React from 'react'
import style from './diagnostico.module.css'
import Title from '../../../../assets/styles/Title'
import Fields from '../../../../components/inputs/Fields'
import CIE10 from './CIE10'

export const Diagnostico = () =>  {
    return(
      <div className={style.REcontent}>
        <div className={style.DivSubtitulo}>
          <h3>IX. EXÁMENES COMPLEMENTARIOS</h3>
        </div>
        <div className={style.DivInput}>
          <textarea className={style.Input2} 
            name="Input" 
            placeholder="Escriba exámenes complementarios que requiere el paciente"/>
        </div>
        <div className={style.DivSubtitulo}>
          <h3>X. DIAGNÓSTICOS</h3>
        </div>
        <div className={style.Div}>
          <table className={style.Table}>
            <tr rowSpan={2}>
              <th className={style.Encabezado}><Title className={style.Title} value='Diagnóstico Presuntivo'/></th>
              <th></th>
            </tr>
            <tr>
              <td className={style.Celda}>
                <Fields className={style.Label} value='1.'/>
                <CIE10/>               
              </td>
            </tr>
            <tr>
              <td className={style.Celda}>
                <Fields className={style.Label} value='2.'/>
                <CIE10/>                  
              </td>
            </tr>
            <tr>
              <td className={style.Celda}>
                <Fields className={style.Label} value='3.'/>
                <CIE10/>                
              </td>
            </tr>
          </table>
          <table className={style.Table}>
            <tr colSpan={2}>
              <th className={style.Encabezado}><Title className={style.Title} value='Diagnóstico Definitivo'/></th>
            </tr>
            <tr>
              <td className={style.Celda}>
                <Fields className={style.Label} value='1.'/>
                <CIE10/>                 
              </td>
            </tr>
            <tr>
              <td className={style.Celda}>
                <Fields className={style.Label} value='2.'/>
                <CIE10/>                  
              </td>
            </tr>
            <tr>
              <td className={style.Celda}>
                <Fields className={style.Label} value='3.'/>
                <CIE10/>                
              </td>
            </tr>
          </table>
        </div>
        <div className={style.DivSubtitulo}>
          <h3>XI. PRONÓSTICO</h3>
        </div>
        <div className={style.DivInput}>
          <textarea className={style.Input2} 
            name="Input" 
            placeholder="Describa el pronóstico del paciente"/>
        </div>
        
      </div>

      )
  }
  
  export default Diagnostico