import React from 'react'
import style from './general.module.css'

function Fields ({className='', value='' , icon=''}) {
  return (
    <div className={className}>{value}
    </div>
    
  )
}
export default Fields