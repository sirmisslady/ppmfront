import { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";

import * as PhoneServer from './PhoneServer';

const PhoneForm=()=>{

    const navigate = useNavigate();

    const params = useParams();

    //console.log(params);

    const initialState = {id:0, number:""};

    const [phone, setPhone]=useState(initialState);

    const handleInputChange=(e)=>{
        setPhone({ ...phone, [e.target.name]: e.target.value});
        //console.log(e.target.value)
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            let res;
            res = await PhoneServer.registerPhone(phone);
            const data= await res.json();
            console.log(data);
            //if(data.message=="Success"){
                setPhone(initialState);
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
            res = await PhoneServer.updatePhone(phone,params.id);
            const data= await res.json();
            //console.log(data);
            //if(data.message=="Success"){
                setPhone(initialState);
            //}
            navigate("/");
        } catch (error) {
            
        }
    };

    const getPhone=async(phoneId)=>{
        try {
            //console.log(phoneId);
            const res = await PhoneServer.getPhone(phoneId);
            const data = await res.json();
            //console.log(data);
            const {number}=data;
            setPhone({number});
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getPhone(params.id)
        // eslint-disable-next-line
    }, []);

    return(
        <div>
            {params.id?(
                <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="number" value={phone.number} onChange={handleInputChange} className="form-control" maxLength="50"/>
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
                        <label className="form-label">Phone Number</label>
                        <input type="text" name="number" value={phone.number} onChange={handleInputChange} className="form-control" maxLength="50"/>
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

export default PhoneForm;