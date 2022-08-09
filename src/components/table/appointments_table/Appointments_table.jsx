import React from 'react'

import RowTitle from './Appointments_rowTitle'

import dates from '../../../dummy/dates.json'
import Appointments_row from './Appointments_row'
import Style from '../styles/table_style.module.css'

function Appointments_table() {
  return (
    <table className={Style.Table_style}>
        <RowTitle/>
        {dates.map((props)=>(
            <Appointments_row
            date={props.date}
            speciality={props.speciality}
            doctor={props.doctor}
            />
        ))}
    </table>
  )
}

export default Appointments_table