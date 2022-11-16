import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from '../pages/login/LoginForm'
import Appointments from '../pages/user/Appointments'
import {Profile} from '../pages/user/Profile'
import ClinicalModule from '../pages/profConv/PcClinicalModule'
import OdClinicalModule from '../pages/odont/OdClinicalModule'
import CreateAppointment from '../pages/odont/agenda/NewAppointment'
import RegisterEvolution from '../pages/regEvo/RegisterEvolution'
import SearchHC from '../pages/odont/searchHC/SearchHC'
import IdEvo from '../pages/regEvo/idEvo/IdEvo'
import NewPatient from '../pages/odont/newPat/newPatient'
import Anamnesis from '../pages/odont/newPat/anamnesis/Anamnesis'

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
                exact path="/profile"
                element={<Profile/>}
                />
                <Route 
                exact path="/odont-clinical-module"
                element={<OdClinicalModule/>}
                />
                <Route 
                exact path="/odont-clinical-consult"
                element={<SearchHC/>}
                />
                <Route 
                exact path="/odont-clinical-history"
                element={<IdEvo/>}
                />
                <Route
                exact path="/register-evolution"
                element={<RegisterEvolution/>}
                />
                <Route
                exact path="/anamnesis-module"
                element={<Anamnesis/>}
                />
                <Route
                exact path="/new-patient"
                element={<NewPatient/>}
                />
            </Routes>
        </Router>
    )
}
export default App
