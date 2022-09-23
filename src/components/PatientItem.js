import * as PatientServer from './PatientServer';
import { useNavigate  } from "react-router-dom";
import React from "react";
const PatientItem=({patient, id, listPatients, apellido_pat, apellido_mat, direccion})=>{

        const navigate = useNavigate();

        const handleDelete=async(patientId)=>{
            //console.log(patientId);
            await PatientServer.deletePatient(patientId);
            listPatients();
        };

    return(
        <tr>
        <th scope="row">{patient}</th>
        <td>{apellido_pat}</td>
        <td>{apellido_mat}</td>
        <td>{direccion}</td>
        <td>
            <button onClick={()=>navigate(`/phonelist/${id}/`)} className="btn btn-sm btn-info ms-2">Phone Number(s)</button>
            <button onClick={()=>navigate(`/updatePatient/${id}/`)} className="btn btn-sm btn-info ms-2">UPDATE</button>
            <button onClick={()=>id && handleDelete(id)} className="btn btn-danger my-2">DELETE PATIENT</button>
        </td>
        </tr>
    )
};

export default PatientItem