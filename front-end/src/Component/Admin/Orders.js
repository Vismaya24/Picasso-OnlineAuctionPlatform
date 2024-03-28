import React from "react";
import '../../assets/css/Admin.css'; 
import SideBar from "../Utils/SideBar";
import Footer from "../Utils/Footer";
import { useState } from "react";
import NotLoggedIn from "../Utils/NotLoggedIn";

const Orders =()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));

    return(
        <>
        {isLoggedIn ? 
        <div>
          <div style={{display: "flex"}}>
        <SideBar/>
        <div className="admin-bg"> 
        <div style={{marginLeft: "150px"}}>
        <div className="dashboard-text3" style={{marginLeft: "100px"}}>ORDER DETAILS</div><br/>
        <table>
  <tr>
    <th>Order ID</th>
    <th>User ID</th>
    <th>User Name</th>
    <th>Time</th>
    <th>Date</th>
    <th>Art Work ID</th>
  </tr>
  <tr>
    <td>C1256</td>
    <td>11425</td>
    <td>peter_12</td>
    <td>8:49</td>
    <td>12-04-2023</td>
    <td>ART 112</td>
  </tr>
  
  </table>
        </div>
        </div>
        
        </div>
        <Footer/>
        </div>
        :
        <NotLoggedIn />
        }
        
        </>
    )
}
export default Orders;