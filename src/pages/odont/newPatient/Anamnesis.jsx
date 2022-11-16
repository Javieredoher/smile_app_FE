import React from 'react'
import style from './anamnesis.module.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import newPatient from '../../../assets/images/newPatient.png'
import Title from '../../../assets/styles/Title'
import Input from '../../../components/inputs/InputsForm'
import Fields from '../../../components/inputs/Fields'
import Button from '../../../components/button/Button'


export const Anamnesis = () =>  {
  return(
    <div className={style.REcontent}>
      <div className={style.Header}>
        <Header/>
      </div>
        <div className={style.DivTitle}>
          <Title value='REGISTRAR NUEVO PACIENTE'/>
          <img className={style.Img} src={newPatient} alt="Icon Nuevo Paciente"/>   
        </div>
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
                  <td className={style.Celda2}><input className={style.Radio} type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Enfermedades hematológicas'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>   
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema respiratorio'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr> 
                <tr>  
                  <td className={style.Celda}><Fields className={style.Label} value='Sistemas genitourinarios'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>  
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema digestivo'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema musculoesquelético'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema nervioso'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Sistema endocrino'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Piel y faneras'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='Reacciones alérgicas'/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                  <td className={style.Celda2}><input type="radio"/></td>
                </tr>
                <tr>
                  <td colSpan={3}className={style.Celda}>
                    <Fields className={style.Label} value='OBSERVACIONES:'/>
                    <Input className={style.Input} name="Observación" placeholder=" Observaciones" label="Observación"/>
                  </td>
                </tr>
            </table>
            <div className={style.DivData}>
              <Button className={style.Button} value='Anterior'/>
              <Button className={style.Button} value='Siguiente'/>
          </div>
        </div>

        <div className={style.Footer}>
            <Footer/>
        </div>
   </div>
    )
}

export default Anamnesis