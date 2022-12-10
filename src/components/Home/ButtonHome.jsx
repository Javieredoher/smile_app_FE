import React from 'react'
import style from './content.module.css'

function ButtonHome({value='', icon=''}) {
  return (
    <div className={style.ButtonHome}>
      <img className={style.Img} src={icon} alt='icon button'/>
      <h4 >{value}</h4>
    </div>
  )
}

export default ButtonHome