import React from "react";
import "../../assets/css/Popup.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";


const Popup = ({ togglePopup, handleGotItClick, message: { type, content, btn } }) => {

    const popupRef = useRef(null);
    
    useEffect(() => {
        if(popupRef.current){
            const contentWidth = popupRef.current.scrollWidth;
            if(contentWidth){
                popupRef.current.style.width = '${contentWidth}px';
            }
        }
    }, [type, content]);
    
    return(
        <div className="overlay-auth">
        <div className="popup-auth" ref={popupRef}>
        <button  style={{marginLeft: "380px", marginTop: "15px",cursor: "pointer", backgroundColor: "transparent", borderColor: "transparent"}} onClick={togglePopup}><RxCross1 size={25}/></button><br/>
        <div className="popupAuth-text1">{type}
        </div>
        <div className="popupAuth-text2">{content}</div>
        <div className="popup-footer">
            <button className="popupAuth-button" onClick={() => { togglePopup(); handleGotItClick() }}>{btn}</button>
        </div>
       </div>
        </div>
       
    )
}
export default Popup;