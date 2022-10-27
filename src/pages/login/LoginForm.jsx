import React from 'react'
import style from "./loginForm.module.css"
import Input from '../../components/inputs/InputsForm'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function LoginForm() {
  return (
    <div className={style.LoginPage}>
    <Header/>
    <div className={style.LoginForm}>
          <h1 className={style.LoginTitle}>Iniciar Sesión</h1>
          <form>
            <div className={style.DivInput}>
              <h3>Usuario</h3>
              <Input className={style.Input}
              label = 'Ingrese su usuario'
              placeholder= 'Ingrese su usuario'
              name = 'user'
              />
            </div>
            <div className={style.DivInput}>
              <h3>Contraseña</h3>
              <Input className={style.Input}
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
    <div className={style.Footer}>
          <Footer/>
          </div> 
  </div>
  )
}

export default LoginForm