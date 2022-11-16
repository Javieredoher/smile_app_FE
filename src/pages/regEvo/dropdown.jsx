import React,{useState} from "react";
import style from './reg.evolution.module.css'

function DropdownCUPS () {
    const [selects,setSelects]=useState();
        return (
            <div className={style.DivDropdown}>
                    <select className={style.Select} value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option className={style.Options}> Seleccione </option>
                            <option className={style.Options}> 890203: Consulta Primera vez odontología general
</option>
                            <option className={style.Options}> 890204: Consulta Primera vez otras especialidades odontologia
</option>
                            <option className={style.Options}> 890303: Consulta control odontología general </option>
                            <option className={style.Options}> 890304: Consulta control otras especialidades odontología
</option>
                            <option className={style.Options}> 890703: Consulta urgencias odontología general
</option>
                            <option className={style.Options}> 997310: Control placa dental
</option>
                            <option className={style.Options}> 990212: Higiene oral
</option>
                            <option className={style.Options}> 232102: Obturación dental con resina de fotocurado
</option>
                            <option className={style.Options}> 232103: Obturación dental con ionómero de vidrio
</option>
                            <option className={style.Options}> 232403: Reconstrucción dental
</option>
                            <option className={style.Options}> 232300: Colocación pin milimétrico
</option>
                            <option className={style.Options}> 234102: Colocación de corona en policarboxilato
</option>
                            <option className={style.Options}> 234104: Colocación de corona acrílica termocurada
</option>
                            <option className={style.Options}> 234201: Colocación protesis fija
</option>
                            <option className={style.Options}> 234204: Reparación prótesis fija </option>
                            <option className={style.Options}> 240200: Detartraje subgingival </option>
                            <option className={style.Options}> 230101: Exodoncia diente permanente unirradicular </option>
                            <option className={style.Options}> 230102: Exodoncia diente permanente multirradicular </option>
                            <option className={style.Options}> 230201: Exodoncia diente temporal unirradicular </option>
                            <option className={style.Options}> 230202: Exodoncia diente temporal multirradicular </option>
                            </select>
                    <h2 className={style.h2}>{selects}</h2>
                </div>
        )
}

export default DropdownCUPS