import axios from 'axios'
import React from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import StripeCheckout from 'react-stripe-checkout'
import url from '../../../config'
export default function Order() {
  return (
    <>
    &nbsp;
    <h1>Orders </h1>
    <hr></hr>
     
    <h3> To Enable Your Orders Pay First And Get Orders</h3>
   
   &nbsp;
   &nbsp; 
   &nbsp; 
   &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp;
    <StripeCheckout      token={(t)=>{
           alert("Your Account Will be Updated in A While")
        axios.post(url.server+"/User/orders",{email:sessionStorage.getItem("email"),orders:true}).then(res=>{
            console.log(res);
        })

    }}         
              stripeKey ="pk_test_51MgYdOSBUf0l8nGney6GJ3RMw1DYcGbx4Fd7HFhErh0kzxCL631N2GyOJyeV9hYbdeOnV7tKPUhZes1XO1KbXYY900m4NrwIGS" currency="INR" amount={20000000000} name={"OwcPayments"}>
              <button      className="btn btn-primary">Activate Now</button>
              </StripeCheckout>
              &nbsp;&nbsp;
              <br></br>

              &nbsp;
    </>
    
  )
}
