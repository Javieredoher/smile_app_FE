import React from 'react'
import style from './Button.module.css'

function Button({className='' , value= ''}) {
  return (
    <input className={className} type='button' value={value}></input>
  )
}

export default Button