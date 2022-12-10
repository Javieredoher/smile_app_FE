import React,{useState} from "react";
import style from './diagnostico.module.css'

function CIE10 () {
  const [selects,setSelects]=useState();
    return (
      <div>
        <select className={style.Input3} value={selects} onChange={e=>setSelects(e.target.value)}>
          <option className={style.Options}> Seleccione </option>
              <option className={style.Options}> K008: otros transtornos del desarrollo de los dientes</option>
              <option className={style.Options}> K020: caries limitada al esmalte</option>
              <option className={style.Options}> K021: caries de la dentina</option>
              <option className={style.Options}> K022: caries del cemento</option>
              <option className={style.Options}> K023: caries dentaria detenida</option>
              <option className={style.Options}> K029: Caries dental, no especificada</option>
              <option className={style.Options}> K040: Pulpitis</option>
              <option className={style.Options}> K050: Gingivitis</option>
              <option className={style.Options}> K054: Periodontitis</option>
              <option className={style.Options}> K073: Anomalias de la posición del diente</option>  
              <option className={style.Options}> K081: Pérdida de pieza dental</option>
              <option className={style.Options}> K083: Raiz dental retenida</option>
              <option className={style.Options}> S025: Fractura dental</option>
              <option className={style.Options}> Z012: Examen odontológico general</option>                 
        </select>
      </div>
  )
}

export default CIE10