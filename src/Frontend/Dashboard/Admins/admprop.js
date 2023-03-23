import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import url from '../../../config';

export default function Admprop() {
 const history = useHistory()
 const [user,setuser]=useState([]);
const [email1,setemail]=useState({ email: ""
})
 
 const tbles=(async()=>{
     
  await axios.get(url.server+"/User/user").then((res)=>{
       
           setuser(res.data)


  })
 })

 useEffect(()=>{
   tbles()
 },)

 

  return (
<>
&nbsp;
<h1 style={{textAlign:"center"}}> Active Users</h1>
<hr></hr>
<div class="container">
<table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Roles</th>
      <th>Status</th>
      <th>Contacts</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
   { user.map((props)=>{
     
    return( <tr>
      <td>
        <div class="d-flex align-items-center">
         { props.role=="Admin"? <img
              src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
              alt=""
              style={{"width": "45px", height: "45px"}}
    
    
              class="rounded-circle"
              />: <img
              src={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
              alt=""
              style={{"width": "45px", height: "45px"}}
    
    
              class="rounded-circle"/>
              
         }  
          <div class="ms-3">
            <p class="fw-bold mb-1">{props.name}</p>
            <p class="text-muted mb-0">{props.email}</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">{props.role}</p>
        <p class="text-muted mb-0"></p>
      </td>
      <td>
        
        {  props.role=="Admin"? <button class=" btn btn-primary btn-rounded">Active</button>:
        <button class="btn btn-dark btn-rounded">Offline</button>
           
    }
      </td>
      <td><p class="text-muted mb-0">{props.phoneno}</p></td>
      <td>
        
        
        <button  name="email"value={props.email} onClick={(e)=>{
              
                
               
              let pr=prompt(" Are you sure you Want to delete?\n Enter your Email :")
              let email=sessionStorage.getItem("email")
     if(pr.valueOf()===email.valueOf()){          

              console.log(email1);
             axios.post(url.server+"/User/udelete",{email:e.target.value}).then((res)=>{            
                 window.location.reload(true)
             
          }).catch((err)=>console.log(err))       
        }
        }}type="button" class="btn btn-outline-danger">
           
           delete
        </button>
      </td>
    </tr>
   )})
   } 
  </tbody>
</table>
   <br></br>
   <div class="text-center">
  <button  onClick={()=>{
    history.push("/register")      
  }}type="button" class="btn btn-outline-success"> Add New Members</button>
</div>
</div>
&nbsp;
</>
  )
}
