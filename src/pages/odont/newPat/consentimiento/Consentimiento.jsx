import React from 'react'
import style from './consentimiento.module.css'
import Title from '../../../../assets/styles/Title'
import Fields from '../../../../components/inputs/Fields'
import InfoField from '../../../../components/inputs/InfoField'


export const Consentimiento = () =>  {
    return(
    
        <div className={style.Div}>
            <Fields className={style.Label}
                value="Yo"
            />
            <InfoField className={style.InfoField}/>
            <Fields className={style.Label}
                value=" identificado con C.C. N°"
            />
            <InfoField className={style.InfoField}/>
            <Fields className={style.Label}
                value="de"
            />
            <InfoField className={style.InfoField}/>
            <Fields className={style.Label}
                value=" certifico que la información suministrada para la historia 
                clínica es verídica y acepto el tratamiento odontológico y me comprometo a 
                cancelar al término de cada procedimiento su respectivo valor."
            />
            <Fields className={style.Label}
                value=" Propuesto por la Dr. (a): "
            />
            <InfoField className={style.InfoField}/>
            <Fields className={style.Label}
                value=" identificado con C.C. N° "
            />
            <InfoField className={style.InfoField}/>
            <Fields className={style.Label}
                value="de"
            />
            <InfoField className={style.InfoField}/>
            <Fields className={style.Label}
                value=" En caso de no ser el tratamiento ideal, autorizo al mismo Dr. (a) a realizar el 
                tratamiento más conveniente, previa explicación del pro y los contra de dicho tratamiento 
                para el paciente."
            />
        </div>
)
}
export default Consentimiento