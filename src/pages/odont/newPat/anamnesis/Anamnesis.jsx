import React from 'react'
import style from './anamnesis.module.css'
import Fields from '../../../../components/inputs/Fields'
import Title from '../../../../assets/styles/Title'

export const Anamnesis = () =>  {
  return(
    <div className={style.REcontent}>
          <div className={style.DivSubtitulo}>
            <h3>V. ANAMNESIS</h3>
          </div>
          <div className={style.Div}>
            <table className={style.Table}>
                <tr>
                  <th className={style.Encabezado}><Title className={style.Title2} value='ANÁLISIS POR SISTEMAS'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title2} value='SÍ'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title2} value='NO'/></th>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema cardiovascular'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema cardiovascular'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema cardiovascular'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Enfermedades hematológicas'/></td>
                  <td className={style.Celda2}><input type="radio" name='Enfermedades hematologicas'/></td>
                  <td className={style.Celda2}><input type="radio" name='Enfermedades hematologicas'/></td>
                </tr>
                <tr>   
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema respiratorio'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema respiratorio'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema respiratorio'/></td>
                </tr> 
                <tr>  
                  <td className={style.Celda}><Fields className={style.Label} value='Sistemas genitourinarios'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistemas genitourinarios'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistemas genitourinarios'/></td>
                </tr>  
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema digestivo'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema digestivo'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema digestivo'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema musculoesquelético'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema musculoesqueletico'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema musculoesqueletico'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema nervioso'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema nervioso'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema nervioso'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema endocrino'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema endocrino'/></td>
                  <td className={style.Celda2}><input type="radio" name='Sistema endocrino'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Piel y faneras'/></td>
                  <td className={style.Celda2}><input type="radio" name="Piel y faneras"/></td>
                  <td className={style.Celda2}><input type="radio" name="Piel y faneras"/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Reacciones alérgicas'/></td>
                  <td className={style.Celda2}><input type="radio" name="Reacciones alérgicas"/></td>
                  <td className={style.Celda2}><input type="radio" name="Reacciones alérgicas"/></td>
                </tr>
            </table>
                <tr>
                  <td colSpan={3}className={style.Observaciones}>
                    <Fields className={style.LabelObv} value='OBSERVACIONES:'/>
                    <textarea className={style.Input}/>
                  </td>
                </tr>
          </div>
    </div>
    )
}

export default Anamnesis