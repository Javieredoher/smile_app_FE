import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from '../pages/login/LoginForm'
import Appointments from '../pages/user/Appointments'
import {Profile} from '../pages/user/Profile'
import ClinicalModule from '../pages/profConv/PcClinicalModule'
import OdClinicalModule from '../pages/odont/OdClinicalModule'
import NewAppointment from '../pages/odont/agenda/NewAppointment'
import RegisterEvolution from '../pages/regEvo/RegisterEvolution';
import GeneralInformation from '../pages/odont/newPatient/GeneralInfo'

const App = () => {
    return(
        <Router>
            <Routes>
                <Route 
                exact path="/login"
                element={<LoginForm/>}
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
                exact path="/odont-clinical-consult"
                element={<OdClinicalconsult/>}
                />
                 <Route 
                exact path="/odont-clinical-history"
                element={<OdClinicalhistory/>}
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
