import axios from "axios";
import React, { useState } from "react";
import url from "../../../config";

export default function Customize() {

  
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
  //     let jsondata={
  //         email:emailval
  //     }
  //  
  //                 let value = res.data
  //                   if (value === "sucess") {
  //                     alert("😵‍💫😵‍💫 Email Send On Please check it")
  //                   }
  //                   else {
  //                     alert("😵‍💫😵‍💫 Invalid Credentials")
  //                   }
  //                 }).catch(err =>{alert("😵‍💫😵‍💫 Invalid chatch Credentials")
  //                         // console.log(err);
  //                     }
  //                  )
                 
  // }
  return (
    <div>
      <div className="">
        <div className="d-flex flex-column bd-highlight p-5">
          <h2 className="text-center"></h2>
          <p className="text-center mb-5"></p>
        </div>
      </div>

      <div className="getintouch ">
        <div className="container text-center w-70 mt-5">
          <div className="titleGetInTouch">
            <h3>Customize Spaces</h3>

            <div>
              <i
                className="material-icons p-3"
                style={{ fontSize: "48px", color: "grey" }}
              >
                mail
              </i>
            </div>
          </div>
          <hr style={{ color: "red" }} />

          <div className="formGetInTouch">
            <div className="container mt-3 text-start">
              <h3 className="mt-4">Enter Your Requirements</h3>
              <div className="p-4">
                <div className="mb-3">
                  <input
                   name="name"
                    value={state.name}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="name"
                    onChange={handler}
                  />
                </div>
                <div className="mb-3">
                  <input
                   name="email"
                    value={state.email}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="enter your email"
                    onChange={handler}
                  />
                </div>
                <div className="mb-3">
                  <input
                   name="subject"
                    value={state.subject}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="subject"
                 onChange={handler} />
                </div>
                <div class="form-floating">
                  <input type="textarea"
                   name="desc" 
                   

                    class="form-control"
                    value={state.desc}
                    placeholder="Leave a message here"

                    id="floatingTextarea"
                onChange={handler} ></input>
                </div>
                <button onClick={()=>{

                    axios.post( url.server+"/Custom/custom",state).then((res) => {
                             
                      alert("Your Response is Submitted We will get back to you")

                     setstate({
                        email:"",
                        name:"",
                        subject:"",
                        desc:""
                      });
                 

                    })

                }} class="btn btn-primary m-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactmap text-center w-70">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="210"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=pune&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
