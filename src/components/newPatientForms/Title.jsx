import React from 'react'
import style from './general.module.css'

function Title ({value='' , icon=''}) {
  return (
    <div>
      <div className={style.DivTitle}>
         <p className={style.Tittle}>{value}</p>
      </div>
    </div>
    
  )
}
export default Title