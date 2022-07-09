import React from 'react'
import style from './Button.module.css'

function Button({value= ''}) {
  return (
    <input className={style.ButtonInput} type='button' value={value}></input>
  )
}

export default Button