import React from 'react'

import style from './reg.evolution.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../components/Home/Title'

export const RegisterEvolution = () => {
    return (
        <div className={style.REcontent}>
            <div className={style.Header}>
            <Header/>
                </div>
            <div className={style.Title}>
                <Title value='REGISTRAR EVOLUCIÓN'/>
                </div>
            <Footer/>
        </div>
    )
}
export default RegisterEvolution