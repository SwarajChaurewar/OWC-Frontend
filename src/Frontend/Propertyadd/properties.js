// Property1 = new Property({
//   country: req.body.country,
//   State: req.body.State,

//   city: req.body.city,

//   Propertyname: req.body.Propertyname,
//   Status: req.body.Status,
//   Propertydesc: req.body.Propertydesc,
//   propertytype: req.body.propertytype,
//   subtype: req.body.subtype,
//   prize: req.body.prize,

//   image: req.body.image,

import axios from 'axios'
import React, { useState } from 'react'
import url from '../../config'
import '../Propertyadd/padd.css'
export  default function Properties  ()  {
  

  const [state,setstate]=useState({
     
    country:"",
    State:"",
    city:"",
    Propertyname:"",
    Status:"",
    Propertydesc:"",
    propertytype:"",
    subtype:"",
    prize:"",
    image:""
  })
  const handler=(e)=>{
    
     const{name,value}= e.target
     
    setstate({
      ...state,[name]:value
    })
    
  
  }
  
  return (
    <>
    &nbsp;
    <div class='container1'>
    <div class="container1">  
  <form id="contact" >
    <h3> Add Properties</h3>
    <h4>Enter each details Properly !!! </h4>
    <fieldset>
      <input onChange={handler} value={state.country} name="country" placeholder="Country" type="text"  required autoFocus />
    </fieldset>
    <fieldset>
      <input onChange={handler} value={state.State}  name='State' placeholder="State" type="text"  required />
    </fieldset>
    <fieldset>
      <input  onChange={handler} value={state.city}name='city' placeholder="City" type="text" tabindex="3" required />
    </fieldset>
    <fieldset>
      <input  onChange={handler} value={state.Propertyname} name='Propertyname' placeholder="Propertyname" type="text" tabindex="4" required />
    </fieldset>
    <fieldset>
    <fieldset>
      <input  onChange={handler} value={state.propertytype} name='propertytype' placeholder="Propertytype" type="text" tabindex="4" required />
    </fieldset> 
    <fieldset>
      <input  onChange={handler} value={state.subtype} name='subtype' placeholder="subtype" type="text" tabindex="4" required />
    </fieldset> 
    
    <fieldset>
      <input onChange={handler} value={state.prize} name='prize'placeholder="Prize" type="number" tabindex="4" required />
    </fieldset>

    <fieldset>
      <input  onChange={handler} value={state.Status}name='Status' placeholder="Status" type="text" tabindex="4" required />
    </fieldset>
    <fieldset>
      <input onChange={handler} value={state.image} name='image' placeholder="Image link use Links from pexels" type="url" tabindex="4" required />
    </fieldset>
      <textarea  onChange={handler} value={state.Propertydesc} name="Propertydesc"placeholder="Property desc" tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button onClick={()=>{

                   axios.post(url.server +"/Property/property",state).then((res)=>{
                          
                       console.log(res);
                    

                   }).catch(err=>console.log(err))


      }} name="submit" type="submit" id="contact-submit" >Submit</button>
    </fieldset>
    <p class="copyright"> <a href="https://colorlib.com" target="_blank" title="Colorlib"></a></p>
  </form>
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
