import React from 'react';
import Login from '../pages/Login';
import ClinicalModule from '../pages/odont/ClinicalModule';
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
            </Routes>
        </Router>
    )
}
export default App;