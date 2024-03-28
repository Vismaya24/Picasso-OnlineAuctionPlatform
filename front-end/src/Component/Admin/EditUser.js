import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { editUser, getUserById } from "../Services/Api";
import { useEffect } from "react";
import NotLoggedIn from "../Utils/NotLoggedIn";
import { RxCross1 } from "react-icons/rx";

const EditUser = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));

    const {userId} = useParams();
    const navigate = useNavigate();
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
            await editUser(userId, formdata);
        }
        catch(error){

        }
    }
    const routeBack = () => {
        navigate(-1)
      }
    return(
        <>
        {isLoggedIn ? 
        <div>
            <button  style={{marginLeft: "10px", marginTop: "15px",cursor: "pointer", backgroundColor: "transparent", borderColor: "transparent"}} onClick={routeBack}><RxCross1 size={30}/></button><br/>
            <div className="sellart-text1">PICASSO</div><br/>
        <form className="" onSubmit={handleSubmit}><br/>
            <label className="user-label">Name:</label><br/>
            <input className="user-input" type="text" name="name" id="name" placeholder="Username" onChange={handleChange} value={formdata.name} /><br/><br/>
            <label className="user-label">Email:</label><br/>
            <input className="user-input" type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={formdata.email} /><br/><br/>
            <label className="user-label">Mobile Number:</label><br/>
            <input className="user-input" type="tel" name="phno" id="phno" placeholder="Ph no" onChange={handleChange} value={formdata.phno} /><br/><br/>
            {/* <label className="user-label">Address:</label><br/>
            <input className="user-input" type="text" name="address" id="address" placeholder="Address" onChange={handleChange} value={formdata.address} /><br/> */}
            <label className="user-label">Country:</label><br/>
            <input className="user-input" type="text" name="country" id="country" placeholder="Country" onChange={handleChange} value={formdata.country} /><br/><br/>
            <label className="user-label">State:</label><br/>
            <input className="user-input" type="text" name="state" id="state" placeholder="State" onChange={handleChange} value={formdata.state} /><br/><br/>
            <label className="user-label">District:</label><br/>
            <input className="user-input" type="text" name="district" id="district" placeholder="Address" onChange={handleChange} value={formdata.district} /><br/><br/>
            <label className="user-label">House No:</label><br/>
            <input className="user-input" type="text" name="house" id="house" placeholder="House No" onChange={handleChange} value={formdata.house} /><br/><br/>
            <label className="user-label">Pincode:</label><br/>
            <input className="user-input" type="text" name="pincode" id="pincode" placeholder="Pincode" onChange={handleChange} value={formdata.pincode} /><br/><br/>
            <label className="user-label">Birth Day:</label><br/>
            <input className="user-input" type="date" name="birthdate" id="birthdate" placeholder="Birthdate" onChange={handleChange} value={formdata.birthdate} /><br/><br/>
            <label className="user-label">User Img:</label><br/>
            <input className="user-input" type="text" name="userimg" id="userimg" placeholder="User Image" onChange={handleChange} value={formdata.userimg} /><br/><br/>
            <button className="user-btn" type="submit" onClick={routeBack}>Update</button><br/><br/>
        </form>
    </div>
        :
        <NotLoggedIn />
         }
        
        </>
    )
}
export default EditUser;