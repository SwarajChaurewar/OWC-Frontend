import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { Pagination } from '../../Pagination/pagination'
import url from '../../../config'

// import{ GoogleMap }from '@react-google-maps/api'

export default function Allprops() {
    const history =useHistory()
  const[startindex,setstartindex]=useState(1);
  const[postperpage,setpostperpage]=useState(2);
 const [prop,setprop]=useState([])
  const  getproperties= async()=>{
    await axios.get(url.server+"/Property/property").then((res)=>setprop(res.data)).catch((err)=>console.log(err))
             
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
     <h1 style={{"margin":"4%","fontFamily":"italic",'textAlign':'center'}}> INVENTORY</h1>
     <hr style={{"color":"black"}}></hr>
       
        
        
     <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867250.9286021274!2d76.77476745!3d18.815426549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677051620764!5m2!1sen!2sin"} width="700" height="1000" style={{"border":"0" ,"allowfullscreen":"" ,"loading":"lazy" ,"referrerpolicy":"no-referrer-when-downgrade","margin":"4%","border-radius":"20px"} }align="right"></iframe>  
 {currentprops.map((proper)=>{
      return(
        <>
        <table>
       <tr> <div  className="card" style={{"width": "20rem","margin":"4%"}} >
        <img className="card-img-top" src={proper.image} />
        <div className="card-body" >
          <h5 className="card-title">{proper.Propertyname}</h5>
          <p className="card-text">{proper.Propertydesc}</p>
          Prize:<b>{proper.prize}</b>&nbsp;
          <br></br>
          <button  value={proper._id}onClick={(e)=>{

            axios.post(url.server+"/Property/pdelete",{ _id:e.target.value}).then((res)=>{let pr=prompt(" Are you sure you Want to delete?\n Enter your Email :")
            
            if(pr!=null){
                window.location.reload(true)
            }
        else{
            history.push("allprops")
            
        } 
        })
          }}   className="btn btn-outline-danger">delete</button>&nbsp;&nbsp;&nbsp;
     
          <br></br>
          &nbsp;
          &nbsp;
          &nbsp;  &nbsp;  &nbsp;
          &nbsp;  &nbsp;  &nbsp;
          <br/>  
          &nbsp;
          &nbsp;
          &nbsp;  &nbsp;  &nbsp;
          &nbsp;  &nbsp;  &nbsp;
        
        </div>
        
      </div></tr>
      </table>
      
      &nbsp;
      </>
            

      )
     })}
 
 
 < Pagination totalpost={prop.length} postperpage={postperpage} setCurrentpage={setstartindex} currentpage={startindex}></Pagination> 
 
 &nbsp;
</>
  )
}
