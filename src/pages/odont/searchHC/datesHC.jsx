import React from 'react'
import style from './dates.hc.module.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Title from '../../../assets/styles/Title'
import Input from '../../../components/inputs/InputsForm'
import Fields from '../../../components/inputs/Fields'
import InfoField from '../../../components/inputs/InfoField'


export const datesHC = () =>  {
  return(
    <div className={style.REcontent}>
      <div className={style.Header}>
        <Header/>
      </div>
        <div className={style.DivTitle}>
          <Title value='CONSULTAR HISTORIAL CLÍNICO'/>
        </div>
        <div className={style.DivSubtitulo}>
                <h3>DATOS PERSONALES</h3>
                </div>
                <div className={style.Data}>
                  <td className={style.Celda1}><Fields className={style.Label2}/></td>
                  <td className={style.Celda1}><Fields className={style.Label2}/></td>
                </div>
          <div className={style.DivSubtitulo}>
            <h3>Búsqueda de pacientes</h3>
          </div>
          <div className={style.Div}>
            <table className={style.Table}>
                <tr>
                  <th className={style.Encabezado}><Title className={style.Title2} value='FECHA DE CONSULTA'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title2} value='ESPECIALIDAD'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title2} value='PROFESIONAL '/></th>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                </tr>
                <tr>   
                <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                </tr> 
                <tr>  
                <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                </tr>  
                <tr>
                <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                </tr>
                <tr>
                <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                </tr>
                <tr>
                <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                  <td className={style.Celda}><Fields className={style.Label}/></td>
                </tr>
            </table>
        </div>
        <div className={style.Footer}>
            <Footer/>
        </div>
  </div>
    )
}

export default datesHC