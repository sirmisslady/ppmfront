import axios from 'axios';
const API_URL = "https://ppm-fq1m.onrender.com/api/phones/?format=json"

const API_URL2 = "https://ppm-fq1m.onrender.com/api/phones/"

export const listPhones = async()=>{
    return await fetch(API_URL);
};

export const getPhone = async(phoneId)=>{
    return await fetch(`${API_URL2}${phoneId}/`);
};

export const registerPhone=async (newPhone)=>{
    return await fetch(API_URL2,{
        method: 'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            "number":String(newPhone.number).trim()
        })
    });
};

export const updatePhone=async (newPhone, id)=>{
    return await fetch(`${API_URL2}${id}/`,{
        method: 'PUT',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            "number":String(newPhone.number).trim()
        })
    });
};

export const deletePhone=async (phoneId)=>{
    /*return await fetch(`${API_URL2}${phoneId}`,{
        method: 'DELETE',
    });*/
    await axios.delete(`${API_URL2}${phoneId}/`);
};