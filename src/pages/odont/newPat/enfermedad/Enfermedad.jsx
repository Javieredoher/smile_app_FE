import React from 'react'
import style from './enfermedad.module.css'
import Fields from '../../../../components/inputs/Fields'
import Title from '../../../../assets/styles/Title'

export const Enfermedad = () =>  {
    return (
        <div className={style.REcontent}>
            <div className={style.DivSubtitulo}>
            <h3>II. MOTIVO DE CONSULTA</h3>
            </div>
                <div className={style.DivInput}>
                <textarea className={style.Input} name="Input" placeholder="Sintomatología principal, tiempo de evolución, tratamientos recibidos"/>
                </div>
            <div className={style.DivSubtitulo}>
            <h3>III. HISTORIA CLÍNICA DE LA ENFERMEDAD ACTUAL</h3>
            </div>
                <div className={style.DivInput}>
                <textarea className={style.Input} name="Input" placeholder="Describa..."/>
                </div>
            <div className={style.DivSubtitulo}>
            <h3>IV. IDENTIFICACIÓN DEL ORIGEN DE LA ENFERMEDAD O ACCIDENTE</h3>
            </div>
            <div className={style.DivTable}>
                <table className={style.Table}>
                    <tr>
                    <th className={style.Encabezado}><Title className={style.Title} value='ORIGEN'/></th>
                    <th className={style.Encabezado}><Title className={style.Title} value='HALLAZGO'/></th>
                    </tr>
                        <tr>
                        <td className={style.Celda}>
                            <Fields className={style.Label} value='Paciente sano'/></td>
                            <td className={style.Celda2}>
                            <textarea className={style.InputTable}/></td>
                        </tr>
                        <tr>
                        <td className={style.Celda}>
                            <Fields className={style.Label} value='Enfermedad general o común'/></td>
                            <td className={style.Celda2}>
                            <textarea className={style.InputTable}/></td>
                        </tr>
                        <tr>
                        <td className={style.Celda}>
                            <Fields className={style.Label} value='Enfermedad profesional u ocupacional'/></td>
                            <td className={style.Celda2}>
                            <textarea className={style.InputTable}/></td>
                        </tr>
                        <tr>
                        <td className={style.Celda}>
                            <Fields className={style.Label} value='Accidente de trabajo'/></td>
                            <td className={style.Celda2}>
                            <textarea className={style.InputTable}/></td>
                        </tr>
                        <tr>
                        <td className={style.Celda}>
                            <Fields className={style.Label} value='Accidente no de trabajo o fuera del trabajo'/></td>
                            <td className={style.Celda2}>
                            <textarea className={style.InputTable}/></td>
                        </tr>
                </table>
            </div>
        </div>
    )
}

export default Enfermedad