import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";
import Popup from "./Utils/Popup";
import { userLogin } from "./Services/Api";
// import { login } from "./redux/UserSlice";
import { useDispatch } from 'react-redux' ;
import { useUser } from "./context/UserContext";
import NavBar from "./Utils/NavBar";

const Login = () => {
    
    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const [message, setMessage] = React.useState({
      type: '',
      content: '',
      url: '',
      btn: ''
    });


    const showMessage = (type, content, url = '', btn = '') => {
      setMessage({type, content, url, btn});
      setPopupVisible(true);
    }
    const handlePaste = (e) =>{
      e.preventDefault();
      showMessage('error', 'Restricted action');
    };
    const handleGotItClick = () =>{
      if(message.url){
        navigate(message.url);
        window.location.reload(false);
      }
      setPopupVisible(false);
    };
  

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('xuserToken'));
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        pword: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const res = await userLogin(signin);
        if ((res.status) === 200 && (res.data.role) === "USER")  {
            console.log(res.data);
            

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
   

            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            localStorage.setItem('xuserPhone', res.data.phno);
            localStorage.setItem('xuserCountry', res.data.country);
            localStorage.setItem('xuserState', res.data.state);
            localStorage.setItem('xuserDistrict', res.data.district);
            localStorage.setItem('xuserHouse', res.data.house);
            localStorage.setItem('xuserPincode', res.data.pincode);
            localStorage.setItem('xuserBirthdate', res.data.birthdate);
            localStorage.setItem('xuserUserimg', res.data.userimg);
            // localStorage.setItem('xuserAddress', res.data.address);
           showMessage('Success', 'Login Successful !', '/' , 'CONTINUE');

        }
        else if((res.status) === 200 && (res.data.role) === "ADMIN"){
            console.log(res.data);

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('AdminName', res.data.name);
            localStorage.setItem('AdminEmail', res.data.email);
            showMessage('success', 'Login Successful !', '/dashboard', 'CONTINUE');

        }
        }
        catch(error){
        showMessage('Oops', 'Authentication Failed !', '', 'OK');

        }
    };

  
    return(
        <div><NavBar/>
      <div className="flex">
      <div className="login-box"><br></br><br></br><br></br>
       <div className="login-text1">PICASSO</div>
       <div className="login-text3">LOGIN</div>
       <div className="login-text2">Unlock the Gallery</div>
      <form style={{marginLeft:"105px", marginTop: "25px"}} onSubmit={handleSubmit}>
            <input className="login-input" placeholder="Email" type="email" name="email" id="email" minLength={8} maxLength={100} onChange={handleChange} /><br></br><br></br>
            <input className="login-input" placeholder="Password" type="password" name="pword" id="pword" minLength={1} maxLength={115} onChange={handleChange} ></input><br></br><br></br>
            <br></br>
        <button  className="login-btn" type="submit">Login</button>
        </form>
        <br></br><div style={{textAlign: "center", marginLeft:"-5px", fontFamily: "Inter"}}>OR</div><br></br>
        <div style={{marginLeft:"173px"}}>
        
         </div><br></br>
         <div style={{textAlign: "center", marginLeft:"-20px", fontFamily: "Inter", marginTop: "-20px"}}>Doesn't have an account ? <Link style={{textDecoration: "none", color:"black"}}to="/signup">Sign Up</Link></div>
        </div>
      &emsp;&emsp;&emsp;
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
      </div>
          )
        }
export default Login;