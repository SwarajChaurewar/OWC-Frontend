import React from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "../slider/slider";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiOfficeChair } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import Testimonial from "../Testimonial/testimonial";
import url from "../../config";
export default function Homepage1() {
  return (
    <div>
      <div>
        <Slider />
      </div>{" "}
      &nbsp; &nbsp;
      <div>
        
          <h1 style={{ fontFamily: "Georgia,serif" }}>
            {" "}
           <b> &nbsp; &nbsp; &nbsp;What are you looking for?</b>
          </h1>
        
      </div>
      <br/>
      <div  style={{borderColor:'black'}}className="container overflow-hidden">
        <div style={{}} className=" ">
        <iframe align='right' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3782.460672985869!2d73.95931581468889!3d18.553258687389974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677952322448!5m2!1sen!2sin" width="550" height="740" style={{"border":"0"}} allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div  style={{borderColor:"black"}}className="officespacebox card col-6 " >

            <NavLink className="nav-link active" to="">
              {" "}
              <Link to={"Display"} style={{ color: "black" }}>
                {" "}
                <div
                  style={{ textAlign: "center", fontfa: "san-serif" }}
                  className="p-3 border bg-light"
                >
                  <HiBuildingOffice2
                    style={{ width: "4.5rem" }}
                  ></HiBuildingOffice2>{" "}
                  <br></br>Office Spaces
                  <i>&nbsp; Private move-in ready offices</i>
                </div>
              </Link>
            </NavLink>
          </div>
          &nbsp;
          &nbsp;
          &nbsp;
          
          <div style={{borderColor:"black"}} className=" ">
          <div  style={{borderColor:"black"}}className=" card col-6">
              <NavLink className="nav-link active" to="">
                {" "}
                <Link to={"Desk"} style={{ color: "black" }}>
                  {" "}
                  <div
                    style={{ textAlign: "center", fontfa: "san-serif" }}
                    className="p-3 border bg-light"
                  >
                    <GiOfficeChair></GiOfficeChair> <br />
                    &nbsp; Dedicated desk
                    <i>&nbsp; Desk and collabrative spaces</i>
                  </div>
                </Link>
              </NavLink>
            </div>
          </div>
          &nbsp;
          &nbsp;
          &nbsp;
          
          <div style={{borderColor:"black"}} className=" ">
          <div  style={{borderColor:"black"}}className=" card col-6">
              <NavLink className="nav-link active" to="">
                {" "}
                <Link to={"Restaurant"} style={{ color: "black" }}>
                  {" "}
                  <div
                    style={{ textAlign: "center", fontfa: "san-serif" }}
                    className="p-3 border bg-light"
                  >
                    <IoRestaurantSharp></IoRestaurantSharp> <br />
                    &nbsp;Restaurant space
                    <i>&nbsp; Cafes & Restaurant Setups </i>
                  </div>
                </Link>
              </NavLink>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
          
          </div>
          <div style={{borderColor:"black"}} className=" ">
          <div  style={{borderColor:"black"}}className=" card col-6">
              <NavLink className="nav-link active" to="">
                {" "}
                <Link to={"Education"} style={{ color: "black" }}>
                  {" "}
                  <div
                    style={{ textAlign: "center", fontfa: "san-serif" }}
                    className="p-3 border bg-light"
                  >
                    <ImBooks></ImBooks>
                    <br></br> &nbsp; Educational
                    <i>&nbsp; Classrooms Setups</i>
                  </div>
                </Link>
              </NavLink>
            </div>
          </div>
      
         

          <Testimonial />


        </div>
      </div>
    </div>
  );
}
