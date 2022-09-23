import * as PatientServer from './PatientServer';
import { useNavigate  } from "react-router-dom";
import React from "react";
const PatientItem=({patient, id, listPatients})=>{

        const navigate = useNavigate();

        const handleDelete=async(patientId)=>{
            //console.log(patientId);
            await PatientServer.deletePatient(patientId);
            listPatients();
        };

    return(
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className="card-title">{patient}</h3>
            </div>
            <button onClick={()=>navigate(`/updatePatient/${id}/`)} className="btn btn-sm btn-info ms-2">UPDATE</button>
            <button onClick={()=>id && handleDelete(id)} className="btn btn-danger my-2">DELETE PATIENT</button>
        </div>
    )
};

export default PatientItem