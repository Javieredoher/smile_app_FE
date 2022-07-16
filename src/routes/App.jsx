import React from 'react';
import Login from '../pages/Login';
import ClinicalModule from '../pages/profConv/ClinicalModule';
import OdClinicalModule from '../pages/odont/OdClinicalModule';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                exact path="/odont-clinical-module"
                element={<OdClinicalModule/>}
                />
            </Routes>
        </Router>
    )
}
export default App;