import React from 'react'
import style from "./loginForm.module.css"
import Input from './Input'
import Button from '../button/Button'

function LoginForm() {
  return (
    <div className={style.LoginForm}>
        <h1 className={style.LoginTitle}>Iniciar Sesión</h1>
        <form>
          <div className={style.DivInput}>
            <h3>Usuario</h3>
            <Input
            label = 'Ingrese su usuario'
            placeholder= 'Ingrese su usuario'
            name = 'user'
            />
          </div>
          <div className={style.DivInput}>
            <h3>Contraseña</h3>
            <Input
            label = 'Ingrese su contraseña'
            placeholder= 'Ingrese su contraseña'
            name = 'password'
            />
          </div>
        </form>
        <i className={style.Forgot}>¿Olvidaste la contraseña?</i>
        <div className={style.DivButton}>
          <Button className={style.ButtonInput} value='Ingresar'/>
        </div>
    </div>
  )
}

export default LoginForm