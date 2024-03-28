import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveArt } from "./Services/Api";
import "../assets/css/Sell.css";
import { RxCross1 } from 'react-icons/rx';
import Popup from "./Utils/Popup";
import FileUploader from "./Utils/FileUploader";


const SellArt = () => {
  const [fileUrl, setFileUrl] = useState('');
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
    const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    artname: '',
    price: '',
    artist: '',
    year:'',
    style: '',
    type: '',
    size: '',
    artimg: ''
  })
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isLoggedIn){
      const ArtData = {
        ...formdata,
        artimg: fileUrl,
      };
      console.log(ArtData)
      
      const res = await saveArt(ArtData);
      console.log(res)
      if (res.status === 201) {
        localStorage.setItem('price', res.data.price);
        showMessage('success', 'Submitted Sucessfully !', '/sell', 'OK');
      }
      else if(res.status === 403){
        showMessage('oops', 'Please Fill In All Fields !');
      }
    }
    else{
      showMessage('oops', 'You are not logged in', '/login', 'LOGIN'); 
    }
      
    }
    const handleClose = () => {
      navigate('/sell')
    }
    return(
        <>
        <div style={{position: ""}}>
        <button  style={{marginLeft: "10px", marginTop: "15px",cursor: "pointer", backgroundColor: "transparent", borderColor: "transparent"}} onClick={handleClose}><RxCross1 size={30}/></button><br/>
        <div className="sellart-text1">PICASSO</div>
        <div className="sellart-text2">From Canvas to Collection: Your Art Journey Starts Here!</div>
        <div style={{marginTop: "50px"}}><br/>
            <form onSubmit={handleSubmit}>
                <input style={{marginLeft: "420px"}} className="sell-input" type="text"  id="artname" name="artname" placeholder="Art Work Name" onChange={handleChange}></input>&emsp;&emsp;&emsp;
                <input className="sell-input" type="text"  id="price" name="price" placeholder="Price" onChange={handleChange}></input><br></br><br></br>
                <input style={{marginLeft: "420px"}} className="sell-input" type="text"  id="artist" name="artist" placeholder="Artist" onChange={handleChange}></input>&emsp;&emsp;&emsp;
                <input className="sell-input" type="text"  id="style" name="style" placeholder="Style" onChange={handleChange}></input><br></br><br></br>
                <input style={{marginLeft: "420px"}} className="sell-input" type="text"  id="type" name="type" placeholder="Type" onChange={handleChange}></input>&emsp;&emsp;&emsp;
                <input className="sell-input" type="text"  id="size" name="size" placeholder="Size" onChange={handleChange}></input><br></br><br></br>
                <input style={{marginLeft: "420px"}} className="sell-input" type="text"  id="year" name="year" placeholder="Year" onChange={handleChange}></input>&emsp;&emsp;&emsp;
                {/* <input className="sell-input" type="text"  id="artimg" name="artimg" placeholder="Image" onChange={handleChange}></input><br></br><br></br> */}
               <div style={{marginLeft: "390px", height: "", width: "600px"}}><FileUploader setImageUrl={setFileUrl} /></div>
                <button className="sell-btn">SUBMIT</button>
            </form>
        </div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}

        </div>
        </>
    )
}
export default SellArt;