import React from 'react'
import {useState} from 'react';
import style from './menu.module.css'

function BottonMenu({value= ''}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    console.log('Changing state')
    setIsActive(current => !current)
  };



  return (
    <div className={isActive? style.BottonMenuActive: style.BottonMenu} onClick={handleClick}> {value} </div>
  )
}

export default BottonMenu