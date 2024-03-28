import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa';
import NavBar from './Utils/NavBar';
import Footer from './Utils/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from './redux/cartSlice';
import "../assets/css/Cart.css";
import { MdDelete } from 'react-icons/md';
import { BsTruck } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import CartPopUp from './Utils/CartPopUp';


const Cart = () => {
  
  const cartItems = useSelector(state => state.cart.art);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, itemName) => {

    dispatch(removeFromCart(itemId, itemName));
    showMessage('sucess', 'Removed From Cart Sucessfully');

  
  };


  const price = cartItems.reduce((acc, art) => {
    return acc + art.price;
  }, 0);

  const shippingcharge = 200;

  const totalAmount = cartItems.reduce((acc, art) => {
    return acc + art.price; 
  }, shippingcharge)

  const handleShipping = () => {
    navigate('/checkout');
  }
  const handleShopping = () => {
    navigate('/buy')
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
  return (
    <div>
      <NavBar/><br/>
      <div style={{marginTop: "100px"}}>
      {cartItems.length === 0 ? (
        <div><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEX///8AAAAHBwf29vY9PT0KCgq/v78ZGRkPDw/b29sXFxd2dnYEBATPz8/X19f7+/u8vLyjo6MnJyff398hISHw8PBRUVGlpaXGxsbm5uaOjo5qamp/f39KSkrq6uo3Nzezs7NfX19XV1dDQ0OWlpZubm4kJCQvLy+JiYl6eno4SQrEAAAFxklEQVR4nO2ca1/qMAzGGQy5CnIXFLmoePz+X/BwdAkI40jbJ8nGr//3a9KtbZKn7SqVSCQSiUQikUgkEolEIsWnN20mX3Tr4/RpMLf2x5de1g0mnfWtffJimpyxW1s75cPpB/liU7N2y53cjiTpxNovZ3KG1ldPSvdNziY7jS5rx5xpTfO7MrN2zJv+pDfbVLkjjfJNk2PmW+7Js7UvgTxTR5qlm+8n8DcZWHsSyAtN/ldrT0L5zDrSLfd030/4WxlblTTryNTakVAWWUfqZV+3RjS21taehPJR2oTrBAqKzXIWiwfuaWw9WHsSyi7ryJO1I6F0KAW2diSURxpbj9aehNLILbaMqS97zh15snY6n6ZzTx6sXb6Ac9bUv6BJWFN37UhlY+1yPu7L6Nra5Xzck6Za3drnXDxKpAsSpDEeux6DgGfhUPX94fHspJs9/AZ3yx2qKzo+D79mDxdATOFK787n6bfs4QKIKeSKX31UIDFlmXniqYaswh7HUauGvdI/2ePmYgoHZ88FtEXPr5FeeUCpuM/i+0VRxBQqjrw3OgoiprAU4l2uFkRMobna9m9inDXxjvPKA1o9A0b4e9aEqZjyQuMiYHu2EGIKZa9BGUY7a+QT5pY7tBUYlPPRCj5EeeUOqweLkFY4proLSigeIC7w6/iD8ssZUm93Yc3QAF1hvPJgiAkBM/qwI4xbznDCFxiUOYO2KnhpPzM4TSIxxargpYI7uCjicPSCcMsZlkCCy9QXWEte8BwNf4+wb+vFBrdqkoJRNSl4KUcCHB4zPT3AWes9oDFAOeANSaWQOoIKNIuCl1QDyDZ5DxRbPWCNcA1pboh8LU7QQgNS1qAD1QlKK5aY5sLlGE941wyV6JGY4rU7EUCoVHoGiSmBtY0zVGjDiqE7ZFhygEYC7Ex4H5goONDDv79N1qK3HO4FRWLgasmzTrXgpVO7wPhVg2hLjnBNtQY2SmJKCmzzN6imgm6YAQu1q6GXBwrr30z0xRTWBrEmlxKv579w8MIeIeGCV+30AEml4CUfsdviBhUP6CBMi/oW3O4lWCpAp0UsXSqJKTSW4UWQtphCqwu+LNU9PfAiEda/odMDbRUxhawJnIPhpNrr8Jcjc4qGEkItaOvoKmiGiKz2FKHGAm2fQLpN0pAYx1Ad9r9QRSW1Bxt82uhKOtyPsUzQCj7/dRXzV+6HVD7EW/ctmfb/0V8cXZOQSofkTw9MFuNDN5KhWKa9ySxInB7ozx8Xy+pRN5K23IefJYo0xRbH3kbzJsZY6hjPRPf6WCp1R+JO9T5f9VkqM33r/m4dh8d1w2v7odoNufRacbUaPgtG257GatVt7l7fB6IieX91sLZZz8t7V/8wQT7sjmgCmNB2VQl/HvYDrnJ29netQuhTJOwq74Si4V032xsL4ZCeUbc50wiDd3isryeFwiOr7H+xoOQ94FpQMSDpWmtbRIoajawiXKEOQU9dFIZvUJc3VfyG1EvDq0kYRE4fWCBwQMcG2tyxu2IFQvunTvWpUMmu/5eXpkxPVOWsb2TWFf1+CIUsgx8IyXRk+7thNDJDa6T+Lzqp7Z3RVvXXZ/Wt1Q3USCQSKRp3nbTd7bbTjqCypWBjMDws8kOhC9QKNlqrn/EqFQhXGjYezqJ6E77jqmKjemojSapgKxo2WrlZVhP65TVsVFZ5NsCXejRsDPJtQH/+oGGDlaCk3rmv1e47XCwCVUcNG3yhZpxVOi0+pQeLWho2WPWtc8XGJzlgP9vSsMFi6dGNabILm4oaNvg/HkcbI3SvHXY3RcMGS3NHxzZo+6paJhu305GbGVo3M9lzlkbK7ySXX7iNw34unSTu4YOVho3z9IHzbcEURcLG5YQOeKlDw8btpPGVkULRo2Fjn5wqlKEaNvZWFIQBDRv7L5/+tCEh1WjYqJyIZ0KX0DRs7Hn8TBvVaiP9FJRMNWxEIpFIJBKJRCKRSCQSUeMvU8BIOt49KLAAAAAASUVORK5CYII=" height="200px" width="200px" style={{marginLeft: "670px"}} /><br/>
          <div style={{marginLeft: "643px"}} className='cart-style5'>Your Cart is Empty</div>
          <button style={{marginLeft: "645px", marginTop: "20px", width: "250px", height: "45px", backgroundColor: "transparent", borderColor: "black", cursor: "pointer"}} onClick={handleShopping}>Continue Shopping</button></div>
      ) : (
        <div>
<div style={{display: "inline-flex"}}>
          <div>
            <div className="cart-style5">Your Cart</div>
            {cartItems.length === 1 ? (
            <div className="cart-style6">{cartItems.length} item</div>
            ) : (
              <div className="cart-style6">{cartItems.length} items</div>
            )}
          {cartItems.map((art) => (
            <div>
              <div className='cart-box'>
              <div style={{display: "inline-flex"}}>
              <img src={art.artimg} alt="" height="200px" width="230px" />
              <div style={{marginLeft: "20px", lineHeight: "1.7", marginTop: "-25px"}}><br/>
              <div className="cart-style1">{art.artname}<br/></div>
              <div className="cart-style2">By {art.artist}<br/></div>
              <div className="cart-style3">{art.type} | {art.style} | {art.size}</div>
              <div className="cart-style4">₹ {art.price}</div>
              <div className="cart-style3"><BsTruck size={25} /><div style={{marginTop: "-33px"}}>&emsp;&emsp;This artwork is elgible for international shipping</div></div>
              <div><button style={{height: "50px", borderColor: "transparent", backgroundColor: "transparent", marginLeft: "450px", marginTop: "-10px", cursor: "pointer"}} onClick={() => handleRemoveItem(art.aid, art.artname)}><MdDelete  size={30} /></button></div>
              </div>
              </div>
            </div>
            </div>
          ))}
          </div>
          <div style={{display: "inline"}}>
          <div className='proceed-box'>
            <div className='proceed-text1'><br/>ORDER SUMMARY</div>
            <br/>
            <div className='proceed-text2'>
            SUB TOTAL &emsp;<div className="proceed-text3">₹{price}</div><br/>
            SHIPPING &emsp; <div className="proceed-text3">₹{shippingcharge}</div><br/>
            TAXES &emsp;&emsp;&ensp; <div className="proceed-text3">-</div> <br/>
            </div>
            <hr width="70%" color='black' size="1"></hr>
            <div style={{marginTop: "10px"}} className='proceed-text1'>Total&nbsp;: &nbsp; ₹ &nbsp;{totalAmount}</div>
          <div><button onClick={handleShipping} className='proceed-btn'>Proceed to Shipping</button></div>
          </div><br/><br/>
          <div style={{marginLeft: "105px"}}><div style={{fontSize: "20px", marginTop: "-10px"}}>Have Any Questions ?<br/></div><div className="contactus-style2" style={{marginTop: "10px"}}><SiGmail/>&emsp;picasso@gmail.com<br></br><FaPhoneAlt />&emsp;80755308993</div><br></br><br></br></div>
        </div>
        </div>
        </div>
      )}

      </div>
      <div style={{marginTop: "30px"}} className="follow-box">
        <div style={{display: "inline-flex", marginLeft: "450px"}}>
        FOLLOW US
        <div>
        <Link style={{color: "white", marginLeft:"100px"}} to="https://www.instagram.com/"><BsInstagram size={30}/></Link>
        <Link style={{color: "white", marginLeft:"100px"}} to="https://www.facebook.com/"><FaFacebookF size={30}/></Link>
        <Link style={{color: "white", marginLeft:"100px"}} to="https://twitter.com/home?lang=en"><RiTwitterXLine size={30}/></Link>
        </div>
        </div>
        </div>
        {isPopupVisible && <CartPopUp message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}

      <br/><br/><br/><Footer />
    </div>
  );
};

export default Cart;