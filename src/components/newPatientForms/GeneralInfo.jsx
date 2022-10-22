import React from "react"
import style from "../newPatientForms/general.module.css"
import Title from "../newPatientForms/Title"
import Input from "../newPatientForms/InputsForm"
import Fields from "./Fields"
import newPatient from "../../assets/images/newPatient.png"


function GeneralInfo() {

 return (
  <div className={style.Content}>
    <div className={style.DivTittle}>
      <Title value='REGISTRAR NUEVO PACIENTE'/>
      <img className={style.Img} src={newPatient} alt="Icon Nuevo Paciente"/>   
    </div>
    <div className={style.DivSubtitulo}>
        <h3>I. INFORMACIÓN GENERAL</h3>
    </div>
    <form>   
        <div className={style.DivInputAlert}>
          <Fields className={style.TittleAlert} value='ALERTA MÉDICA'/>
          <Input className={style.InputAlert} name="Alert" placeholder=" Describa afecciones importantes del paciente" label="Alert"/>
        </div>
        <div className={style.DivInputs}>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields} value='1er Apellido'/>
            <Input className={style.Input} name="firstSurname" placeholder=" 1er Apellido" label="1er Apellido"/>
            <Fields className={style.TittleFields} value='2do Apellido'/>
            <Input className={style.Input} name="secondSurname" placeholder=" 2do Apellido" label="2do Apellido"/>
          </div>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields} value='1er Nombre'/>
            <Input className={style.Input} name="firtsname" placeholder=" 1er nombre" label="1er nombre"/>
            <Fields className={style.TittleFields} value='2do Nombre'/>
            <Input className={style.Input} name="secondname" placeholder=" 2do nombre" label="2do nombre"/>
          </div> 
        </div>
        <div className={style.DivInputs}>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields4} value='Tipo ID'/>
            <Input className={style.Input4} type="list" name="TId" placeholder=" Seleccione" label="Seleccione"/>
            <Fields className={style.TittleFields4} value='N° de ID'/>
            <Input className={style.Input} type="number" name="numberId" placeholder=" N° de ID" label="N° de ID"/>
          </div>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields2} value='Fecha Nacimiento'/>
            <Input className={style.Input} type="date" name="dateofbirth" placeholder=" dd/mm/aaaa" label="dd/mm/aaaa"/>
            <Fields className={style.TittleFields5} value='Edad'/>
            <Input className={style.Input4} name="age" placeholder=" Edad" label="Edad"/>
          </div> 
        </div>
        <div className={style.DivInputs}>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields} value='Estado civil'/>
            <Input className={style.Input6} name="ecivil" placeholder=" Seleccione" label="Seleccione"/>
            <Fields className={style.TittleFields3} value='Género'/>
            <Input className={style.Input} name="genero" placeholder=" Seleccione" label="Seleccione"/>
          </div>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields3} value='N° Fijo'/>
            <Input className={style.Input6} name="landlinenumber" placeholder=" Tel fijo" label="Tel fijo"/>
            <Fields className={style.TittleFields} value='N° celular'/>
            <Input className={style.Input6} name="cellphonenumber" placeholder=" Número celular" label="Número celular"/>
          </div> 
        </div>
        <div className={style.DivInputs}>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields} value='Dirección'/>
            <Input className={style.Input5} name="direction" placeholder=" Dirección domicilio" label="Dirección domicilio"/>
          </div>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields5} value='Barrio'/>
            <Input className={style.Input} name="barrio" placeholder=" Barrio" label="Barrio"/>
            <Fields className={style.TittleFields5} value='Estrato'/>
            <Input className={style.Input4} name="estrato" placeholder=" Seleccione" label="Seleccione"/>
          </div> 
        </div>
        <div className={style.DivInputs}>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields3} value='Ocupación'/>
            <Input className={style.Input} name="ocupation" placeholder=" Ocupación" label="Ocupación"/>
            <Fields className={style.TittleFields3} value='Empresa'/>
            <Input className={style.Input} name="company" placeholder=" Empresa" label="Empresa"/>
          </div>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields3} value='Régimen'/>
            <Input className={style.Input} name="eps" placeholder=" Seleccione" label="Seleccione"/>
            <Fields className={style.TittleFields4} value='¿Cuál?'/>
            <Input className={style.Input} name="epsname" placeholder=" Seleccione" label="Seleccione"/>
          </div> 
        </div>
        <div className={style.DivInputs}>
          <div className={style.DivInputs3}>
            <Fields className={style.TittleFields} value='Acudiente'/>
            <Input className={style.Input2} name="acudiente" placeholder=" Nombre acudiente" label="Nombre acudiente"/>
          </div>
          <div className={style.DivInputs2}>
            <Fields className={style.TittleFields3} value='Parentesco'/>
            <Input className={style.Input} name="parentesco" placeholder=" Seleccione" label="Seleccione"/>
            <Fields className={style.TittleFields3} value='N° Celular'/>
            <Input className={style.Input} name="cellphonenumber2" placeholder=" N° Celular" label="N° Celular"/>
          </div> 
        </div>
    </form>

        
  </div>

    

      
    )
  }
  
  export default GeneralInfo