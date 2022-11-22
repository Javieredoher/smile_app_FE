import React from 'react'
import style from "./revoverpasswordcode.module.css"
import Input from '../../components/inputs/InputsForm'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Recoverpasswordcode() {
  return (
    <div className={style.LoginPage}>
    <Header/>
    <div className={style.Recoveremailpassword}>
          <h1 className={style.LoginTitle}>Recuperar Contraseña</h1>
          <form className={style.Form}>
            <div className={style.DivInput}>
              <h3>Ingrese su correo electrónico</h3>
              <Input className={style.Input}
              label = 'Ingrese su correo electronico'
              placeholder= 'Ingrese su correo electronico'
              name = 'email'
              />
            </div>
          </form>
          <div className={style.DivButton}>
            <Button className={style.ButtonInput} value='Enviar código'/>
          </div>
    </div>
    <div className={style.Footer}>
          <Footer/>
          </div> 
  </div>
  )
}

export default Recoverpasswordcode
