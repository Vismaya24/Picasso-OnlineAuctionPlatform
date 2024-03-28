import React from "react";
import NavBar from "./Utils/NavBar";
import "../assets/css/Sell.css";
import Footer from "./Utils/Footer";
import { useRef } from "react";
import 'smoothscroll-polyfill';
import { Link } from "react-router-dom";
import { saveArt } from "./Services/Api";
import { useState } from "react";
import { VscAccount } from 'react-icons/vsc';
import { PiPaintBrush} from 'react-icons/pi';
import { TiTickOutline} from 'react-icons/ti';
import { useNavigate } from "react-router-dom";

window.__forceSmoothScrollPolyfill__ = true;

const Sell = () => {
  const sectionRef = useRef(null);
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(formdata)
      const res = await saveArt(formdata);
      console.log(res)
      if (res.status === 201) {
        
        
          navigate('/buy')
       
      }
    }
  
    return(
        <>
        <div style={{position: "absolute"}}> 
        <NavBar /><br></br>
        <div style={{display: "inline-flex", marginTop: "70px"}}>
        <div className="sell-text2">Crafting <br></br>Masterpieces<br></br> Unleashing <br></br>Emotions<br></br>
        {/* <button className="sell-button" onClick={scrollToSection}>Sell</button> */}
        <Link to="/sellart"><button className="sell-button">Sell</button></Link>
        </div>
        <img style={{marginTop: "40px", marginLeft: "40px"}} src="sell.jpg" height="500px" width="850px" alt=""></img>
        </div><br/>
        <div style={{textAlign: "center", fontFamily: "Inter", fontSize: "70px", marginTop: "140px"}}>How it Works</div>
        <div style={{display: "inline-flex", marginLeft: "45px", marginTop: "50px"}}>
          <center><div className="sell-box1"><VscAccount size={80} /><br/>Create an account<br/><div style={{fontSize: "18px", fontWeight: "200"}}>Create an account or login if already created</div></div></center>
          <center><div className="sell-box1"><PiPaintBrush size={80}/><br/>Enter art work details<br/><div style={{fontSize: "18px", fontWeight: "200"}}>Enter necessary details of the art work</div></div></center>
          <center><div className="sell-box1"><TiTickOutline size={80}/><br/>Submit and start auction<br/><div style={{fontSize: "18px", fontWeight: "200"}}>Submit details and wait for biders</div></div></center>
        </div>
        <div style={{marginTop: "40px"}} className="sell-box">
        <div className="sell-text1">Sell art from <br></br>your <br></br>collection<Link to="/sellart"><button className="sell-button2">Start Selling</button></Link></div><br></br>
        <img src="https://img.freepik.com/premium-photo/oil-painting-human-eye_252214-4803.jpg" alt="" width="700px" style={{marginLeft: "174.5px"}}></img>
        </div><br/><br/><br/><br/><br/><br/>
       </div>
        <Footer/>
        </>
    )
}
export default Sell;