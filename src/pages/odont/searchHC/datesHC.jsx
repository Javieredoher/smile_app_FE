import React from 'react'
import style from './dates.hc.module.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Title from '../../../assets/styles/Title'
import Input from '../../../components/inputs/InputsForm'
import Fields from '../../../components/inputs/Fields'


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
                <td className={style.Celda1}><Fields className={style.Label2} value='12354669923'/></td>
                  <td className={style.Celda1}><Fields className={style.Label2} value='Carolina Morales'/></td>
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
                  <td className={style.Celda}><Fields className={style.Label} value='23/01/2022'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Cirugia'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Liliana Herreño'/></td>
               </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='23/01/2022'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Cirugia'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Liliana Herreño'/></td>
               </tr>
                <tr>   
                <td className={style.Celda}><Fields className={style.Label} value='23/01/2022'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Cirugia'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Liliana Herreño'/></td>
               </tr> 
                <tr>  
                <td className={style.Celda}><Fields className={style.Label} value='23/01/2022'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Cirugia'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Liliana Herreño'/></td>
               </tr>  
                <tr>
                <td className={style.Celda}><Fields className={style.Label} value='23/01/2022'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Cirugia'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Liliana Herreño'/></td>
                </tr>
                <tr>
                <td className={style.Celda}><Fields className={style.Label} value='23/01/2022'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Cirugia'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Liliana Herreño'/></td>
               </tr>
                <tr>
                <td className={style.Celda}><Fields className={style.Label} value='23/01/2022'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Cirugia'/></td>
                  <td className={style.Celda}><Fields className={style.Label} value='Liliana Herreño'/></td>
               </tr>
                <tr> 
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