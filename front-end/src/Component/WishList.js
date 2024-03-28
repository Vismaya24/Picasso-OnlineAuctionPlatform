import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromWishList } from "./redux/wishlistSlice";
import NavBar from "./Utils/NavBar";
import Footer from "./Utils/Footer";
import "../assets/css/Cart.css";
import { MdDelete } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { addToCart } from "./redux/cartSlice";
import WishListPopUp from "./Utils/WishListPopUp";

const WishList = () => {

    const wishlistItems = useSelector(state => state.wishlist.wish);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId, itemName) => {
        dispatch(removeFromWishList(itemId));
        showMessage('sucess', 'Removed From Wishlist Sucessfully');

      };
      const handleShopping = () => {
        navigate('/buy')
      }
      const handleCart = (arts, itemId) => {
        dispatch(addToCart(arts));
        dispatch(removeFromWishList(itemId));

      }
      const [isPopupVisible, setPopupVisible] = React.useState(false);
        const [message, setMessage] = React.useState({
          type: '',
          content: '',
          url: '',
          btn: ''
        });
        const showMessage = (type, content, url = '', btn = 'Got it') => {
          setMessage({type, content, url, btn});
          setPopupVisible(true);
        }
        
        const handleGotItClick = () =>{
          if(message.url){
            navigate(message.url);
          }
          setPopupVisible(false);
        };
    return(
        <>
        <NavBar/><br/><br/><br/><br/>
        {wishlistItems.length === 0 ? (
            <div><img alt="" src="data:image/png;base64,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" height="300px" width="300px" style={{marginLeft: "620px"}} /><br/>
          <div style={{marginLeft: "620px"}} className='cart-style5'>Your Wishlist is Empty</div>
          <button style={{marginLeft: "645px", marginTop: "20px", width: "250px", height: "45px", backgroundColor: "transparent", borderColor: "black", cursor: "pointer"}} onClick={handleShopping}>Continue Shopping</button></div>
        ) : (
            <div>
                <div style={{marginLeft:"190px"}} className="cart-style5">Your Wishlist</div>
                {wishlistItems.length === 1 ? (
                    <div style={{marginLeft:"190px"}} className="cart-style6">{wishlistItems.length} item</div>
                    ) : (
                    <div style={{marginLeft:"190px"}} className="cart-style6">{wishlistItems.length} items</div>
                )}
                <div style={{marginLeft:"130px", marginTop: "20px"}}>
                {wishlistItems.map((wish) => (
                    <div style={{display: "inline-flex", marginLeft:"20px"}}>
                <div className="wishlist-box">
                    <Link to={`/detail/${wish.aid}`}><img src={wish.artimg}  width="250px" height="230px" alt="" /></Link>
                        <div className="wish1"> {wish.artname}</div>
                        <div className="wish2">By {wish.artist}</div>
                        <div className="wish3"> {wish.style} | {wish.type} | {wish.size}</div>
                        <div className="wish2"> ₹ {wish.price}</div>
                        <div style={{display: "inline-flex"}}>
                        <button onClick={() => handleCart(wish, wish.aid)} style={{borderColor: "transparent", marginTop: "-10px", backgroundColor: "transparent", cursor: "pointer", marginLeft: "180px"}}><BsCart size={25}/></button>
                        <button style={{height: "50px", borderColor: "transparent", backgroundColor: "transparent", marginLeft: "-10px", marginTop: "-10px", cursor: "pointer"}} onClick={() => handleRemoveItem(wish.aid, wish.artname)}><MdDelete  size={30} /></button>
                        </div>
                </div>
                </div>
                    ))}
                    </div>
            </div>
        )}
        <br/>
        {isPopupVisible && <WishListPopUp message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}

        <Footer/>
        </>
    )
}

export default WishList;


