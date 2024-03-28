import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUserById } from "./Services/Api";

const Shipping = () => {

    const navigate = useNavigate();
    const handleNext = () => {
        localStorage.clear();
        navigate('/login')
    }

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
        <div className="background-color">
        <div style={{display: "inline-flex"}}>
        <div className="checkout-box">
            <div className="check-text1">PICASSO</div>
            <div className="check-text2">Checkout</div>
        <div style={{marginLeft: "110px"}} className="check-text3">Ship To</div><br></br>
        
        {/* <div><label style={{marginLeft: "110px"}} className="check-label">Full Name</label><br></br><input style={{marginLeft: "110px"}} className="check-input2" placeholder="Full Name" required/></div><br></br> */}
        <div style={{display: "inline-flex"}}>
            <div><label style={{marginLeft: "110px"}} className="check-label">Building Name/Number</label><br></br><input style={{marginLeft: "110px"}} className="check-input1" placeholder="Building Name/Number" onChange={handleChange} value={formdata.house} id="house" name="house" required></input></div>
            <div><label style={{marginLeft: "30px"}} className="check-label">City</label><br></br><input style={{marginLeft: "30px"}} className="check-input1" placeholder="Street" onChange={handleChange} value={formdata.district} name="district" id="district" required /></div>
        </div><br></br><br></br>
        <div style={{display: "inline-flex"}}>
            <div><label style={{marginLeft: "110px"}} className="check-label">State</label><br></br><input style={{marginLeft: "110px"}} className="check-input1" placeholder="State" required onChange={handleChange} value={formdata.state} id="state" name="state" ></input></div>
            <div><label style={{marginLeft: "30px"}} className="check-label">Country</label><br></br><input style={{marginLeft: "30px"}} className="check-input1" placeholder="City" required onChange={handleChange} value={formdata.country} id="country" name="country"/></div>
        </div><br></br><br></br>
        <div style={{display: "inline-flex"}}>
            <div><label style={{marginLeft: "110px"}} className="check-label">Mobile Number</label><br></br><input style={{marginLeft: "110px"}} className="check-input1" placeholder="City" onChange={handleChange} value={formdata.phno} id="phno" name="phno" required/></div>
            <div><label style={{marginLeft: "30px"}} className="check-label">Pin Code</label><br></br><input style={{marginLeft: "30px"}} className="check-input1" placeholder="Pincode" onChange={handleChange} value={formdata.pincode} id="pincode" name="pincode" required></input></div>
        </div><br></br><br></br>
        <div></div>
        {/* <div><label style={{marginLeft: "110px"}} className="check-label">Email ID</label><br></br><input style={{marginLeft: "110px"}} className="check-input2" placeholder="Email ID" onChange={handleChange} value={formdata.email} /></div><br></br> */}
        <div><input style={{marginLeft: "110px"}} type="checkbox" color="black" required></input>Agree to the terms and conditions</div><br></br>
        <button style={{cursor: "pointer"}} onClick={handleNext} className="check-btn">NEXT</button>
        </div>
        <div className="summary-box">
            <div className="summary-text1">Order Summary</div>
            <div style={{display: "inline-flex"}}><div className="summary-text2">Subtotal : </div><div style={{marginLeft: "130px"}} className="summary-text3">₹ 2,10,000</div></div>
            <div style={{display: "inline-flex"}}><div className="summary-text2">Shipping Charges : </div><div style={{marginLeft: "75px"}} className="summary-text3">₹ 2,000</div></div>
            <div style={{display: "inline-flex"}}><div className="summary-text2">Taxes : </div><div style={{marginLeft: "172px"}} className="summary-text3">₹ 2,500</div></div><br></br><br></br>
            <hr width="270px" color="gray" size="1"></hr>
            <div className="summary-text4">Order Total : ₹ 2,14,500</div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Shipping;