import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./dashboard.css";

import { GoDatabase } from "react-icons/go";
import { MdInventory2, MdOutlinePayments } from "react-icons/md";
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { FcBookmark } from "react-icons/fc";

import { useHistory } from "react-router-dom";

export default function userdash() {
  
  
  const email = sessionStorage.getItem("email");
  const name=sessionStorage.getItem("name");

  return (
    <div>
      
      <div class="grid-container" style={{ backgroundColor: "lightgray" }}>
        <aside id="sidebar">
          <div class="sidebar-title">
            <div class="sidebar-brand">
              <span class="material-icons-outlined"></span> {email}
            </div>
            <span class="material-icons-outlined" onclick="closeSidebar()">
              close
            </span>
          </div>

          <ul class="sidebar-list">
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined"></span> Welcome {name}
              </a>
            </li>
            
            <li class="sidebar-list-item">
              <Link to={"edituser"}>
                <AiFillSetting></AiFillSetting> &nbsp;  Settings
              </Link>
            </li>
            <li class="sidebar-list-item">
              <Link to={"/book"}>
                <FcBookmark></FcBookmark>&nbsp; Bookings
              </Link>
            </li>
          </ul>
        </aside>

        <main class="main-container">
          <div class="main-title">
            <p class="font-weight-bold">
              <AiFillDashboard></AiFillDashboard> &nbsp;DASHBOARD
            </p>
          </div>

        
          <div class="main-cards">

          <div class="card">
            <div class="sidebar-list-item">
              <p class="text-primary"></p>
              
              <span class="material-icons-outlined text-blue">
              <Link className="nav-link-active" to={"/Customize"} >
             <b>CUSTOMIZE PROPERTIES</b>
            </Link>
              </span>
            </div>
            <span class="text-primary font-weight-bold"></span>
          </div>

         

          

          

        </div>

        </main>
        {/* <!-- End Main --> */}
      </div>
      &nbsp;
    </div>
  );
}
