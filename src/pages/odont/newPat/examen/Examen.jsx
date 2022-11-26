import React from "react";
import style from './examen.module.css'
import Input from "../../../../components/inputs/InputsForm";
import Title from "../../../../assets/styles/Title";
import Fields from "../../../../components/inputs/Fields";

export const Examen = () => {
    return (
        <div className={style.REcontent}>
            <div className={style.DivSubtitulo}>
            <h3>VI. EXÁMEN ODONTOLÓGICO</h3>
            </div>
                <div className={style.Tables}>
                    <div className={style.DivTable}>
                    <table className={style.Table}>
                        <tr>
                        <th className={style.Encabezado}><Title className={style.Title} value='EX. INTRAORAL'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='SÍ'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='NO'/></th>
                        </tr>
                            <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Labios - Mucosa labial"/>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td>   
                            </td>
                            </tr>
                        </table>
                    </div>
                    <div className={style.DivTable}>
                    <table className={style.Table}>
                        <tr>
                        <th className={style.Encabezado}><Title className={style.Title} value='EX. PERDIODONTAL'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='SÍ'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='NO'/></th>
                        </tr>
                            <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Labios - Mucosa labial"/>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td>   
                            </td>
                            </tr>
                        </table>
                    </div>
                    <div className={style.DivTable}>
                    <table className={style.Table}>
                        <tr>
                        <th className={style.Encabezado}><Title className={style.Title} value='EXÁMEN DENTAL'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='SÍasdsdfssgd'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='NO'/></th>
                        </tr>
                            <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Labios - Mucosa labial"/>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td> 
                            </td>
                            </tr>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Examen