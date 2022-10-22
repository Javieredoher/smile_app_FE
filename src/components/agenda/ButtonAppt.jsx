import React from 'react'
import style from './agenda.module.css'

function ButtonAppt({value= ''}) {
  return (
    <input className={style.ButtonForm} type='button' value={value}></input>
  )
}

export default ButtonAppt