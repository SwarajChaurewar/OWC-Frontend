import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import url from '../../config';


export default function ForgotPassword() {
    const history = useHistory();
    const [emailval,setEmailval]=useState("");
    let resethandler =()=>{
        setEmailval("");
        console.log((emailval));
       let jsondata={
            email:emailval
        }
        axios.post(url.server+"/Reset/Changepass",jsondata).then((res) => {
                    let value = res.data
                      if (value === "sucess") {
                        alert("😵‍💫😵‍💫 Email Send On Please check it")
                      }
                      else {
                        alert("😵‍💫😵‍💫 Invalid Credentials")
                      }
                    }).catch(err =>{alert("😵‍💫😵‍💫 Invalid chatch Credentials")
                            // console.log(err);
                        }
                     )
                   
    }

    return (
        <>
        &nbsp;
            <div className="card text-center m-5 mx-auto " style={{width: "300px"}}>
                <div className="card-header h5 text-white bg-danger">Password Reset</div>
                &nbsp;
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Enter your email address and we'll send you an email with instructions to reset your password.
                    </p>
                    <div className="form-outline">
                        <input type="email" id="typeEmail" className="form-control my-3" name="email" value={emailval} onChange={(e)=>setEmailval(e.target.value)} />
                        <label className="form-label" for="typeEmail">Email input</label>
                    </div>
                    <button className="btn btn-primary " onClick={resethandler}>Reset password</button>
                    <div className="d-flex justify-content-between mt-4">
                        <a className=""  onClick={()=>{history.push('/login')}}>Login</a>
                        <a className="" onClick={()=>{history.push('/register')}}>Register</a>
                    </div>
                </div>
            </div>
            &nbsp;
        </>
    )
}

