import React from 'react';
//import './Dashboard_Styles/dashboardnavbar.css'
// import { MdOutlineAccessTime } from "react-icons/md";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { IoIosSearch } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa";
// import { AiFillDashboard } from "react-icons/ai";
// import { MdWbSunny } from "react-icons/md";
// import { MdSettings } from "react-icons/md";
// import { IoIosFlash } from "react-icons/io";
// import { IoIosNotifications } from "react-icons/io";
// import { LiaLanguageSolid } from "react-icons/lia";
// import { IoPerson } from "react-icons/io5";


// App.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
export default function Crime_Navbar()
{
    return(
        <div className="Main-Navbar">
            <div className='search'><IoIosSearch className='search-icon'/><span><input type="text" placeholder="Ctrl+K" className="in"/></span></div>
            <div className='Time'><span></span></div>
            <div className='language'><span><MdWbSunny size={20}/><MdSettings className="sun1" size={20}/><IoIosFlash size={20}/><LiaLanguageSolid size={20}/></span><IoMdNotificationsOutline size={20} className='not-icon'/><IoPerson class Name="not1-icon" size={20}/></div>
           
            </div>

    )

}