import axios from 'axios';
//const API_URL = "https://ppm-fq1m.onrender.com/api/pacientes/"
const API_URL = "https://ppm-fq1m.onrender.com/api/pacientes/?format=json"
const API_URL2 = "https://ppm-fq1m.onrender.com/api/pacientes/"
const API_URL_PHONES = "https://ppm-fq1m.onrender.com/api/phones/"
const API_URL_PP = "https://ppm-fq1m.onrender.com/api/pacientephone/"

export const listPatients = async()=>{
    return await fetch(API_URL);
};

export const listPhones = async()=>{
    return await fetch(API_URL_PHONES);
};

export const getPatient = async(patientId)=>{
    return await fetch(`${API_URL2}${patientId}/`);
};

export const registerPatient=async (newPatient)=>{
    return await fetch(API_URL2,{
        method: 'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            "nombre":String(newPatient.nombre).trim(),
            "apellido_pat":String(newPatient.apellido_pat).trim(),
            "apellido_mat":String(newPatient.apellido_mat).trim(),
            "direccion":String(newPatient.direccion).trim()
        })
    });
};

export const updatePatient=async (newPatient, id)=>{
    return await fetch(`${API_URL2}${id}/`,{
        method: 'PUT',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            "nombre":String(newPatient.nombre).trim(),
            "apellido_pat":String(newPatient.apellido_pat).trim(),
            "apellido_mat":String(newPatient.apellido_mat).trim(),
            "direccion":String(newPatient.direccion).trim()
        })
    });
};

export const deletePatient=async (patientId)=>{
    /*return await fetch(`${API_URL2}${patientId}`,{
        method: 'DELETE',
    });*/
    await axios.delete(`${API_URL2}${patientId}/`);
};

export const registerPatientPhone=async (patient_id, phone_id)=>{
    return await fetch(API_URL_PP,{
        method: 'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            "paciente": parseInt(patient_id.paciente),
            "phone": parseInt(phone_id.phone),
            "active":'true',
        })
    });
};

export const listActivePhones = async()=>{
    return await fetch(API_URL_PP);
};