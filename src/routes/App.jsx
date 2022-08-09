import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import Appointments from '../pages/user/Appointments';
import { Profile } from '../pages/user/Profile';
import ClinicalModule from '../pages/profConv/ClinicalModule';
import OdClinicalModule from '../pages/odont/OdClinicalModule';
import Appointments_table from '../components/table/appointments_table/Appointments_table';

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
                exact path="/appointments_table"
                element={<Appointments_table/>}
                />

                <Route 
                exact path="/profile"
                element={<Profile/>}
                />
                
                <Route 
                exact path="/odont-clinical-module"
                element={<OdClinicalModule/>}
                />
            </Routes>
        </Router>
    )
}
export default App;