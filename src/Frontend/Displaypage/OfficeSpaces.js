import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { Pagination } from '../Pagination/pagination'
// import{ GoogleMap }from '@react-google-maps/api'
import StripeCheckout  from 'react-stripe-checkout'

import url  from '../../config'

export default function Properties() {
 const history =useHistory()
  const[startindex,setstartindex]=useState(1);
  const[postperpage,setpostperpage]=useState(2);
  const[obj,setobj]=useState("")
 const [prop,setprop]=useState([])
 const handler=(token,e)=>{
        console.log(token,e);
 }
  const  getproperties= async()=>{
    await axios.get(url.server+"/Property/Officespaces").then((res)=>setprop(res.data)).catch((err)=>console.log(err))
             
  }

 useEffect(()=>{
  getproperties()


 },[])
  
 const lastindex=startindex*postperpage
 const firsindex=lastindex-postperpage
 const currentprops=prop.slice(firsindex,lastindex) 
    return (
    <>
     &nbsp;
     <h1 style={{"margin":"4%","fontFamily":"italic","textAlign":"center"}}> OFFICE SPACES...</h1>
     <hr style={{"color":"black"}}></hr>
        
    {/* iframe for map     */}
    <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867250.9286021274!2d76.77476745!3d18.815426549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677051620764!5m2!1sen!2sin"} width="700" height="1000" style={{"border":"0" ,"allowfullscreen":"" ,"loading":"lazy" ,"referrerpolicy":"no-referrer-when-downgrade","margin":"4%","border-radius":"20px"} }align="right"></iframe>  

     {currentprops.map((proper)=>{
      return(
        <>
        <div  className="card" style={{"width": "20rem","margin":"4%"}} >
        <img className="card-img-top" src={proper.image} />
        <div className="card-body" >
          <h5 className="card-title">{proper.Propertyname}</h5>
          <p className="card-text">{proper.Propertydesc}</p>
          { sessionStorage.getItem("email")!=null?
          <StripeCheckout   token={(token)=>{
                 
             const email=sessionStorage.getItem("email")
              axios.post(url.server+"/Payment/payment",{Propertyname:proper.Propertyname,email:email,Propertydesc:proper.Propertydesc,image:proper.image,prize:proper.prize}).then(res=>{

                    
                     

                axios.post(url.server+"/Property/pdelete",{_id:proper._id}).then((res)=>{
                  
                  window.location.reload(true)
                  console.log(res);}).catch(err=>console.log(err))
                

              }).catch(err=>console.log(err))    
            
          }} image={proper.image} stripeKey ="pk_test_51MgYdOSBUf0l8nGney6GJ3RMw1DYcGbx4Fd7HFhErh0kzxCL631N2GyOJyeV9hYbdeOnV7tKPUhZes1XO1KbXYY900m4NrwIGS" currency="INR" amount={proper.prize} name={proper.Propertyname}>
          <button     usehref={proper.prize*10} className="btn btn-primary">Book Now</button>
          </StripeCheckout>:<button onClick={()=>{
                        history.push("login")
          }} className="btn btn-primary">Book Now</button>
         }

        </div>
        
      </div>
      
      &nbsp;
      </>
            

      )
     })}
 
 <Pagination totalpost={prop.length} postperpage={postperpage} setCurrentpage={setstartindex} currentpage={startindex}></Pagination>
 &nbsp;
</>
  )
}
