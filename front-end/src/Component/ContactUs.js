import React from "react";
import '../assets/css/Styles.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Popup from "./Utils/Popup";
import { login } from "./redux/UserSlice";
import Footer from "./Utils/Footer";
import NavBar from "./Utils/NavBar";
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { sendMsg } from "./Services/Api";
import { useState } from "react";
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';


const ContactUs = () =>{
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
    const [formdata, setFormdata] = useState({
      username: '',
      useremail: '',
      phno: '',
      message:'',
    })
    const [isPopupVisible, setPopupVisible] = React.useState(false);
  const [message, setMessage] = React.useState({
        type: '',
        content: '',
        url: '',
        btn: ''
    });
    
    const showMessage = (type, content, url = '', btn = '') => {
    setMessage({ type, content, url, btn });
    setPopupVisible(true);
};
const handleGotItClick = () => {
  if (message.url) {
      navigate(message.url);
  }
  setPopupVisible(false);
};
    const handleChange = (e) => {
      e.preventDefault();
      setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        if(isLoggedIn){
          console.log(formdata)
          const res = await sendMsg(formdata);
          console.log(res)
          showMessage('success', 'Submitted Successfully !', '', 'OK');
        }
        else{
          showMessage('Oops', 'You are not logged in', '/login', 'LOGIN');
        }
        
    }
      catch(error) {
        showMessage('oops', 'Something Went Wrong !', '', 'GOT IT');
      }  
        
    }
    
   
    return(
        <>
        <div style={{ backgroundImage:`url("")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <NavBar/>
        {/* <div className="display">
            <div className="font-style1">&emsp;&emsp;PICASSO</div>
            <div style={{marginLeft: "800px", display: "inline-flex"}}>
            <Link style={{textDecoration: "none"}} to="/"><div style={{textIndent: "40px"}} className="font-style1">HOME</div></Link>
            <Link style={{textDecoration: "none"}} to="/buy"><div style={{textIndent: "40px"}} className="font-style1">BUY</div></Link>
            <Link style={{textDecoration: "none"}} to="/sell"><div style={{textIndent: "40px"}} className="font-style1">SELL</div></Link>
            <Link style={{textDecoration: "none"}} to="/login"><div style={{textIndent: "40px"}} className="font-style1">LOGIN</div></Link>
            <Link style={{textDecoration: "none"}} to="/signup"><div style={{textIndent: "40px"}} className="font-style1">SIGN UP</div></Link>
            </div>  
        </div> */}
        <br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "235px"}}>
                <div className="cbox1">
                <div style={{marginTop: "70px"}} className="contactus-style">We'd love to hear from you</div><br></br>
                <div className="contactus-style2"><SiGmail/>&emsp;Email Address: picasso@gmail.com<br></br><FaPhoneAlt />&emsp;Mobile Number: 80755308993</div><br></br><br></br>
                <div style={{marginLeft: "-20px"}}>
                <Link style={{color: "black", marginLeft:"20px"}} to="https://www.instagram.com/"><BsInstagram size={30}/></Link>
               <Link style={{color: "black", marginLeft:"20px"}} to="https://www.facebook.com/"><FaFacebookF size={30}/></Link>
               <Link style={{color: "black", marginLeft:"20px"}} to="https://twitter.com/home?lang=en"><RiTwitterXLine size={30}/></Link>
        
                {/* <img style={{marginLeft: "20px"}} alt="" src="fb.png" height="40px" width="40px"></img>  
                <img style={{marginLeft: "20px"}} alt="" src="insta.png" height="40px" width="40px"></img>  
                <img style={{marginLeft: "20px"}} alt="" src="twitter.png" height="40px" width="40px"></img>   */}
                </div>
                </div>
                <div style={{marginLeft: "125px"}} className="cbox1">
                    <div className="contactus-style">Contact Us</div><br></br>
                <form onSubmit={handleSubmit}>
                    <input className="contact-input" type="text" name="username" id="username" placeholder="Enter Your Name"  onChange={handleChange} required></input><br></br><br></br>
                    <input className="contact-input" type="text" name="useremail" id="useremail" placeholder="Enter your Email Address"  onChange={handleChange} required></input><br></br><br></br>
                    <input className="contact-input" type="text" name="phno" id="phno" placeholder="Enter Your Mobile Number"  onChange={handleChange} required></input><br></br><br></br>
                    <textarea className="textarea" type="text" name="message" id="message" placeholder="Enter Your Message"  onChange={handleChange} required></textarea><br></br><br></br>
                    <button className="contact-btn">SUBMIT</button>
                </form></div>
            </div>
            {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
        </div>
        <Footer/>
        </>
    )
}
export default ContactUs;