import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from '../pages/login/LoginForm'
import {Profile} from '../pages/user/Profile'
import ClinicalModule from '../pages/profConv/PcClinicalModule'
import OdClinicalModule from '../pages/odont/OdClinicalModule'
import RegisterEvolution from '../pages/regEvo/RegisterEvolution'
import SearchHC from '../pages/odont/searchHC/SearchHC'
import IdEvo from '../pages/regEvo/idEvo/IdEvo'
import DatesHC  from '../pages/odont/searchHC/datesHC'
import Recoveremailpassword from '../pages/login/Recoveremailpassword'
import Recovernewpassword from '../pages/login/Recovernewpassword'
import Recoverpasswordcode from '../pages/login/Recoverpasswordcode'
import NewPatient from '../pages/odont/newPat/newPatient'

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
                exact path="/profile"
                element={<Profile/>}
                />
                <Route 
                exact path="/odont-clinical-module"
                element={<OdClinicalModule/>}
                />
                <Route 
                exact path="/odont-clinical-history"
                element={<SearchHC/>}
                />
                <Route 
                exact path="/odont-clinical-consult"
                element={<IdEvo/>}
                />
                <Route
                exact path="/register-evolution"
                element={<RegisterEvolution/>}
                />
                <Route
                exact path="/odont-dates-history"
                element={<DatesHC/>}
                />
                <Route
                exact path="/recover-email-password"
                element={<Recoveremailpassword/>}
                />
                <Route
                exact path="/recover-new-password"
                element={<Recovernewpassword/>}
                />
                <Route
                exact path="/recover-password-code"
                element={<Recoverpasswordcode/>}
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
