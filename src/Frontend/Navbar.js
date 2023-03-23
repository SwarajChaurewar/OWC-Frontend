import React, { useState ,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import userStore from "../Zustand/Zustandstore";
import {RxAvatar} from 'react-icons/rx'
import Navbar from 'react-bootstrap/Navbar'
import Container from'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

export default function Navbar1() {
  
  const[bstate,setbstate]=useState(false)
    const[state,setuser]=useState(sessionStorage.getItem("email"))
   {console.log(state)}
  const role=sessionStorage.getItem("role")
  
  const [dropd,setdropd]=useState()

  const dropdown=()=>{
  return(
    <Navbar bg="black" expand="lg">
    <Container>
   
  <label> <NavbarBrand onClick={()=>{history.push('home')}} style={{"font-family": 'Source Serif Pro', 'fontSize':'2rem',color:'White'}} >{<img src={require("../logo2.png")} width="80px" height="60px"></img> }One Who Creates</NavbarBrand>
  </label>
      <Navbar.Toggle  className="btn btn-danger"  aria-controls="basic-navbar-nav" style={{color:"white"}} />
      <Navbar.Collapse  id="basic-navbar-nav" variant="light">
        <Nav className="me-auto">

          
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <label
           onClick={() => {
             history.push("home");
            
           }}
           className="nav-link nav-link-ltr"
           aria-current="page"
         >
           Home
         </label>
       </li>
    {  state==null? 
      <li className="nav-item">
        <label
          onClick={() => {
            history.push("/Login");
          }}
          className="nav-link nav-link-ltr"
          aria-current="page"
        >
          Login
        </label>
      </li>
      :<li className="nav-item">
      <label
        onClick={() => {
          sessionStorage.removeItem("email")
          sessionStorage.removeItem("role")
          sessionStorage.removeItem("orders")
          sessionStorage.removeItem("name")
          history.push("/home")
          window.location.reload(true)
        }}
        className="nav-link nav-link-ltr"
        aria-current="page"
      >
        Logout
      </label>
    </li>
}
  {state==null?<li className="nav-item">
        <label
          onClick={() => {
            history.push("/register");
          }}
          className="nav-link nav-link-ltr"
          aria-current="page"
        >
          Register
        </label>
      </li>:<></>
  }
      <li className="nav-item">
        <label
          onClick={() => {
            history.push("/Aboutus");
          }}
          className="nav-link nav-link-ltr"
          aria-current="page"
        >
          About us
        </label>
      </li>

      <li className="nav-item">
        <label
          onClick={() => {
            history.push("/Contactus");
          }}
          className="nav-link nav-link-ltr"
          aria-current="page"
        >
          Contact us
        </label>
      </li> 
      &nbsp;
      &nbsp;&nbsp;&nbsp;

      
      <li className="nav-item">
        <label
         
          className="nav-link"
          aria-current="page"
        >
            <Dropdown  class='nav justify-content-end'style={{"align":"end"}}>
  <Dropdown.Toggle variant="dark" color="white" id="dropdown-basic-button">
    <RxAvatar></RxAvatar> {state}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Link  className='nav-link active' to={()=>{
    if(role==="Begin Journey With Us"){
       return "Architect"
    }
    else if(role=="Admin"){
      return "Admin"
    }
    else if(role=="Searching for WorkSpace"){
      return "User"
    }
    else{
      return 'home'
    }
    }}><Dropdown.Item  href="#/action-1">Dashboard</Dropdown.Item></Link>
    <br/>
    
   
  </Dropdown.Menu>
</Dropdown>


         
        </label>
      </li> 
      
    </ul>

  
    
  







        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
  }

  useEffect(()=>{
    setbstate(sessionStorage.getItem("email"))
       
  })
  const history = useHistory();
  return (
  <>
  {dropdown()}
  
  </>

    // </nav>
  );
}

// <Navbar collapseOnSelect
// className="navbar navbar-expand-lg "
//   style={{backgroundColor:"black"}}>
//     <Container>
  
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />

//     <Navbar.Collapse id="responsive-navbar-nav">
    
//   <Nav>
//   
// </Nav>
// </Navbar.Collapse>
// </Container>
// </Navbar>