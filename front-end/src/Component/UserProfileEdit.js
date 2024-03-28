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
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import NotLoggedIn from "./Utils/NotLoggedIn";
import { GoAlert } from "react-icons/go";
import { editUser, getUserById } from "./Services/Api";
import { useEffect } from "react";
import FileUploader from "./Utils/FileUploader";

const UserProfileEdit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
    const {userId} = useParams();
    const [formdata, setFormdata] = useState({
        name: '',
        email:'',
        phno: '',
        userimg: '',
        country: '',
        state: '',
        district: '',
        house:'',
        pincode:'',
        birthdate: ''
    })
    const [fileUrl, setFileUrl] = useState('');
    const fetchUsers = async () => {
        try{
            const response = await getUserById(userId);
            setFormdata(response.data);
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const UserData = {
                ...formdata,
                userimg: fileUrl,
              };
            localStorage.setItem('xuserUserimg', fileUrl);
            await editUser(userId, UserData);
        }
        catch(error){

        }
    }
    const routeBack = () => {
        navigate(-1)
      }

    const navigate = useNavigate();
    const logOutHandler = () => {
        localStorage.clear();
        window.location.reload(false);
        navigate('/login')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    
    return(
        <>
        <div style={{position: "absolute"}}>
            <NavBar />
            <br/>
            {isLoggedIn ? 
            <div>
                <div style={{marginTop: "50px"}}>
            <div className="profile-text1">Edit Profile</div>
            {/* <div style={{display: "inline-flex", marginLeft: "670px", marginTop: "20px"}}><button onClick={scrollToUser} className="profile-btn"><PiUserLight size={40}/></button><button onClick={scrollToOrders} className="profile-btn"><LiaClipboardListSolid size={40}/></button><button onClick={scrollToArtCollections} className="profile-btn"><PiPaintBrushLight size={40}/></button></div> */}
            <div style={{marginLeft: "400px"}}>
                <br/><br/><br/>
            <div style={{ marginTop: "-50px"}}>
                <div>
                </div>
            <form  onSubmit={handleSubmit}><br/>
            <div style={{display: "inline-flex"}}>
                <div>
                <label className="profile-label">Name</label><br/>
                <input className="profile-input" type="text" name="name" id="name" placeholder="Username" onChange={handleChange} value={formdata.name} />
                </div>
                <div>
                <label className="profile-label">Mobile Number</label><br/>
                <input className="profile-input" type="tel" name="phno" id="phno" placeholder="Ph no" onChange={handleChange} value={formdata.phno} /><br/><br/>
                </div>
            </div><br/>
            <label className="profile-label">Email</label><br/>
            <input className="profile-input2" type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={formdata.email} />
            <br/><br/>
            <div style={{display: "inline-flex"}}>
                <div>
                <label className="profile-label">Birth Day</label><br/>
                <input className="profile-input" type="date" name="birthdate" id="birthdate" placeholder="Birthdate" onChange={handleChange} value={formdata.birthdate} /><br/><br/>
                </div>
                <div>
                <label className="profile-label">Country</label><br/>
                <input className="profile-input" type="text" name="country" id="country" placeholder="Country" onChange={handleChange} value={formdata.country} /><br/><br/>
                </div>
            </div><br/>
            <div style={{display: "inline-flex"}}>
            <div>
            <label className="profile-label">State</label><br/>
            <input className="profile-input" type="text" name="state" id="state" placeholder="State" onChange={handleChange} value={formdata.state} /><br/><br/>
            </div>
            <div>
            <label className="profile-label">District</label><br/>
            <input className="profile-input" type="text" name="district" id="district" placeholder="Address" onChange={handleChange} value={formdata.district} /><br/><br/>
            </div>
            </div><br/>
            <div style={{display: "inline-flex"}}>
                <div>
                <label className="profile-label">House No</label><br/>
                <input className="profile-input" type="text" name="house" id="house" placeholder="House No" onChange={handleChange} value={formdata.house} /><br/><br/>
                </div>
                <div>
                <label className="profile-label">Pincode</label><br/>
                <input className="profile-input" type="text" name="pincode" id="pincode" placeholder="Pincode" onChange={handleChange} value={formdata.pincode} /><br/><br/>
                </div>
            </div>
            <div style={{display: "inline-flex"}}></div>
            <div style={{display: "inline-flex"}}></div>
             {/* <label className="user-label">Address:</label><br/>
            <input className="user-input" type="text" name="address" id="address" placeholder="Address" onChange={handleChange} value={formdata.address} /><br/> */}
            <br/>
            <div className="profile-label">Profile Picture</div>
            <div style={{marginLeft: "50px", height: "", width: "850px"}}><FileUploader setImageUrl={setFileUrl} /></div>
            <button className="profile-button" type="submit" onClick={routeBack}>Update</button><br/><br/>
        </form>
            </div>
            </div>
            
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            : 
            <NotLoggedIn />
            }
            <Footer />
        </div>
        </>
    )
}
export default UserProfileEdit;
