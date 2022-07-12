import React from 'react'
import style from './home.module.css'

function ButtonHome({value='', icon=''}) {
  return (
    <div className={style.ButtonHome}>
      <img src={icon} alt='icon button'/>
      <h3 >{value}</h3>
    </div>
  )
}

export default ButtonHome