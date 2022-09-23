import { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";

import * as PatientServer from './PatientServer';

const PatientForm=()=>{

    const navigate = useNavigate();

    const params = useParams();

    //console.log(params);

    const initialState = {id:0, nombre: "", apellido_pat: "", apellido_mat: "",direccion: ""};

    const [patient, setPatient]=useState(initialState);

    const handleInputChange=(e)=>{
        setPatient({ ...patient, [e.target.name]: e.target.value});
        //console.log(e.target.value)
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            console.log(patient);
            let res;
            res = await PatientServer.registerPatient(patient);
            const data= await res.json();
            //console.log(data);
            //if(data.message=="Success"){
                setPatient(initialState);
            //}
            navigate("/");
        } catch (error) {
            
        }
    };
    
    const handleUpdate=async(e)=>{
        e.preventDefault();
        try {
            let res;
            console.log(params.id);
            res = await PatientServer.updatePatient(patient,params.id);
            const data= await res.json();
            //console.log(data);
            //if(data.message=="Success"){
                setPatient(initialState);
            //}
            navigate("/");
        } catch (error) {
            
        }
    };

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

    useEffect(()=>{
        getPatient(params.id)
        // eslint-disable-next-line
    }, []);

    return(
        <div>
            {params.id?(
                <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="nombre" value={patient.nombre} onChange={handleInputChange} className="form-control" maxLength="50"/>
                    <label className="form-label">Last Name</label>
                    <input type="text" name="apellido_pat" value={patient.apellido_pat} onChange={handleInputChange} className="form-control" maxLength="50"/>
                    <label className="form-label">Last Name</label>
                    <input type="text" name="apellido_mat" value={patient.apellido_mat} onChange={handleInputChange} className="form-control" maxLength="50"/>
                    <label className="form-label">Address</label>
                    <input type="text" name="direccion" value={patient.direccion} onChange={handleInputChange} className="form-control" maxLength="200"/>
                </div>
                {params.id?(
                        <button type="submit" className="btn btn-primary">Update</button>
                    ):(
                        <button type="submit" className="btn btn-primary">Submit</button>
                    )
                }
                </form>       
                ):(
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="nombre" value={patient.nombre} onChange={handleInputChange} className="form-control" maxLength="50"/>
                        <label className="form-label">Last Name</label>
                        <input type="text" name="apellido_pat" value={patient.apellido_pat} onChange={handleInputChange} className="form-control" maxLength="50"/>
                        <label className="form-label">Last Name</label>
                        <input type="text" name="apellido_mat" value={patient.apellido_mat} onChange={handleInputChange} className="form-control" maxLength="50"/>
                        <label className="form-label">Address</label>
                        <input type="text" name="direccion" value={patient.direccion} onChange={handleInputChange} className="form-control" maxLength="200"/>
                    </div>
                    {params.id?(
                            <button type="submit" className="btn btn-primary">Update</button>
                        ):(
                            <button type="submit" className="btn btn-primary">Submit</button>
                        )
                    }
                    </form>
                )
            }
        </div>
    )
};

export default PatientForm;