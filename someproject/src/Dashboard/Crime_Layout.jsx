import React from 'react'
import Sidebarcrime from'./Sidebarcrime';
import Crime_Navbar from './Crime_Navbar';
import {Outlet} from 'react-router-dom';
// import "./Dashboard_Styles/dashboard-layout.css"
function Crime_Layout(){
    return(
        <div className="Main-outlet">
            <div className="SideBarcrime-Element">
            <Sidebarcrime/>
            </div>
               <div className="NavandDashboard">
            <div className="NavBarDashboard"><Crime_Navbar/></div>
           <div> <Outlet/></div>
            </div>
        </div>
    )
}
export default Crime_Layout;