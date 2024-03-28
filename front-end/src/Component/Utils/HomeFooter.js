import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Footer.css";
const HomeFooter = () =>{

    const [showFooter, setShowFooter] = useState(false)
    const controlFooter = () => {
        if (window.scrollY < 400 ) {
            setShowFooter(true)
        }else{
          setShowFooter(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlFooter)
        return () => {
            window.removeEventListener('scroll', controlFooter)
        }
    }, [])
  
    return(
        <>
        <div className={`show ${showFooter && 'hide'}`}>
        <div className="footer">
            <div className="footer-text">© Copyright 2023</div>&emsp;
            <Link  className="footer-text" to="/privacy">Privacy Policies</Link>&emsp;
            <Link  className="footer-text" to="/terms">Terms And Condition</Link>&emsp;
            <Link  className="footer-text" to="/faq">FAQ's</Link>
        </div>
        </div>
        </>
    )
}
export default HomeFooter;