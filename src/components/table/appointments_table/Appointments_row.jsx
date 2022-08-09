import React from 'react'
import Button from '../../button/Button'
import Style from '../styles/table_style.module.css'

function Appointments_row(props) {
  return (
    <tr className={Style.Table_row}>
      <td className={Style.Row_item}>{props.date}</td>
      <td className={Style.Row_item}>{props.speciality}</td>
      <td className={Style.Row_item}>{props.doctor}</td>
      <td className={Style.Row_item}><Button className={Style.Row_button} value='Confirmar'/></td>
    </tr>
  )
}

export default Appointments_row