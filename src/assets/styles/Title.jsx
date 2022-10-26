import React from 'react'
import style from '../styles/global.css'

function Title({className='' , value=''}) {
  return (
    <h1 className={className}>{value}</h1>
  )
}
export default Title