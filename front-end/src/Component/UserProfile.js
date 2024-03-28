import React from "react";
import NavBar from "./Utils/NavBar";
import Footer from "./Utils/Footer";
import '../assets/css/Profile.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useRef } from "react";
import { PiUserLight } from 'react-icons/pi';
import { PiPaintBrushLight } from 'react-icons/pi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NotLoggedIn from "./Utils/NotLoggedIn";
import { GoAlert } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";

const UserProfile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
    const [fileUrl, setFileUrl] = useState('');
    const userprofile = useRef(null);
  const scrollToUser = () => {
    if (userprofile.current) {
        userprofile.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const orders = useRef(null);
  const scrollToOrders = () => {
    if (orders.current) {
        orders.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const artcollections = useRef(null);
  const scrollToArtCollections = () => {
    if (artcollections.current) {
        artcollections.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const id = localStorage.getItem('xuserId')
    const name = localStorage.getItem('xuserName')
    const phone = localStorage.getItem('xuserPhone')
    const email = localStorage.getItem('xuserEmail')
    const country = localStorage.getItem('xuserCountry')
    const state = localStorage.getItem('xuserState')
    const district = localStorage.getItem('xuserDistrict')
    const birthdate = localStorage.getItem('xuserBirthdate')
    const userimg = localStorage.getItem('xuserUserimg')
    const pincode = localStorage.getItem('xuserPincode')
    const house = localStorage.getItem('xuserHouse')

    const navigate = useNavigate();
    const logOutHandler = () => {
        localStorage.clear();
        window.location.reload(false);
        navigate('/login')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    const handleEdit = (id) => {
        navigate(`/profile/edit/${id}`);
      }
    return(
        <>
        <div style={{position: "absolute"}}>
            <NavBar />
            <br/>
            {isLoggedIn ? 
            <div>
                <div style={{marginTop: "70px"}}>
            {/* <button onClick={logOutHandler} className="profile-logout">Logout</button> */}
            <div className="profile-text1">User Profile</div>
            <div style={{display: "inline-flex", marginLeft: "645px", marginTop: "20px"}}><button onClick={scrollToUser} className="profile-btn"><PiUserLight size={40}/></button><button onClick={scrollToOrders} className="profile-btn"><LiaClipboardListSolid size={40}/></button><button onClick={scrollToArtCollections} className="profile-btn"><PiPaintBrushLight size={40}/></button><button onClick={logOutHandler} className="profile-btn"><AiOutlineLogout size={40}/></button></div>
            <div ref={userprofile} style={{marginLeft: "400px"}}>
                <br/><br/><br/>
                <div className="profile-text2">Profile Details</div>
            <div style={{display: "inline-flex", marginTop: "35px"}}>
                <div>
            <Stack direction="row" spacing={2}><Avatar alt="" src={userimg} sx={{ width: 120, height: 120 }} /></Stack>
                </div>
            <div className="profile-text4">Welcome
            <div className="profile-text3">{name}</div>
            <div style={{marginTop: "40px", display: "inline-flex"}}>
                <div className="profile-box">
            <div className="profile-text5">Email Address</div><br/>
           <div className="profile-text5">Phone Number</div><br/>
           <div className="profile-text5">Birth Day</div><br/>
           <div className="profile-text5">House No</div><br/>
           <div className="profile-text5">District</div><br/>
           <div className="profile-text5">State</div><br/>
           <div className="profile-text5">Country</div><br/>
           <div className="profile-text5">Pincode</div><br/>
                </div>
                <div className="profile-box">
                <div className="profile-text6">{email}</div><br/>
                <div className="profile-text6">{phone}</div><br/>
                <div className="profile-text6">{birthdate}</div><br/>
                <div className="profile-text6">{house}</div><br/>
                <div className="profile-text6">{district}</div><br/>
                <div className="profile-text6">{state}</div><br/>
                <div className="profile-text6">{country}</div><br/>
                <div className="profile-text6">{pincode}</div><br/>
                </div>
            </div><br/>
            <button className="profile-edit" onClick={() => handleEdit(id)}>Edit</button>
            </div>
            </div>
            </div>
            <div ref={orders} style={{marginLeft: "400px"}}>
            <br/><br/><br/><br/>
            <div className="profile-text2">My Orders</div>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            </div>
            <div ref={artcollections} style={{marginLeft: "400px"}}>
            <br/><br/><br/><br/>
            <div className="profile-text2">My Art Collections</div>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            qwertyu<br/>
            </div>
            </div>
            </div>
            : 
            <NotLoggedIn />
            }
            <Footer />
        </div>
        </>
    )
}
export default UserProfile;