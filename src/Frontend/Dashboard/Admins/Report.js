import React from 'react'
import GoogleChart from './Googlecharts'
import Pie from './Pie'
import Animatedchart from './Animatedchart'
export default function Report() {
  return (
    <> 
       &nbsp;
       <h1>Company Reports</h1>
       <hr></hr>
       <h3>Property Sales</h3>
       <hr/> 
       <Pie></Pie>

       <br/>
       <hr></hr>
       <h3>All Over the World Property</h3>
       <hr/>
       <GoogleChart></GoogleChart>
       <br/>
       <hr></hr>
       <h3>Live Active users</h3>
       <hr></hr>
        <Animatedchart></Animatedchart>   
       </>
  )
}
