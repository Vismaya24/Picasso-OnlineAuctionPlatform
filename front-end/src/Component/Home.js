import React from "react";
import '../assets/css/Home.css'
import { Link } from "react-router-dom";
import HomeFooter from "./Utils/HomeFooter";
import { useState } from "react";
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import HomeNavBar from "./Utils/HomeNavBar";
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { useSelector } from "react-redux";

const Home = () =>{

    const cartItems = useSelector(state => state.cart.art);
    const wishlistItems = useSelector(state => state.wishlist.wish);

    return(
        <div>
        <div style={{ backgroundImage:`url("bg1.jpg")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}> 
        {/* <div className="display">
            <div className="font-style1">&emsp;&emsp;PICASSO</div>
            <div style={{marginLeft: "950px", display: "inline-flex"}}>
            <Link style={{textDecoration: "none"}} to="/login"><div style={{textIndent: "40px"}} className="font-style1">LOGIN</div></Link>
            <Link style={{textDecoration: "none"}} to="/signup"><div style={{textIndent: "40px"}} className="font-style1">SIGN UP</div></Link>
            <Link style={{textDecoration: "none"}} to="/contactUs"><div style={{textIndent: "40px"}} className="font-style1">CONTACT US</div></Link>
            </div>  
        </div> */}
        <div style={{display: "inline-flex"}}>
                <div className="title-text">PICASSO</div>
                <Link style={{textDecoration: "none"}} to="/"><div style={{marginLeft:"450px"}} className="nav-text">HOME</div></Link>
                <Link style={{textDecoration: "none"}} to="/buy"><div className="nav-text">BUY</div></Link>
                <Link style={{textDecoration: "none"}} to="/sell"><div className="nav-text">SELL</div></Link>
                <Link style={{textDecoration: "none"}} to="/login"><div className="nav-text">LOGIN</div></Link>
                <Link style={{textDecoration: "none"}} to="/signup"><div className="nav-text">SIGN UP</div></Link>
                <Link style={{textDecoration: "none"}} to="/contactUs"><div className="nav-text">CONTACT US</div></Link>
                <Link to="/profile" style={{marginLeft: "300px", marginTop: "20px", color: "#1b1b1b"}}><AiOutlineUser size={25}/></Link>
                {cartItems.length === 0 ? (
                <Link to="/cart" style={{marginLeft: "20px", marginTop: "20px", color: "#1b1b1b", textDecoration:"none"}}><BsCart size={25}/></Link>
                ) : (
                    <Link to="/cart" style={{marginLeft: "20px", marginTop: "20px", color: "#1b1b1b", textDecoration:"none"}}><BsCart size={25}/><div className="cart-length">{cartItems.length}</div></Link>
                )}
                {wishlistItems.length === 0 ? (
                <Link to="/wishlist" style={{marginLeft: "20px", marginTop: "20px", color: "#1b1b1b", textDecoration:"none"}}><FiHeart size={25}/></Link>
                ) : (
                    <Link to="/wishlist" style={{marginLeft: "20px", marginTop: "20px", color: "#1b1b1b", textDecoration:"none"}}><FiHeart size={25}/><div className="cart-length">{wishlistItems.length}</div></Link>
                )}
            </div>
            <div>
                <div className="home-box3"><br/>
                <div style={{marginLeft: "50px", marginTop:"40px", marginRight: "50px"}} className="font-style2">I do not evolve, I am. There is, in art, neither past, nor future. <br></br>Art that is not in the present will never be.</div>
        <div className="font-style3">- Pablo Picasso</div>
        <div style={{marginLeft: "208px", marginTop: "45px"}}>
        {/* <Link to="/buy"><button className="button1">BUY</button></Link>&emsp;&emsp; */}
        {/* <Link to="/sell"><button className="button2">SELL</button></Link> */}
        </div>
                </div>
            </div>
        </div><br></br><br></br>

        <div>
            <HomeNavBar/>
        <div style={{display: "inline-flex"}}>
         <div className="home-box1">PICASSO</div>
         <div className="home-box2"><br/>Our online auction platform for paintings and collectibles is a vibrant marketplace where art enthusiasts, collectors, and connoisseurs come together to buy and sell remarkable pieces from around the world. With a user-friendly interface and a wide range of categories, we offer a seamless and engaging experience for both buyers and sellers.Our online auction for paintings and collectibles website offers an inclusive platform for anyone passionate about art and collectibles. Whether you're a seasoned collector or a newcomer, our platform ensures a seamless, secure, and enjoyable experience, making it the go-to destination for discovering and acquiring remarkable treasures from the world of art and collectibles. Join us today and embark on a journey of artistic exploration and acquisition.</div>
        </div><br></br><br></br>
        <div className="gallery1">Famous Art Galleries and Museums</div><br></br>
        <div style={{display: "inline-flex", marginLeft: "100px"}}>
        <div className="gallery-box">
            <img alt="" src="metro.jpeg" height="350px" width="250px"></img><div className="gallery2">The Metropolitan Museum of Art</div>
            <div className="gallery3"><Link style={{color: "black", textDecoration: "none"}} to="https://www.google.com/maps/dir/10.810309,76.6066105/metropolitan+museum+of+art/@1.8824591,-84.7789622,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c25896f660c26f:0x3b2fa4f4b6c6a1fa!2m2!1d-73.963244!2d40.7794366?entry=ttu"><MdLocationPin size={20}/>New York</Link></div>
        </div>

        <div className="gallery-box">
            <img alt="" src="louvre.avif" height="350px" width="250px"></img><div className="gallery2">Louvre Museum</div>
            <div className="gallery3"><Link style={{color: "black", textDecoration: "none"}} to="https://www.google.com/maps/dir/10.810309,76.6066105/Louvre+Museum/@22.0185108,-5.6891516,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47e671d877937b0f:0xb975fcfa192f84d4!2m2!1d2.337644!2d48.8606111?entry=ttu"><MdLocationPin size={20}/>Paris, France</Link></div>
        </div>

        <div className="gallery-box">
            <img alt="" src="brithish.jpg" height="350px" width="250px"></img><div className="gallery2">The British Museum</div>
            <div className="gallery3"><Link style={{color: "black", textDecoration: "none"}} to="https://www.google.com/maps/dir/10.810309,76.6066105/British+Museum/@23.210289,-6.6036673,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x48761b323093d307:0x2fb199016d5642a7!2m2!1d-0.1269566!2d51.5194133?entry=ttu"><MdLocationPin size={20}/>London, England</Link></div>
        </div>

        <div className="gallery-box">
            <img alt="" src="national.avif" height="350px" width="250px"></img><div className="gallery2">The National Gallery</div>
            <div className="gallery3"><Link style={{color: "black", textDecoration: "none"}} to="https://www.google.com/maps/dir/10.810309,76.6066105/National+Gallery/@23.2055492,-6.6055933,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x487604ce176ac979:0x42af85654e23a0b4!2m2!1d-0.128299!2d51.508929?entry=ttu"><MdLocationPin size={20}/>London, England</Link></div>
        </div>
        </div>
        <div className="follow-box">
        <div style={{display: "inline-flex", marginLeft: "450px"}}>
        FOLLOW US
        <div>
        <Link style={{color: "white", marginLeft:"100px"}} to="https://www.instagram.com/"><BsInstagram size={30}/></Link>
        <Link style={{color: "white", marginLeft:"100px"}} to="https://www.facebook.com/"><FaFacebookF size={30}/></Link>
        <Link style={{color: "white", marginLeft:"100px"}} to="https://twitter.com/home?lang=en"><RiTwitterXLine size={30}/></Link>
        </div>
        </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <HomeFooter/>
        </div>
        
        </div>
    )
}
export default Home;