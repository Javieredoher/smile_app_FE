import React from 'react'
import PhotoProfile from '../../../assets/images/profileDefault.png'
import BottonMenu from '../BottonMenu'
import style from '../menu.module.css'

function Menu() {
  return (
    <div className={style.MenuProfConv}>

        <div className={style.DivImgProfile}>
            <img src={PhotoProfile} alt='Photo Profile'/>
        </div>

        <div className={style.Menu}>
            <BottonMenu value='Módulo clínico'/>
            <BottonMenu value='Cerrar sesión'/>
        </div>

    </div>
  )
}

export default Menu