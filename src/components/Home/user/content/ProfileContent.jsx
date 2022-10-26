import React from 'react'
import style from '../../content.module.css'
import Title from '../../../../assets/styles/Title'
import InfoField from '../../../infoField/InfoField'
import StyleContent from './styleContent.module.css'


function ProfileContent() {
  return (
    <div className={style.Content}> 
        <div className={style.DivTitle}>
            <Title value='TU PERFIL' />
        </div>
        <ul className={StyleContent.DivList}>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Tipo y n° de documento</p> <InfoField value = "1095453165"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Nombres</p> <InfoField value = "Pepita"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Apellidos</p> <InfoField value = "Acosta"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Teléfono</p><InfoField value = "3112224444"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Correo electrónico</p><InfoField value = "email@mail.com"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>EPS</p><InfoField value = "Gomitas S.A.S."/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Sexo</p><InfoField value = "Femenino"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Fecha de nacimiento</p><InfoField value = "2004-02-29"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Ciudad - Barrio</p><InfoField value = "Flordiblanca - Santa Helena"/></li>
          <li className={StyleContent.ItemList}><p className={StyleContent.PList}>Ocupación</p><InfoField value = "Estudiante"/></li>
        </ul>
    </div>
  )
}

export default ProfileContent