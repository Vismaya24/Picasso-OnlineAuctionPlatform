import React from "react";
import "../../assets/css/NavBar.css";
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () =>{

    const cartItems = useSelector(state => state.cart.art);
    const wishlistItems = useSelector(state => state.wishlist.wish);

    return(
        <div>
            <div className="nav-bar">
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
        </div>
    )
}
export default NavBar;