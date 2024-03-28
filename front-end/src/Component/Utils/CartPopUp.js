import React from "react";
import "../../assets/css/Popup2.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";


const CartPopUp = ({togglePopup, handleGotItClick, message: { type, content, btn } }) => {

    const popupRef = useRef(null);
    
    useEffect(() => {
        if(popupRef.current){
            const contentWidth = popupRef.current.scrollWidth;
            if(contentWidth){
                popupRef.current.style.width = '${contentWidth}px';
            }
        }
    }, [type, content]);

    const navigate = useNavigate();
    const goToCartList = () => {
        navigate('/cart')
    }
    return(
       <div className="popup-cart" ref={popupRef}>
        <div style={{marginLeft: "35px", marginTop: "25px"}} className="popup-header">PICASSO</div>
       <div style={{marginLeft: "35px"}}>
        <div>
        <span className="close toggle" onClick={togglePopup}></span></div>
        <div className="popup-body">{content}</div>
        <div className="popup-footer">
            {/* <button className="popup-btn2">YES</button> */}
            <button className="popup-btn1" onClick={() => { togglePopup(); handleGotItClick() }}>OK</button>
        </div>
       </div>
       </div>
    )
}
export default CartPopUp;