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
                        <th className={style.Encabezado2}><Title className={style.Title} value='N'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='A'/></th>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Labios - Mucosa labial"/></td>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td>
                            <td className={style.Celda2}><input type="radio" name='Labios - Mucosa labial'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Carillos"/></td>
                            <td className={style.Celda2}><input type="radio" name='Carillos'/></td>
                            <td className={style.Celda2}><input type="radio" name='Carillos'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Mucosa o surco vestibular"/></td>
                            <td className={style.Celda2}><input type="radio" name='Mucosa o surco vestibular'/></td>
                            <td className={style.Celda2}><input type="radio" name='Mucosa o surco vestibular'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Frenillos"/></td>
                            <td className={style.Celda2}><input type="radio" name='Frenillos'/></td>
                            <td className={style.Celda2}><input type="radio" name='Frenillos'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Encías"/></td>
                            <td className={style.Celda2}><input type="radio" name='Encías'/></td>
                            <td className={style.Celda2}><input type="radio" name='Encías'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Lenguas"/></td>
                            <td className={style.Celda2}><input type="radio" name='Lenguas'/></td>
                            <td className={style.Celda2}><input type="radio" name='Lenguas'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Paladar (Duro - Blando)"/></td>
                            <td className={style.Celda2}><input type="radio" name='Paladar (Duro - Blando)'/></td>
                            <td className={style.Celda2}><input type="radio" name='Paladar (Duro - Blando)'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Piso de boca"/></td>
                            <td className={style.Celda2}><input type="radio" name='Piso de boca'/></td>
                            <td className={style.Celda2}><input type="radio" name='Piso de boca'/></td>
                        </tr>
                        </table>
                    </div>
                    <div className={style.DivTable}>
                    <table className={style.Table}>
                        <tr>
                        <th className={style.Encabezado}><Title className={style.Title} value='EX. PERDIODONTAL'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='N'/></th>
                        <th className={style.Encabezado2}><Title className={style.Title} value='A'/></th>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Sangrado"/></td>
                            <td className={style.Celda2}><input type="radio" name='Sangrado'/></td>
                            <td className={style.Celda2}><input type="radio" name='Sangrado'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Pérdida de nivel de inserción"/></td>
                            <td className={style.Celda2}><input type="radio" name='Pérdida de nivel de inserción'/></td>
                            <td className={style.Celda2}><input type="radio" name='Pérdida de nivel de inserción'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Movilidad"/></td>
                            <td className={style.Celda2}><input type="radio" name='Movilidad'/></td>
                            <td className={style.Celda2}><input type="radio" name='Movilidad'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Bolsas"/></td>
                            <td className={style.Celda2}><input type="radio" name='Bolsas'/></td>
                            <td className={style.Celda2}><input type="radio" name='Bolsas'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Recersión gingival"/></td>
                            <td className={style.Celda2}><input type="radio" name='Recersión gingival'/></td>
                            <td className={style.Celda2}><input type="radio" name='Recersión gingival'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Lesión de furca"/></td>
                            <td className={style.Celda2}><input type="radio" name='Lesión de furca'/></td>
                            <td className={style.Celda2}><input type="radio" name='Lesión de furca'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Gingivitis"/></td>
                            <td className={style.Celda2}><input type="radio" name='Gingivitis'/></td>
                            <td className={style.Celda2}><input type="radio" name='Gingivitis'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Periodontitis"/></td>
                            <td className={style.Celda2}><input type="radio" name='Periodontitis'/></td>
                            <td className={style.Celda2}><input type="radio" name='Periodontitis'/></td>
                        </tr>
                        </table>
                    </div>
                    <div className={style.DivTable}>
                    <table className={style.Table}>
                        <tr>
                            <th className={style.Encabezado}><Title className={style.Title} value='EXÁMEN DENTAL'/></th>
                            <th className={style.Encabezado2}><Title className={style.Title} value='N'/></th>
                            <th className={style.Encabezado2}><Title className={style.Title} value='A'/></th>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Color"/></td>
                            <td className={style.Celda2}><input type="radio" name='Color'/></td>
                            <td className={style.Celda2}><input type="radio" name='Color'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Tamaño"/></td>
                            <td className={style.Celda2}><input type="radio" name='Tamaño'/></td>
                            <td className={style.Celda2}><input type="radio" name='Tamaño'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Forma"/></td>
                            <td className={style.Celda2}><input type="radio" name='Forma'/></td>
                            <td className={style.Celda2}><input type="radio" name='Forma'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Estructura"/></td>
                            <td className={style.Celda2}><input type="radio" name='Estructura'/></td>
                            <td className={style.Celda2}><input type="radio" name='Estructura'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Número"/></td>
                            <td className={style.Celda2}><input type="radio" name='Número'/></td>
                            <td className={style.Celda2}><input type="radio" name='Número'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Malposiciones"/></td>
                            <td className={style.Celda2}><input type="radio" name='Malposiciones'/></td>
                            <td className={style.Celda2}><input type="radio" name='Malposiciones'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Desgastes"/></td>
                            <td className={style.Celda2}><input type="radio" name='Desgastes'/></td>
                            <td className={style.Celda2}><input type="radio" name='Desgastes'/></td>
                        </tr>
                        <tr>
                            <td className={style.Celda}>
                            <Fields className={style.Label} value="Clase o"/></td>
                            <td className={style.Celda2}><input type="radio" name='Clase de oculsión'/></td>
                            <td className={style.Celda2}><input type="radio" name='Clase de oculsión'/></td>
                        </tr>
                        </table>
                    </div>
                </div>
                <div className={style.Observaciones}>
                    <Fields className={style.LabelObv} value='OBSERVACIONES:'/>
                    <textarea className={style.Input}/>
                </div>
        </div>
    )
}

export default Examen