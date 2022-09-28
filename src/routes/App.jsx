import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import Appointments from '../pages/user/Appointments';
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
            </Routes>
        </Router>
    )
}
export default App;