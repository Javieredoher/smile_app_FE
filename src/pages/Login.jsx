import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import LoginForm from '../components/loginForm/LoginForm'
import style from './styles/Login.module.css'

export const Login = () => {
  return (
    <div className={style.LoginPage}>
        <Header/>
        <LoginForm/>
        <div className={style.Footer}>
          <Footer/>
          </div> 
    </div>
  )
}

export default Login
