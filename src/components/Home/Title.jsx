import React from 'react'
import style from './content.module.css'

function Title({value=''}) {
  return (
    <h1 className={style.Title}>{value}</h1>
  )
}
export default Title