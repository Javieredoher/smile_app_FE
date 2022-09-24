import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import Appointments from '../pages/user/Appointments';
<<<<<<< HEAD
import { Profile } from '../pages/user/Profile';
import ClinicalModule from '../pages/profConv/ClinicalModule';
import OdClinicalModule from '../pages/odont/OdClinicalModule';
import OdClinicalconsult from '../pages/odont/OdClinicalconsult';
=======
import GeneralInformation from '../pages/odont/addNewPatient/GeneralInformation'

>>>>>>> 138a65f5b0cbbc4a9f98ed5f5a3749aef75257b4
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
<<<<<<< HEAD
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
=======
                <Route
                exact path="/general-information"
                element={<GeneralInformation/>}
>>>>>>> 138a65f5b0cbbc4a9f98ed5f5a3749aef75257b4
                />
            </Routes>
        </Router>
    )
}
export default App;