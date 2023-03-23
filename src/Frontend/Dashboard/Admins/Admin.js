import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../../slider/slider2'
import './dashboard.css'
import Pie from './Pie'
import Chart from './Googlecharts'
import axios from 'axios'
import {GoDatabase} from 'react-icons/go'
import {MdInventory2,MdOutlinePayments} from 'react-icons/md' 
import { AiFillDashboard,AiFillSetting } from 'react-icons/ai'
import { FcBookmark } from 'react-icons/fc'
import {TbReportSearch} from 'react-icons/tb'
import { useHistory } from 'react-router-dom'
import url from '../../../config'
export default function Admin() {
const history=useHistory()
const [totaluser,  Setuser]=useState(0)
 const [regest,setregs]=useState(0)
 const email= sessionStorage.getItem("email");
 const name=sessionStorage.getItem("name");
 useEffect(()=>{
  axios.get( url.server+'/User/count').then((res)=>{
   
    Setuser(res.data)
  })
   axios.get(  url.server +"/Property/count").then((res)=>{
    setregs(res.data)
   })
 },[])
 console.log(email);
  return (
<>
&nbsp;
<div class="grid-container"style={{backgroundColor:'lightgray'}}>

      {/* <!-- Header --> */}
      
      {/* <!-- End Header --> */}

      {/* <!-- Sidebar --> */}
      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined"></span> {email}
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <a href="#" target="_blank">
              <span class="material-icons-outlined"></span> Welcome {name}
            </a>
          </li>
          <li class="sidebar-list-item">
            <Link to={"/props"}>
              <GoDatabase></GoDatabase>&nbsp; Users
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to={"/allprops"}  >
              <MdInventory2></MdInventory2> &nbsp; Inventory
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to={"/book"}>
              <FcBookmark></FcBookmark>&nbsp; Bookings
            </Link>
          </li>
          
          <li class="sidebar-list-item">
            <Link to={"/report"} >
              <TbReportSearch></TbReportSearch>&nbsp; Reports
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to={"/add"} >
             <>+</> &nbsp;Add Properties
            </Link>
          </li>
        </ul>
      </aside>
      {/* <!-- End Sidebar --> */}

      {/* <!-- Main --> */}
      <main class="main-container">
        <div class="main-title">
          <p class="font-weight-bold"><AiFillDashboard></AiFillDashboard> &nbsp;DASHBOARD</p>
        </div>

        <div class="main-cards">

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">  REGISTERED PROPERTIES</p>
              <span class="material-icons-outlined text-blue"></span>
            </div>
            <span class="text-primary font-weight-bold">{regest}</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">ACTIVE USERS</p>
              <span class="material-icons-outlined text-orange"></span>
            </div>
            <span class="text-primary font-weight-bold">{totaluser}</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">TOTAL PROFITS</p>
              <span class="material-icons-outlined text-green"></span>
            </div>
            <span class="text-primary font-weight-bold">10230213 Rs</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">Total losses</p>
              <span class="material-icons-outlined text-red"></span>
            </div>
            <span class="text-primary font-weight-bold">1234123 Rs</span>
          </div>

        </div>

        <div class="charts">

          <div class="charts-card">
            <p class="chart-title">Top 5 Properties</p>
            <div id="bar-chart"><Pie></Pie></div>
          </div>

          <div class="charts-card">
            <p class="chart-title">Properties All Over The World</p>
            <div id="area-chart"><Chart></Chart></div>
          </div>

        </div>
      </main>
      {/* <!-- End Main --> */}
    
    </div>
    &nbsp;
</>    


  )
}
