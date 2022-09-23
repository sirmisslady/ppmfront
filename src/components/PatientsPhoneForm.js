import React, { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";

import * as PatientServer from './PatientServer';
//import * as PhoneServer from './PhoneServer';

//component
import PatientItem from "./PatientItem";

const PatientsPhoneForm=()=>{

    const navigate = useNavigate();

    const [patients, setPatients] = useState([]);

    const [phones, setPhones] = useState([]);

    const initialState = {id:0, nombre:""};

    const initialState2 = {id:0, phone:""};

    const [patient, setPatient]=useState(initialState);
    
    const [phone, setPhone]=useState(initialState2);

    const handleInputChange=(e)=>{
        setPatient({ ...patient, [e.target.name]: e.target.options[e.target.selectedIndex].id});
        console.log(e.target.options[e.target.selectedIndex].id)
    };

    const handleInputChangePhone=(e)=>{
        setPhone({ ...phone, [e.target.name]: e.target.options[e.target.selectedIndex].id});
        console.log(e.target.options[e.target.selectedIndex].id)
    };

    const listPatients=async()=>{
        try{
            const res= await PatientServer.listPatients();
            const data=await res.json();
            setPatients(data);
            //console.log(data);
        }catch(error){
            console.log(error);
        }
    };

    const listPhones=async()=>{
        try{
            const res= await PatientServer.listPhones();
            const data=await res.json();
            setPhones(data);
            //console.log(data);
        }catch(error){
            console.log(error);
        }
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            let res;
            console.log(patient);
            console.log(phone);
            res = await PatientServer.registerPatientPhone(patient, phone);
            const data= await res.json();
            console.log(data);
            //if(data.message=="Success"){
                setPatient(initialState);
            //}
            //navigate("/");
        } catch (error) {
            
        }
    };

    useEffect(()=>{
        listPatients();
    },[]);

    useEffect(()=>{
        listPhones();
    },[]);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Patient</label>
                    <select className="form-select" aria-label="Default select example" name="paciente" onChange={handleInputChange}>
                        {patients.map((patient)=>(
                            <option key={patient.id} id={patient.id}>{patient.apellido_pat} {patient.apellido_mat} {patient.nombre}</option>
                        ))}
                    </select><br></br>
                    <label className="form-label">Phone Number</label>
                    <select className="form-select" aria-label="Default select example" name="phone" onChange={handleInputChangePhone}>
                        {phones.map((phone)=>(
                            <option key={phone.id} id={phone.id}>{phone.number}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default PatientsPhoneForm;