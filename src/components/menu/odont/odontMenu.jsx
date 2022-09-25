import React from 'react'
import PhotoProfile from '../../../assets/images/profileDefault.png'
import BottonMenu from '../BottonMenu'
import style from '../menu.module.css'

function odontMenu() {
  return (
    <div className={style.MenuProfConv}>

        <div className={style.DivImgProfile}>
            <img src={PhotoProfile} alt='Photo Profile'/>
        </div>

        <div className={style.Menu}>
            <BottonMenu value='Agenda'/>
            <BottonMenu value='Módulo clínico'/>
            <BottonMenu value='Informe RIPS'/>
            <BottonMenu value='Módulo pagos'/>
            <BottonMenu value='Cerrar sesión'/>
        </div>

    </div>
  )
}

export default odontMenu