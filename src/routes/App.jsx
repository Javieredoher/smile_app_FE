import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import ClinicalModule from '../pages/odont/ClinicalModule';
import Appointments from '../pages/user/Appointments';
import { Profile } from '../pages/user/Profile';

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
            </Routes>
        </Router>
    )
}
export default App;