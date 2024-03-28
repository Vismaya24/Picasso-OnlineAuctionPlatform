import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Popup from "./Utils/Popup";
import { userRegister } from "./Services/Api";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import NavBar from "./Utils/NavBar";



const SignUp = () => {


const navigate = useNavigate();
const [ signup, setSignup] = useState({
  name: '',
  email: '',
  pword: '',
  phno: '',
  role: 'user'
})
const handleChange = (e) => {
  setSignup({ ...signup, [e.target.id]: e.target.value});
};
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
const handleSubmit = async (e) => {
  e.preventDefault();
  try{
  const res = await userRegister(signup);
  if (res.data === "User registered successfully" && res.status===200) {
       showMessage('success', 'Sign Up Successful !', '/login', 'CLICK HERE TO LOGIN');
} 
else if (res.data==="Something went wrong!" && res.status=== 403) {
       showMessage('oops', 'Please Fill In All Fields !', '', 'GOT IT');

}}
catch(error){
  showMessage('oops', 'Something Went Wrong !', '', 'OK'); 
}

}
    return(
      <div><NavBar/><br/><br/>
      <div className="flex">
      <div className="signup-box"><br></br>
      <div className="login-text1">PICASSO</div>
      <div className="login-text3">SIGN UP</div>
      <div className="login-text2">Welcome to Artistic Signatures</div>
      <form style={{marginLeft:"105px", marginTop: "25px"}} onSubmit={handleSubmit}>
            <input placeholder="Name"className="signup-input" type="text" name="name" id="name" onChange={handleChange} /><br></br>
            <input placeholder="Email" className="signup-input" type="email" name="email" id="email" onChange={handleChange} /><br></br>
            <input placeholder="Mobile Number" className="signup-input" type="tel" name="phno" id="phno" onChange={handleChange}></input><br></br>
            {/* <input placeholder="Address" className="signup-input" type="text" name="address" id="address"  onChange={handleChange} /><br></br> */}
            <input placeholder="Password" className="signup-input" type="password" name="pword" id="pword"  onChange={handleChange}></input><br></br>
            <br></br>
            <button className="signup-button" type="submit">Sign Up</button>
        </form><br></br><div style={{textAlign: "center", marginLeft:"-5px", fontFamily: "Inter"}}>OR</div><br></br>
         <div style={{marginLeft:"173px" }}>
          
         </div><br></br>
         <div style={{textAlign: "center", marginLeft:"-20px", fontFamily: "Inter", marginTop: "-20px"}}>Already have an account ? <Link style={{textDecoration: "none", color:"black"}}to="/login">Login</Link></div>
      </div>&emsp;&emsp;
      &emsp;  
      </div>
      
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
      </div>
    )
}
export default SignUp;
