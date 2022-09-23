import { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";

import * as PatientServer from './PatientServer';

//component
import PatientItem from "./PatientItem";

const Phonelist=()=>{


    const params = useParams();
    //const navigate = useNavigate();

    const [patients, setPatients] = useState([]);

    const [phones, setPhones] = useState([]);

    const initialState = {id:0, nombre:""};

    const initialState2 = {"id": 4,
    "active": true,
    "paciente": 0,
    "phone": 0,
    "phone_number": ""};

    const [patient, setPatient]=useState(initialState);
    
    const [phone, setPhone]=useState(initialState2);

    const getPatient=async(patientId)=>{
        try {
            //console.log(patientId);
            const res = await PatientServer.getPatient(patientId);
            const data = await res.json();
            //console.log(data);
            const {nombre, apellido_pat, apellido_mat, direccion}=data;
            setPatient({nombre, apellido_pat, apellido_mat, direccion});
        } catch (error) {
            console.log(error);
        }
    }

    const listActivePhones=async()=>{
        try{
            const res= await PatientServer.listActivePhones();
            const data=await res.json();
            setPhones(data);
            //console.log(data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getPatient(params.id)
        // eslint-disable-next-line
    }, []);

    useEffect(()=>{
        listActivePhones();
    },[]);

    return(
        <div>
            <h1>{patient.apellido_pat} {patient.apellido_mat} {patient.nombre}</h1>
            <br></br>
            <br></br>
            <table className="table">
            <thead>
                {phones.map((phone)=>(
                    <tr>
                    <th scope="col">{phone.phone_number}</th>
                    </tr>
                ))}
            </thead>
            <tbody>
                
            </tbody>
            </table>
        </div>

    ) 
};

export default Phonelist;