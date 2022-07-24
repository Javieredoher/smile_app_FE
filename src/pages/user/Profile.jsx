import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProfileContent from '../../components/Home/user/content/ProfileContent'
import UserMenu from '../../components/menu/user/userMenu'
import style from '../styles/Clinical.module.css'

export const Profile = () => {
  return (
    <div>
        <Header/>
        <div className={style.HomeContent}>
          <UserMenu/>
          <ProfileContent/>
        </div>
        <Footer/>
    </div>
  )
}

