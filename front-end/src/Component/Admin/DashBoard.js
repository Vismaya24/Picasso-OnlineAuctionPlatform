import React from "react";
import '../../assets/css/Admin.css'; 
import { useState } from "react";
import CanvasJSReact from '@canvasjs/react-charts';
import Footer from "../Utils/Footer";
import SideBar from "../Utils/SideBar";
import WeekSale from "./WeekSale";
import YearSale from "./YearSale";
import NetProfit from "./NetProfit";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsCart } from "react-icons/bs";
import NotLoggedIn from "../Utils/NotLoggedIn";

const DashBoard = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));

        return(
        <>
        {isLoggedIn ? 
        <div>
            <div style={{display: "flex"}}>
            <SideBar/>
            <div className="admin-bg">
            <div style={{marginLeft: "250px"}}>
            <div className="dashboard-text3">DASHBOARD</div><br/>
            <div style={{display: "inline-flex", marginLeft: "280px"}}>&emsp;&emsp;
            <div className="dashboard-box"><div className="icon-box"><BsCart size={30} color="white" style={{marginTop: "11px", marginLeft: "13px"}}/></div><div className="dashboard-text">Products Sold<div className="dashboard-text2">18930</div></div></div>&emsp;&emsp;
            <div className="dashboard-box"><div className="icon-box"><LiaRupeeSignSolid size={30} color="white" style={{marginTop: "11px", marginLeft: "13px"}}/></div><div className="dashboard-text">Net Profit<div className="dashboard-text2">₹ 1,89,30,000</div></div></div>&emsp;&emsp;
            </div>
            <div>
            </div><br></br><br></br><br></br>
        <div className="graph-box1">
        <YearSale/>
        </div>
        <div style={{marginTop: "50px"}} className="graph-box1">
        <WeekSale/>
        </div>
        <div style={{marginTop: "50px"}} className="graph-box1">
        <NetProfit/>
        </div>
        </div>
            </div>
        
        </div><br></br><br></br><br></br><br></br>
        <Footer/>
        </div>
        :
        <NotLoggedIn />
        }
        
        </>
    )
}
export default DashBoard;