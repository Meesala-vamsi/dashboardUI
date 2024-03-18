import { useState } from "react"
import Header from "../Header"

import { PiArchiveBoxLight } from "react-icons/pi";
import { FaTags } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";


import './index.css'
import Linechart from "../LineChart";
import Piechart from "../PieChart";
const Home = ()=>{
    const [a,seta] = useState('')

    return(
        <div className="home-main-container">
            <Header className='header1'/>
            <div className="home-container">
                <div className="search-main-container">
                    <h1>Dashboard</h1>
                    <div className="notifi-cont">
                        <IoIosNotifications className="noti-icon"/>
                        <input type="text" className="home-search"/>
                    </div>
                </div>
                <div className="card-container">
                <div className="container2">
                    <PiArchiveBoxLight className="dashboard-icons"/>
                    <div className="">
                        <p>Total Revenues</p>
                        <p>$2,129,430</p>
                    </div>
                </div>
                <div className="container2 transactions">
                    <FaTags className="dashboard-icons"/>
                    <div className="">
                        <p>Total Transcations</p>
                        <p>1520</p>
                    </div>
                </div>
                <div className="container2 likes">
                    <SlLike className="dashboard-icons"/>
                    <div className="">
                        <p>Total Likes</p>
                        <p>10,000</p>
                    </div>
                </div>
                <div className="container2 users">
                    <SlLike className="dashboard-icons"/>
                    <div className="">
                        <p>Total Users</p>
                        <p>1000</p>
                    </div>
                </div>
                </div>
                <div className="container3">
                    <h1 className="piechart-heading">Activities</h1>
                    <div className="linechart-container">
                        <Linechart/>
                    </div>
                </div>
                <div className="pie-cont">
                <div className="container3 container4">
                    <h1 className="piechart-heading">Top Products</h1>
                    <div className="piechart-container">
                        <Piechart/>
                    </div>
                </div>
                <div className="schedule-container container3">
                    <h1>Today's schedule</h1>
                    <div>
                        <h1>Meeting with suppliers from Kuta bali</h1>
                        <p>14.00-15.00</p>
                        <p>at sunset Road Kuta Bali</p>
                    </div>
                    <div>
                        <h1>Check Opertaions at Giga Factory 1</h1>
                        <p>18.00-20.00</p>
                        <p>at Central jakartha</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}


export default Home