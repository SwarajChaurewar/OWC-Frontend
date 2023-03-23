import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import url from "../../config";
export default function Register() {
   const history =useHistory();
  const [user, SetUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    repass: "",
    role: "Searching for WorkSpace",
  })
  const handler=(e)=>{
   
    const{name,value}=e.target
  
   SetUser({
   ...user,[name]:value  
   })
   
}
const registeration=()=>{
  alert("Registration is processing")
 const{name, email, password, repass,phoneno, role}=user
 if(name && email && password===repass && phoneno.length===10 || role){
  axios.post(url.server+"/User/user",user).then(()=>{alert(`Welcome ${user.name} to Owc ✌️✌️✌️` )
  history.push('/home')
 }).catch((err)=>alert(`Ohh someting 😓🤒 😵😵Went wrong mail is already register`))
  }
  else{

    alert(`Ohh someting 😓🤒 😵😵Went wrong Please Check credentials`)
  }
    
} 
  return (
    <div>
        
      <section className="p-3" style={{ "background-color": "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ "border-radius": "25px;" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <div className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handler}  
                              value={user.name}
                              name="name"                          className="form-control"
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handler}
                              name="email"
                              value={user.email}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                            onChange={handler}
                              name="password"
                          
                          
                              value={user.password}
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handler}
                                  name="repass"
                              value={user.repass}
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-phone-square"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handler}
                              name="phoneno"
                              value={user.phoneno}
                              type="text"
                              id="form3Example41cd"
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4cd">
                              Phone No:
                            </label>
                          </div>
                        </div>
                        <label className="form-label" for="form3Example4cd">
                              What are You looking for?
                            </label>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-at"></i>
                          <div className="form-outline flex-fill mb-0">
                            <select
                              onChange={handler}
                              name="role"
                              value={user.role}
                              id="form3Example4cd"
                              className="form-control"
                            >
                              <option>Searching for WorkSpace</option>
                              <option>Begin Journey With Us</option>
                            </select>
                         
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                        
                            className="form-check-input me-2"
                            type="checkbox"
                           // value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            onClick={registeration}
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={
                          "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        }
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
