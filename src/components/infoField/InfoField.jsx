import React from 'react'
import style from "./infoField.module.css"

function InfoField({value=''}) {
  return (
    <>
        <p
        className={style.Info}
        >
        {value}
        </p>
    </>
  )
}

export default InfoField