import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Admin.css'; 

const AdminLogin = () => {
    return(
        <>
        <div style={{backgroundColor: "#f0ebeb", height: "100vh"}}><br></br><br></br><br></br><br></br>
            <div className="admin-loginbox"><br></br><br></br>
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <form style={{marginLeft: "70px"}}>
                    <input className="admin-login" type="text" placeholder="User Name" id="username" name="username"></input><br></br><br></br>
                    <input className="admin-login" type="password" placeholder="Password" id="password" name="password"></input><br></br>
                </form><br></br>
            <Link to="/dashboard"><button className="admin-btn">Login In</button></Link>
            </div>
        </div>
        </>
    )
}
export default AdminLogin;