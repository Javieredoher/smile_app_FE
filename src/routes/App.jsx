import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Appointments from '../pages/user/Appointments'
import {Profile} from '../pages/user/Profile'
import ClinicalModule from '../pages/profConv/ClinicalModule'
import OdClinicalModule from '../pages/odont/OdClinicalModule'
import CreateAppointment from '../pages/odont/agenda/createAppointment'
import RegisterEvolution from '../pages/regEvo/RegisterEvolution';
import GeneralInformation from '../pages/odont/addNewPatient/GeneralInformation'

const App = () => {
    return(
        <Router>
            <Routes>
                <Route 
                exact path="/login"
                element={<Login/>}
                />
                <Route 
                exact path="/clinical-module"
                element={<ClinicalModule/>}
                />
                <Route 
                exact path="/appointments"
                element={<Appointments/>}
                />
                <Route
                exact path="/general-information"
                element={<GeneralInformation/>}
                />
                <Route 
                exact path="/profile"
                element={<Profile/>}
                />
                
                <Route 
                exact path="/odont-clinical-module"
                element={<OdClinicalModule/>}
                />
                <Route 
                exact path="/create-appointment-module"
                element={<CreateAppointment/>}
                />
                <Route
                exact path="/register-evolution"
                element={<RegisterEvolution/>}
                />
            </Routes>
        </Router>
    )
}
export default App;
