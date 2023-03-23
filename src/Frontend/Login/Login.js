import React, { useState } from 'react'
import {NavLink, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import userStore from '../../Zustand/Zustandstore'
import { data } from '../Dashboard/Admins/Googlecharts'
import { BsFacebook , BsYoutube,BsApple} from 'react-icons/bs';
import { AiFillTwitterCircle} from 'react-icons/ai';
import url from '../../config'
export default function Login() {
  const[vali,setvali]=useState(false)
  const history=useHistory()
  const [user,SetUser]=useState({
   email:"",
   password:"" 
    })
 function handler(e){
  console.log(e)  
  const {name,value}=e.target
    
    SetUser({
      ...user,[name]:value
    })
   
 }

 
    return (
    <div>
<section className="loginpage p-5" >
  <div className=" d-flex justify-content-center">
    
  
      <div className="d-flex justify-content-center" >
        <div className='loginbox p-5'>
          <div className="d-flex flex-row align-items-center justify-content-center ">
            <h2 className="p-3 m-4">Sign in</h2>
          </div>

          <div className="form-outline mb-4">
            <label for="form3Example3">Email address</label>
            <input style={{backgroundColor:"white"}}  type="email" id="form3Example3" className="form-control "
                name="email" value={user.email} onChange={ handler }   placeholder="Enter valid email address" />
          </div>

          <div className="form-outline mb-3">
            <label for="form3Example4">Password</label>
            <input style={{backgroundColor:"white"}} type="password" id="form3Example4" className="form-control "
           name="password" value={user.password} onChange={handler} placeholder="Enter password" />
          </div>

          <div className="d-flex justify-content-between align-items-center">

            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <Link href="#" className="text-danger p-4 " onClick={()=>{history.push('/Forgotpass')}}>Forgot password?</Link>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <Link to={()=>{if(vali){
                           history.push("/home") 
                          window.location.reload(true)
                              alert(`Welcome back  🙂🙂😀😃${user.email}`)                  

            }
          else {
             return"/login"
          } }}><button  onClick={async()=>{
                   
                  var value
                   await  axios.post(url.server+"/User/Login",user).then((res)=>{
                                      
                      value=res.data
                      const{email,...values}=value
                      sessionStorage.setItem("email",email)
                    
                      sessionStorage.setItem("role",values.role);
                      sessionStorage.setItem("name",values.name);
                      sessionStorage.setItem("phoneno",values.phoneno);
                      sessionStorage.setItem("orders",values.orders)
                      if(email===user.email){
                       setvali(true)
                      }
                      else{
                      alert("😵‍💫😵‍💫 Invalid Credentials")
                      }
                 }).catch(err=>console.log(err))
                  
                 
            }}type="button" className="btn btn-primary btn-lg"
              style={{"padding-left": "2.5rem", "padding-right": "2.5rem"}}>Login</button></Link>
            <p  className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <label for="register"><span href="#!"
               onClick={()=>{history.push('/register')}} className="text-info p-5" name='register'>Register</span></label></p>
          </div>

        </div>
      
    </div>
  </div>
  {/* <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>



    <div>
      <span href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </span>
      <span href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </span>
      <span href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </span>
      <span href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </span>
    </div>
 
  </div> */}
</section>
    </div>
  )
}
