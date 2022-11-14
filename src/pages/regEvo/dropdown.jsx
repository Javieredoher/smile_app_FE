import React,{useState} from "react";
import style from './reg.evolution.module.css'

function DropdownCUPS () {
    const [selects,setSelects]=useState();
        return (
            <div className={style.DivDropdown}>
                    <select className={style.Select} value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option className={style.Options}> Seleccione </option>
                            <option className={style.Options}> Código CUPS </option>
                            <option className={style.Options}> Código CUPS </option>
                            <option className={style.Options}> Código CUPS </option>
                            <option className={style.Options}> Código CUPS </option>
                            <option className={style.Options}> Código CUPS </option>
                            <option className={style.Options}> Código CUPS </option>
                            <option className={style.Options}> Código CUPS </option>
                            </select>
                    <h2 className={style.h2}>{selects}</h2>
                </div>
        )
}

export default DropdownCUPS