import React from "react";
import { GoAlert } from 'react-icons/go';
import { useNavigate } from "react-router-dom";
import "../../assets/css/Styles.css";

const NotLoggedIn = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    return(
        <>
        <div style={{marginTop: "200px"}}>
        <GoAlert style={{marginLeft: "720px"}} size={100} />
        <div className="error-text1">OOPS</div>
        <div className="error-text2">You are not Logged in. Please log in to continue</div>
        <button className="error-button" onClick={handleLogin}>LOGIN</button>
        </div>
        
        </>
    )
}
export default NotLoggedIn;