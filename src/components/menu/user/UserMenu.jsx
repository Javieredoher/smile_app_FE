import React from 'react'
import style from '../menu.module.css'
import BottonMenu from '../BottonMenu'
import User from '../../../assets/images/user.png'

function UserMenu() {
  return (
    <div className={style.MenuProfConv}>

        <div className={style.DivImgProfile}>
            <img src={User} alt='User Icon'/>
        </div>

        <div className={style.Menu}>
            <BottonMenu value='Tu perfil'/>
            <BottonMenu value='Tus pagos'/>
            <BottonMenu value='Tus citas programadas'/>
            <BottonMenu value='Cerrar sesión'/>
        </div>
        
    </div>
  )
}

export default UserMenu