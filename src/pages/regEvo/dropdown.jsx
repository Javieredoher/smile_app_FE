import React,{useState} from "react";
import style from './reg.evolution.module.css'

function DropdownCUPS () {
    const [selects,setSelects]=useState();
        return (
            <div>
                <select className={style.Select} value={selects} onChange={e=>setSelects(e.target.value)}>
                <option className={style.Options}> Seleccione </option>
                    <option className={style.Options}> aaa </option>
                    <option className={style.Options}> bbb </option>
                    <option className={style.Options}> ccc </option>
                </select>
                <div>
                <h2 className={style.h2}>{selects}</h2>
                </div>
            </div>
        )
}

export default DropdownCUPS