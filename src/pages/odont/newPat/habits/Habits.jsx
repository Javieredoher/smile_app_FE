import React from 'react'
import style from './habits.module.css'
import Title from '../../../../assets/styles/Title'
import Fields from '../../../../components/inputs/Fields'

export const Habits = () =>  {
    return(
      <div className={style.REcontent}>
            <div className={style.DivSubtitulo}>
              <h3>VII. ANTECEDENTES Y HÁBITOS</h3>
            </div>
            <div className={style.Div}>
              <table className={style.Table1}>
                <tr>
                  <th className={style.Encabezado}><Title className={style.Title} value='ANTECEDENTES ODONTOLÓGICOS'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title} value='SÍ'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title} value='NO'/></th>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='¿Ha tenido limitación al abrir o cerrar la boca?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a1'/></td>
                  <td className={style.Celda2}><input type="radio" name='a1'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}><Fields className={style.Label} value='¿Siente ruidos en la mandíbula al abrir o cerrar?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a2'/></td>
                  <td className={style.Celda2}><input type="radio" name='a2'/></td>
                </tr>
                <tr>   
                  <td className={style.Celda}><Fields className={style.Label} value='¿Sufre de herpes o aftas recurrentes?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a3'/></td>
                  <td className={style.Celda2}><input type="radio" name='a3'/></td>
                </tr> 
                <tr>  
                  <td className={style.Celda}><Fields className={style.Label} value='¿Ha presentado reacción alérgica a la anestesia?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a4'/></td>
                  <td className={style.Celda2}><input type="radio" name='a4'/></td>
                </tr>
                <tr>
                  <td colSpan={3} className={style.Celda3}>
                    <Fields className={style.Label} value='OBSERVACIONES:'/>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className={style.Celda3}>
                    <textarea className={style.Input}/> 
                  </td>
                </tr>
                <tr>
                  <th className={style.Encabezado}><Title className={style.Title} value='HÁBITOS HIGIENE ORAL'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title} value='SÍ'/></th>
                  <th className={style.Encabezado2}><Title className={style.Title} value='NO'/></th>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Se cepilla los dientes? ¿Cuántas veces?'/>
                      <select className={style.Input3} id="cepillado">
                          <option value="0">1</option>
                          <option value="a">2</option>
                          <option value="b">3</option>
                          <option value="b">más de 3</option>
                      </select>                  
                  </td>
                  <td className={style.Celda2}><input type="radio" name='a5'/></td>
                  <td className={style.Celda2}><input type="radio" name='a5'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Usa seda dental? ¿Cuántas veces?'/>
                      <select className={style.Input3} id="cepillado">
                          <option value="0">1</option>
                          <option value="a">2</option>
                          <option value="b">3</option>
                          <option value="b">más de 3</option>
                      </select>
                    </td>
                  <td className={style.Celda2}><input type="radio" name='a6'/></td>
                  <td className={style.Celda2}><input type="radio" name='a6'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Usa enjuague bucal? ¿Cuántas veces?'/>
                      <select className={style.Input3} id="cepillado">
                          <option value="0">1</option>
                          <option value="a">2</option>
                          <option value="b">3</option>
                          <option value="b">más de 3</option>
                      </select>
                    </td>
                  <td className={style.Celda2}><input type="radio" name='a7'/></td>
                  <td className={style.Celda2}><input type="radio" name='a7'/></td>
                </tr>
                <tr>
                  <th colSpan={3} className={style.Subtitulo}>
                    <Title className={style.Title} value='Presenta alguno de los siguientes hábitos:'/></th>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Morderse las uñas o los labios? Onicofagia - Queilofagia'/></td>
                  <td className={style.Celda2}><input type="radio" name='a8'/></td>
                  <td className={style.Celda2}><input type="radio" name='a8'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Respirador oral o respirador mixto?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a9'/></td>
                  <td className={style.Celda2}><input type="radio" name='a9'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Succión digital o succión labial?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a10'/></td>
                  <td className={style.Celda2}><input type="radio" name='a10'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Fuma? ¿Cuántos cigarrillos?'/>
                      <select className={style.Input3} id="cepillado">
                          <option value="0">1 a 5</option>
                          <option value="a">5 a 10</option>
                          <option value="b">más de 10</option>
                      </select>
                    </td>
                  <td className={style.Celda2}><input type="radio" name='a11'/></td>
                  <td className={style.Celda2}><input type="radio" name='a11'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Consume alimentos cítricos?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a12'/></td>
                  <td className={style.Celda2}><input type="radio" name='a12'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Muerde objetos con los dientes?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a13'/></td>
                  <td className={style.Celda2}><input type="radio" name='a13'/></td>
                </tr>
                <tr>
                  <td className={style.Celda}>
                    <Fields className={style.Label} value='¿Aprieta o bruxa los dientes?'/></td>
                  <td className={style.Celda2}><input type="radio" name='a14'/></td>
                  <td className={style.Celda2}><input type="radio" name='a14'/></td>
                </tr>
              </table>
            </div>
      </div>
      )
  }
  
  export default Habits