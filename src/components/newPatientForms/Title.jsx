import React from 'react'
import style from './general.module.css'

function Title ({value='' , icon=''}) {
  return (
    <div>
      <div className={style.DivTitle}>
         <h2 className={style.Title}>{value}</h2>
      </div>
    </div>
    
  )
}
export default Title