import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Footer.css";
const Footer = () =>{
  
    return(
        <>
        <div className="footer">
            <div className="footer-text">© Copyright 2023</div>&emsp;
            <Link  className="footer-text" to="/privacy">Privacy Policies</Link>&emsp;
            <Link  className="footer-text" to="/terms">Terms And Condition</Link>&emsp;
            <Link  className="footer-text" to="/faq">FAQ's</Link>
        </div>
        </>
    )
}
export default Footer;