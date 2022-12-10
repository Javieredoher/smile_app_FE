import React from 'react'
import style from "./Recovernewpassword.module.css"
import Input from '../../components/inputs/InputsForm'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function  Recovernewpassword() {
  return (
    <div className={style.LoginPage}>
    <Header/>
    <div className={style.LoginForm}>
          <h1 className={style.LoginTitle}>Recuperar contraseña</h1>
          <form className={style.Form}>
            <div className={style.DivInput}>
              <h3>Nueva contraseña</h3>
              <Input className={style.Input}
              label = 'Nueva contraseña'
              placeholder= 'Nueva contraseña'
              name = 'Contraseña'
              />
            </div>
            <div className={style.DivInput}>
              <h3>Verifica nueva contraseña</h3>
              <Input className={style.Input}
              label = ''
              placeholder= 'verificacion'
              name = 'password'
              />
            </div>
          </form>
        
          <div className={style.DivButton}>
            <Button className={style.ButtonInput} value='Confirmar'/>
          </div>
    </div>
    <div className={style.Footer}>
          <Footer/>
          </div> 
  </div>
  )
}

export default  Recovernewpassword