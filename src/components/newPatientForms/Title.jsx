import React from 'react'
import style from './general.module.css'

function Title ({value='' , icon=''}) {
  return (
    <div>
      <h2 className={style.Title}>{value}</h2>
    </div>
    
  )
}
export default Title