import React from 'react'
import style from '../newPatientForms/general.module.css'

//export default function Input({value = '', type = 'text', placeholder = '', name = '', label = ''}) {
//Se retira el atributo value, se debe reinstaurar cuando se haga la funcionalidad

export default function Input({type = 'text', placeholder = '', name = '', label = '', titulo = ''}) {
  return (
    <>
        <Input
        className={style.Input}
        type={type}
        placeholder={placeholder}
        //value={value}
        name={name}
        label={label}
        />
    </>
  )
}