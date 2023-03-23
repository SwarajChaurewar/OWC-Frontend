import React, { useState } from "react";
import { FaBeer } from 'react-icons/fa';
import { BsFacebook , BsYoutube} from 'react-icons/bs';
import { AiFillTwitterCircle} from 'react-icons/ai';
import axios from "axios";
import url from '../../config'

export default function Contactus() {
  const [state,setstate]=useState({
    email:"",
    name:"",
    subject:"",
    desc:""
  });

  let handler =(e)=>{
    const{name, value}=e.target    
        

    setstate({
   
      ...state,[name]:value


    })


  }

  return (
    <div>
      <div className="titlebox ">
        <div className="d-flex flex-column bd-highlight p-5">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center mb-5">
          
          </p>
        </div>
      </div>

      <div className="getintouch ">
        <div className="container text-center w-70 mt-5">
          <div className="titleGetInTouch">
           {/*  <h3>Get InTouch</h3>
            <span>touch the sky with glory that our aim so touch with us</span> */}
            <div><i className="material-icons p-3" style={{ fontSize: "48px", color: "grey" }}>mail</i></div>
            <p>owccontactus@gmail.com</p>
          </div>
          <hr style={{ color: "red" }} />

          <div className="formGetInTouch">
            <div className="container mt-3 text-start">
              <h3 className="mt-4">Get In Touch</h3>
              <div className="p-4">
                <div className="mb-4">
                  <input type="text" name="name" value={state.name} class="form-control" id="exampleInputPassword1" placeholder="name" onChange={handler} />
                </div>
                <div className="mb-3">
                  <input type="email" name="email"
                  value={state.email} class="form-control" id="exampleInputEmail1" placeholder="enter your email" onChange={handler} />
                </div>
                <div className="mb-3">
                  <input type="text" name="subject" value={state.subject} class="form-control" id="exampleInputPassword1" placeholder="subject" onChange={handler} />
                </div>
                <div class="form-floating">
                <input
                   name="desc" 
                   type="textarea"

                    class="form-control"
                    value={state.desc}
                    
                    placeholder="Leave a message here"
                    id="floatingTextarea" onChange={handler}/>
                </div>
                <button onClick={()=>{
                  axios.post(url.server+"/Contactus/contactus",state).then((res) => {
                    setstate({
                      email:"",
                      name:"",
                      subject:"",
                      desc:""
                    });
                    alert("Your Response is Submitted Thanks for Contact Us ")
               

                  })
                  
                }}class="btn btn-primary m-4">
                Submit
                </button>
                {/* <button type="submit" class="btn btn-primary m-4">Send Message</button> */}

              </div>
            </div>
          </div>

        <div className="logGetInTouch">
          <h4>Follow Me</h4>
          <div className="d-flex flex-row bd-highlight mb-3 justify-content-center">
          <h1 className="p-3"><BsFacebook /></h1>
          <h1 className="p-3"><BsYoutube /></h1>
          <h1 className="p-3"><AiFillTwitterCircle /></h1>
          </div>
        </div>
        </div >
      </div>

      <div className="contactmap text-center w-70">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="210" id="gmap_canvas" src="https://maps.google.com/maps?q=pune&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br/>
          </div></div>         
        
      </div>  
      
      </div>
       

  );
}
