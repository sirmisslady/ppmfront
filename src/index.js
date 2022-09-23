import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
//import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";

//components
import PatientList from './components/list';
import Navbar from './components/navbar/Navbar';
import PatientForm from './components/PatientForm';
import PhoneForm from './components/PhoneForm';
import PatientsPhoneForm from './components/PatientsPhoneForm';
import Phonelist from './components/Phonelist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-4">
      <Routes>
        <Route path="/" element={<PatientList />}></Route>
        <Route path="/PatientForm" element={<PatientForm />}></Route>
        <Route path="/updatePatient/:id" element={<PatientForm />}></Route>
        <Route path="/PhoneForm" element={<PhoneForm />}></Route>
        <Route path="/updatePhone/:id" element={<PhoneForm />}></Route>
        <Route path="/PatientsPhoneForm" element={<PatientsPhoneForm />}></Route>
        <Route path="/Phonelist/:id" element={<Phonelist />}></Route>
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();