import React from 'react'
import Style from '../styles/table_style.module.css'

function RowTitle() {
  return (
    <tr className={Style.Table_title}>
      <td className={Style.Row_item}>FECHA DE CONSULTA</td>
      <td className={Style.Row_item}>ESPECIALIDAD</td>
      <td className={Style.Row_item}>PROFESIONAL</td>
      <td className={Style.Row_item}>CONFIRMAR O CANCELAR</td>
    </tr>    
  )
}

export default RowTitle