import React from 'react'
import style from './general.module.css'

function TitleFields ({value='' , icon=''}) {
  return (
    <div>
        <h4 className={style.TitleFields}>{value}</h4>
    </div>
    
  )
}
export default TitleFields