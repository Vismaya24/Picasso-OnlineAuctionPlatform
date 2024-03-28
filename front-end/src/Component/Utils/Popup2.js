import React from "react";
import "../../assets/css/Popup2.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";


const Popup2 = ({ togglePopup, handleGotItClick, message: { type, content, btn } }) => {

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
    const goToWishList = () => {
        navigate('/wishlist')
    }
    return(
        <div className="overlay-wishlist">
       <div className="popup3" ref={popupRef}>
       <button  style={{marginLeft: "380px", marginTop: "-10px",cursor: "pointer", backgroundColor: "transparent", borderColor: "transparent"}} onClick={togglePopup}><RxCross1 size={25}/></button><br/>
        <div style={{textAlign: "center"}} className="popup-header">PICASSO</div>
       <div style={{marginLeft: "35px"}}>

        <div className="popup-body">{content}</div>
        <div className="popup-footer">
            <button onClick={() => handleGotItClick()} className="popup-btn2">{btn}</button>
            <button className="popup-btn1" onClick={() => { togglePopup()}}>continue</button>
        </div>
       </div>
       </div>
        </div>
    )
}
export default Popup2;