import React from "react"
import style from "./general.module.css"
import Title from "../../../assets/styles/Title"
import Input from "../../../components/inputs/InputsForm"
import Fields from "../../../components/inputs/Fields"
import newPatient from "../../../assets/images/newPatient.png"
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import Button from "../../../components/button/Button"


function GeneralInfo() {

 return (
  <div className={style.REcontent}>
    <div className={style.Header}>
      <Header/>
    </div>
      <div className={style.DivTitle}>
          <Title value='REGISTRAR NUEVO PACIENTE'/>
          <img className={style.Img} src={newPatient} alt="Icon Nuevo Paciente"/>   
        </div>
      <div className={style.DivSubtitulo}>
          <h3>I. INFORMACIÓN GENERAL</h3>
      </div>
            <div className={style.DivData}>
              <Fields className={style.Label} value='ALERTA MÉDICA'/>
              <Input className={style.InputAlert} name="Alert" placeholder=" Describa afecciones importantes del paciente" label="Alert"/>
            </div>
            <div className={style.DivData}>
                <Fields className={style.Label} value='Primer Apellido'/>
                <Input className={style.Input} name="firstSurname" placeholder=" Primer Apellido" label="1er Apellido"/>
                <Fields className={style.Label} value='Segundo Apellido'/>
                <Input className={style.Input} name="secondSurname" placeholder=" Segundo Apellido" label="2do Apellido"/>
            </div>
            <div className={style.DivData}>
                <Fields className={style.Label} value='Primer Nombre'/>
                <Input className={style.Input} name="firtsname" placeholder=" Primer nombre" label="1er nombre"/>
                <Fields className={style.Label} value='Segundo Nombre'/>
                <Input className={style.Input} name="secondname" placeholder=" Segundo nombre" label="2do nombre"/>
            </div>
              <div className={style.DivData}>
                <Fields className={style.Label} value='Tipo de documento'/>
                      <select className={style.Input2} name="TId" placeholder=" Seleccione" label="Seleccione">
                          <option value="0">Seleccione</option>
                          <option value="CC">Cédula de ciudadanía</option>
                          <option value="CE">Cédula de extrajería</option>
                          <option value="RC">Registro Civil</option>
                          <option value="TI">Tarjeta de Identidad</option>
                          <option value="PA">Pasaporte</option>
                      </select>
                <Fields className={style.Label} value='Número de documento'/>
                <Input className={style.Input} name="numberId" placeholder=" Número de documento" label="N° de ID"/>
              </div>
              <div className={style.DivData}>
                <Fields className={style.Label} value='Fecha de Nacimiento'/>
                <Input className={style.Input2} type="date" name="dateofbirth" placeholder=" dd/mm/aaaa" label="dd/mm/aaaa"/>
                <Fields className={style.Label} value='Edad'/>
                <Input className={style.Input3} name="age" placeholder=" Edad" label="Edad"/>
                <Fields className={style.Label} value='Estado civil'/>
                      <select className={style.Input3} name="ecivil" placeholder=" Seleccione" label="Seleccione">
                          <option value="0">Seleccione</option>
                          <option value="Soltero">Soltero (a)</option>
                          <option value="Casado">Casado (a)</option>
                          <option value="Divorciado">Divorciado (a)</option>
                          <option value="Unión libre">Unión libre</option>
                      </select>
                <Fields className={style.Label} value='Género'/>
                      <select className={style.Input3} name="genero" placeholder=" Seleccione" label="Seleccione">
                          <option value="0">Seleccione</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                      </select>
            </div>
            <div className={style.DivData}>
                <Fields className={style.Label} value='Teléfono Fijo'/>
                <Input className={style.Input} name="landlinenumber" placeholder=" Número tel fijo" label="Tel fijo"/>
                <Fields className={style.Label} value='Número celular'/>
                <Input className={style.Input} name="cellphonenumber" placeholder=" Número de celular" label="Número celular"/>
            </div> 
            <div className={style.DivData}>
                <Fields className={style.Label} value='Dirección'/>
                <Input className={style.Input4} name="direction" placeholder=" Dirección de domicilio" label="Dirección domicilio"/>
                <Fields className={style.Label} value='Barrio'/>
                <Input className={style.Input2} name="barrio" placeholder=" Barrio" label="Barrio"/>
                <Fields className={style.Label} value='Estrato'/>
                      <select className={style.Input3} name="estrato" placeholder=" Seleccione" label="Seleccione">
                          <option value="0">Seleccione</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                      </select>
                
            </div>
            <div className={style.DivData}>
                <Fields className={style.Label} value='Ocupación'/>
                <Input className={style.Input6} name="ocupation" placeholder=" Ocupación" label="Ocupación"/>
                <Fields className={style.Label} value='Empresa'/>
                <Input className={style.Input6} name="company" placeholder=" Empresa" label="Empresa"/>
            </div>
            <div className={style.DivData}>
                <Fields className={style.Label} value='Régimen'/>
                      <select className={style.Input6} name="eps" placeholder=" Seleccione" label="Seleccione">
                          <option value="0">Seleccione</option>
                          <option value="C">Contributivo</option>
                          <option value="S">Subsidiado</option>
                      </select>
                <Fields className={style.Label} value='Nombre EPS'/>
                <Input className={style.Input6} name="epsname" placeholder=" Seleccione" label="Seleccione"/>
            </div>
            <div className={style.DivData}>
                <Fields className={style.Label} value='Acudiente o acompañante'/>
                <Input className={style.Input5} name="acudiente" placeholder=" Nombre acudiente o acompañante" label="Nombre acudiente"/>
            </div>
            <div className={style.DivData}>
                <Fields className={style.Label} value='Parentesco'/>
                      <select className={style.Input} name="parentesco" placeholder=" Seleccione" label="Seleccione">
                          <option value="0">Seleccione</option>
                          <option value="a">Esposo/Esposa</option>
                          <option value="b">Mamá/Papá</option>
                          <option value="c">Hermano/Hermana</option>
                          <option value="d">Primo</option>
                          <option value="e">Novio/Novia</option>
                          <option value="F">Otro</option>
                      </select>
                <Fields className={style.Label} value='N° Celular'/>
                <Input className={style.Input} name="cellphonenumber2" placeholder=" Número de Celular" label="N° Celular"/>
            </div>
            <div className={style.DivData}>
              <Button className={style.Button} value='Anterior'/>
              <Button className={style.Button} value='Siguiente'/>
            </div>
    <div className={style.Footer}>
      <Footer/>
    </div>
  </div>

    )
  }
  
  export default GeneralInfo