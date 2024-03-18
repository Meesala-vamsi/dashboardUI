import { useState } from "react"

import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { FaTags } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

import './index.css'


const Header=()=>{
    const [menuStatus,setMenuStatus] = useState(false)

    const onClickMenu=()=>{
        setMenuStatus(!menuStatus)
    }

    return(

        <>
        <header className="header-mobile-container">
            <h1>Board.</h1>
            {menuStatus?<IoMdMenu className="menu-icon" onClick={onClickMenu}/>:<IoCloseSharp className="menu-icon" onClick={onClickMenu}/>}
            <ul className={`${menuStatus?'sidebar-close':'sidebar'}`}>
                <li className="list-items"><FiPieChart className="sidebar-icons"/> <p>Dashboard</p></li>
                <li className="list-items"> <FaTags className="sidebar-icons"/> <p>Transactions </p></li>
                <li className="list-items">
                    <SlCalender className="sidebar-icons"/>
                    <p>Schedules</p>
                </li>
                <li className="list-items">
                    <FaRegUserCircle className="sidebar-icons"/>
                    <p>Users</p>
                </li>
                <li className="list-items">
                    <IoIosSettings className="sidebar-icons"/>
                    <p>Settings</p>
                </li>
            </ul>
        </header>
        <div className="desktop-sidebar-container">
            <div>
            <h1>Board.</h1>
        <ul>
                <li className="list-items"><FiPieChart className="sidebar-icons"/> <p>Dashboard</p></li>
                <li className="list-items"> <FaTags className="sidebar-icons"/> <p>Transactions </p></li>
                <li className="list-items">
                    <SlCalender className="sidebar-icons"/>
                    <p>Schedules</p>
                </li>
                <li className="list-items">
                    <FaRegUserCircle className="sidebar-icons"/>
                    <p>Users</p>
                </li>
                <li className="list-items">
                    <IoIosSettings className="sidebar-icons"/>
                    <p>Settings</p>
                </li>
            </ul>
            </div>
        </div>

        </>
    )
}


export default Header