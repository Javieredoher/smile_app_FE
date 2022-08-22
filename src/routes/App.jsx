import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import Appointments from '../pages/user/Appointments';
import { Profile } from '../pages/user/Profile';
import ClinicalModule from '../pages/profConv/ClinicalModule';
import OdClinicalModule from '../pages/odont/OdClinicalModule';
import RegisterEvolution from '../pages/regEvo/RegisterEvolution';

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
                exact path="/profile"
                element={<Profile/>}
                />
                
                <Route 
                exact path="/odont-clinical-module"
                element={<OdClinicalModule/>}
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