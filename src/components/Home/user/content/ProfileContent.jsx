import React from 'react'
import style from '../../content.module.css'
import Title from '../../../../assets/styles/Title'
import InfoField from '../../../inputs/InfoField'
import StyleContent from './profile.content.module.css'


function ProfileContent() {
  return (
    <div className={style.Content}> 
        <div className={style.DivTitle}>
            <Title value='TU PERFIL' />
        </div>
        <ul className={StyleContent.DivList}>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Tipo y n° de documento</p> <InfoField className={style.Info} value = "1095453165"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Nombres</p> <InfoField className={style.Info} value = "Pepita"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Apellidos</p> <InfoField className={style.Info} value = "Acosta"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Teléfono</p><InfoField className={style.Info} value = "3112224444"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Correo electrónico</p><InfoField className={style.Info} value = "email@mail.com"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>EPS</p><InfoField className={style.Info} value = "Gomitas S.A.S."/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Sexo</p><InfoField className={style.Info} value = "Femenino"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Fecha de nacimiento</p><InfoField className={style.Info} value = "2004-02-29"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Ciudad - Barrio</p><InfoField className={style.Info} value = "Flordiblanca - Santa Helena"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Ocupación</p><InfoField className={style.Info} value = "Estudiante"/></li>
        </ul>
    </div>
  )
}

export default ProfileContent