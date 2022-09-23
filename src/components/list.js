import React, { useEffect, useState } from "react";

import * as PatientServer from './PatientServer';

//component
import PatientItem from "./PatientItem";

const PatientList=()=>{

    const [patients, setPatients] = useState([]);

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

    useEffect(()=>{
        listPatients();
    },[]);

    return(
        <div>
            <h1>Patient List</h1>
            <br></br>
            <br></br>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient)=>(
                    <PatientItem key={patient.id} id={patient.id} patient={patient.nombre} apellido_pat={patient.apellido_pat} apellido_mat={patient.apellido_mat} direccion={patient.direccion} listPatients={listPatients} />
                ))}
            </tbody>
            </table>
        </div>

    ) 
};

export default PatientList;