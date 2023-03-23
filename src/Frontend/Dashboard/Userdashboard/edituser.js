import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import url from '../../../config';

export  default function Edituser  ()  {
     const  history= useHistory()
  const email = sessionStorage.getItem("email");
  const name = sessionStorage.getItem("name");
  const phoneno = sessionStorage.getItem("phoneno");
  

    const [state,setstate]=useState({
    name:"",
    email:"",
    phoneno:""

    })

    const handler=(e)=>{


     const{name, value}=e.target
     
     setstate({
      ...state,[name]:value,email:sessionStorage.getItem("email")
     })
     

    }

  return (
    <>
    &nbsp;
    <div class='container1'style={{ backgroundColor:(255, 255, 255, .15),backdropFilter:"blur(5px)"}}>
    <div class="container1" style={{ backgroundColor:(255, 255, 255, .15),backdropFilter:"blur(5px)"}}>  
  <div id="contact" >
    <h3>Change Settings</h3>
    
    <fieldset>
      <input name='name' onChange={handler} value={state.name}placeholder= {name} type="text"  />
    </fieldset>
    <fieldset>
      <input name='email' value={email}placeholder= {email} type="email" tabindex="2" readOnly />
    </fieldset>

    <fieldset>
      <input  name='phoneno' onChange={handler} state={state.phoneno}placeholder={phoneno} type="tel" />
    </fieldset>
    
    
    <fieldset>
      <button  onClick={()=>{
        axios.post(url.server+'/User/edituser',state).then(res=>{
               alert("Please Relogin to See changes  🙂🙂🙂🙂" )
            if( sessionStorage.getItem("role")=="Begin Journey With Us" ){
              history.push("Architect")
            }          
            else{
              history.push("user")
            }
        }).catch(err=>{console.log(err)})
         



      }} class="btn  btn-primary"  >Im Ready for It ! </button>
    </fieldset>
    
  </div>
</div>
    
   &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
      
    </div>
    </>
  )
}
