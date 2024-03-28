import React, { useEffect, useState } from "react";
import '../assets/css/CheckOut.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromCart } from "./redux/cartSlice";
import { addOrder, deleteArt } from "./Services/Api";
import { IoLocationOutline } from 'react-icons/io5';


const CheckOut = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ordered, setOrdered] = useState(false);
    const id = localStorage.getItem('xuserId')
    const name = localStorage.getItem('xuserName')
    const phone = localStorage.getItem('xuserPhone')
    const email = localStorage.getItem('xuserEmail')
    const country = localStorage.getItem('xuserCountry')
    const state = localStorage.getItem('xuserState')
    const district = localStorage.getItem('xuserDistrict')
    const birthdate = localStorage.getItem('xuserBirthdate')
    const userimg = localStorage.getItem('xuserUserimg')
    const pincode = localStorage.getItem('xuserPincode')
    const house = localStorage.getItem('xuserHouse')

    const datex = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedDay}/${formattedMonth}/${year}`;
    }
    const currentdate = datex();
    
    const shippingcharge = 200;
    const taxes = 1000;
    const cartItems = useSelector((state) => state.cart.art);
    const artData = () => {
        const aTotal = cartItems.reduce((acc, art) => acc + art.price, shippingcharge + taxes);
        return { aTotal };
    };

    const data = artData();
    useEffect(() => {
        if (data.aTotal === 0) {
            navigate('/buy')
        }
    }, [])

    // const handleOrder = async (id) => {
    //     // const orderdata = {
    //     //     uid: id,
    //     //     orderAddress: address,
    //     //     paymentMode: "cod",
    //     // }
    //     // addOrder(orderdata)
    //     dispatch(removeAllFromCart());
    //     const res = await deleteArt(id);
    //     // console.log(res.status)
    //         navigate('/payment');
    // }

    // const handleOrder = async () => {
    //     setOrdered(true);
    //     const orderdata = {
    //         id: id,
    //         orderTotal: artData,
    //         orderAddress: state,
    //         paymentMode: "Online",
    //         artname: "v"           

    //     }
    //     const checkstatus = await addOrder(orderdata)
    //     if (checkstatus.status === 200) {
    //         dispatch(removeAllFromCart());
    //         navigate('/payment')
    //         // console.log(orderdata);
    //     }
    //     else {
    //         setOrdered(false);
    //     }

    // }
    
    const handlePayment = (id) => {
        navigate('/payment');
        dispatch(removeAllFromCart());
        deleteArt(id);
      }
      const handleOrder = async (id) => {
        navigate('/payment');
        dispatch(removeAllFromCart());
        // const res = await deleteArt(id);
        // console.log(res.status)
    }
      const handleAddress = (id) =>{
        navigate(`/ship/${id}`)
      }
      const handleDelete = async (id) => {
          const res = await deleteArt(id);
          console.log(res.status)
        
     }
      const price = cartItems.reduce((acc, art) => {
        return acc + art.price;
      }, 0);
    return(
        <>
        <div className="name-bar"><div className="title-text">PICASSO</div></div>
        <div className="check1">Shipping & Payment</div>
        <hr style={{marginLeft: "250px"}} width="66%" color="#b3b3b3" size="1"></hr>
        <div style={{display: "inline-flex"}}>
        <div className="container1">
            <div className="checkout-text1">Shipping Details</div>
        {/* {cartItems.map((art) => (
            <div className="checkout-text2">{art.artname} ₹ {art.price} </div>
            ))} */}
        <br/>
        <div className="checkout-text3" style={{display: "inline-flex"}}><IoLocationOutline size={25} />Delivery Address</div>
        <div className="checkout-text2"><br/>Name: {name}<br/>Email: {email}<br/>House Number / Name: {house}<br/>District: {district}<br/>State: {state}<br/>Country: {country}<br/>Pincode: {pincode}<br/>Mobile Number : {phone}<br/>Order Date : {currentdate}</div>
        {/* <div><button onClick={() => handleAddress(id)} className="update-address">Update Address</button></div> */}
        {/* {cartItems.map((art) => (
            <button className="payment" onClick={() => handleOrder(art.aid)}>Make Payment</button>
        ))} */}
        </div>
        <div className='summary-box2'>
            <div className='proceed-text1'>ORDER SUMMARY</div>
            <br/>
            <div className='proceed-text2'>
            
                <div>
                    SUB TOTAL &emsp;<div className="proceed-text3">₹ {price}</div><br/>
                </div>
      
            SHIPPING &emsp; <div className="proceed-text3">₹ {shippingcharge}</div><br/>
            TAXES &emsp;&emsp;&ensp; <div className="proceed-text3">₹ {taxes}</div> <br/>
            </div>
            <hr width="70%" color='black' size="1"></hr>
            <div style={{marginTop: "10px"}} className='proceed-text1'>Total&nbsp;: &nbsp; ₹ &nbsp;{data.aTotal}</div>

            {/* {cartItems.map((art) => (
            <div><button onClick={() => handleOrder(art.aid)} className='proceed-btn'>Proceed to Payment</button></div>
            ))}  */}

          <div><button style={{textTransform: "uppercase"}} onClick={() => handleOrder()} className='proceed-btn'>Proceed to Payment</button></div>
          </div>
        </div>
        </>
    )
}

export default CheckOut;