import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
 import "../assets/css/Buy.css";
 import { useState } from "react";
 import NavBar from "./Utils/NavBar";
 import { CountDownTimer } from "./CountDown";
 import { useEffect } from "react";
 import { editArt, getArtById } from "./Services/Api";
 import { useDispatch } from "react-redux";
 import { addToCart } from "./redux/cartSlice";
 import { PiCertificate } from "react-icons/pi";
 import { MdOutlineFilterFrames } from "react-icons/md";
 import { HiOutlineCurrencyRupee } from "react-icons/hi";
 import { BsTruck } from 'react-icons/bs';
 import { AiOutlineCheck } from 'react-icons/ai';
 import Footer from "./Utils/Footer";
import BidForm from "./Utils/BidForm";
import { RxCross1 } from "react-icons/rx";



const ArtDetails = () => {
    const date = '2023-12-15T23:59:59'
    const date2 = '2023-12-16T23:59:59'
    const targetDate = new Date(date2);
    // const { detailId } = useParams();
    // const [details, setDetails] = useState([
    //     { id: '1', name: 'Sorry fürs Anspritzen', artist: 'Aneta Kajzer', type: 'Painting', year: '2023', price: '₹ 13,77,485', imgUrl: 'https://img.freepik.com/free-photo/vintage-landscape-with-gondolas_1160-162.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais', size: '100 x 100'},
    //     { id: '2', name: 'Study for a painting of Dora Breisach', artist: 'Gustav Klimt', type: 'Drawing', price: '₹ 1,67,82,514',year: '1917', imgUrl: 'https://img.freepik.com/free-photo/wonderful-holiday-destination_1160-160.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais', size: '100 x 100' },
    //     { id: '3', name: 'Sunset Boulevard', artist: 'Aneta Kajzer', type: 'Painting', price: '₹ 12,01,012', year: '2023', imgUrl: 'https://img.freepik.com/premium-photo/painting-landscape-with-castle-horse-drawn-carriage-generative-ai_900814-1436.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' , size: '100 x 100'},
    //     { id: '4', name: 'Choose Your Weapon (Slate)', artist: 'Banksy', type: 'Print', price: '₹ 81,42,070', year: '2010', imgUrl: 'https://img.freepik.com/free-vector/watercolor-impressionist-landscape_23-2147543830.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=ais', size: '100 x 100' },
    //     { id: '5', name: 'Three Men with Trays', artist: 'Salman Toor', type: 'Painting', price: '₹ 4,57,07,750', year: '2018', imgUrl: 'https://img.freepik.com/premium-photo/artwork-sketch-natural-peaceful-illustration-fabulous-watercolor-landscape-mountains-flowers_713766-490.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=sph', size: '100 x 100' },
    //     { id: '6', name: 'UP from Sanctum', artist: 'Damien Hirst',type: 'Print', price: '₹ 50,85,610', year: '2009/16', imgUrl: 'https://img.freepik.com/premium-photo/sunset-camcorder-effect-style-creative-digital-painting_743855-1888.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=sph' , size: '100 x 100'},
    //   ]);
    //   const detail = details.find((detail) => detail.id === detailId);
    //   if (!detail) {
    //     return <div>Detail not found.</div>;
    //   }

    const {detailId} = useParams();
    const [art, setArt] = useState([]);
    const fetchUsers = async () => {
        const response = await getArtById(detailId);
        setArt(response.data);
    }
    console.log(art);
    const navigate = useNavigate();
    const dispatch = useDispatch();     
    const handleAdd = (arts, detailId ) => {
        dispatch(addToCart( arts, detailId ));
        navigate('/cart')
    };
    useEffect(() => {
        fetchUsers();
      }, [])


    //   //bidnow
    //   const [isFormOpen, setIsFormOpen] = useState(false, {
       
    //   });
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     closeForm();
    // }
    //   const openForm = (id) => {
    //     setIsFormOpen(true);
    //   };
    
    //   const closeForm = () => {
    //     setIsFormOpen(false);
    //   };
    
    const handleBdiForm = (id) => {
      navigate(`/bidform/${id}`);
    }
    
    return(
        <>
        <div><NavBar/><br></br>
            {/* <Link style={{marginLeft: "30px"}} to="/buy"><FaArrowLeft color="black" size={35} /></Link><br></br> */}
            <div style={{marginTop: "70px"}} className="countdown"><CountDownTimer targetDate={targetDate}/></div>
            <div style={{display: "inline-flex", marginTop: "60px", marginLeft: "150px"}}>
                <img src={art.artimg} height="450px" width="700px" alt=""></img>
                <div className="detail-box">
                    <div className="detail-text1">{art.artname}</div>
                    <div className="detail-text2">{art.artist}, {art.year}</div><br></br>
                    <div className="detail-text3">{art.type} | {art.style} | {art.size}</div>
                    <div className="detail-text3"><MdOutlineFilterFrames />&nbsp;Unique work</div>
                    <div className="detail-text3"><PiCertificate />&nbsp;Includes a Certificate of Authenticity</div>
                    <div className="detail-text4">₹ {art.price}</div>
                    <button onClick={() => handleAdd(art)} className="purchase">Add to Cart</button><br></br>
                    <button onClick={() => handleBdiForm(art.aid)} className="offer">Make an Offer</button>
                    
    {/* <button className="offer" onClick={() => openForm(art.aid)}>Make an Offer</button>
      {isFormOpen && (
        <div className="overlay-bidnow">
          <div className="popup-bidnow">
          <RxCross1 size={25} onClick={closeForm} style={{marginTop: "7px", marginLeft: "470px"}}/>
            <div className="bid-text1">PICASSO</div>
            <form onSubmit={handleSubmit}>
            <input className="bidnow-input" type="text" name="price" id="price" placeholder="Price"  /><br/>
              <button className="bidnow-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )} */}
      
      
                    <div className="detail-text3" style={{marginTop: "20px"}}><HiOutlineCurrencyRupee />&nbsp;Shipping Charges and Taxes may apply at checkout</div>
                    <div className="detail-text3"><BsTruck />&nbsp;International shipping available</div>
                </div>
            </div>
            <div style={{display: "inline-flex", marginTop: "90px"}}>
                <div>
            <hr style={{marginLeft: "150px"}} width="80%" color="black"  size={1} />
            <div className="detail-text5">ART WORK DETAILS</div>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Type:</div><div className="detail-text7">{art.type}</div></div><br/>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Style:</div><div className="detail-text7">{art.style}</div></div><br/>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Year:</div><div className="detail-text7">{art.year}</div></div><br/>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Size:</div><div className="detail-text7">{art.size}</div></div><br/>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Ready To Hang:</div><div className="detail-text7">Yes</div></div><br/>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Signed:</div><div className="detail-text7">Yes, in certificate</div></div><br/>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Condition:</div><div className="detail-text7">In very good condition</div></div><br/>
            <div style={{display: "inline-flex"}}><div className="detail-text6">Signature:</div><div className="detail-text7">Hand-signed by artist, Signed, titled, numbered and dated verso, lower edge. <br/>With watermark, a microdot and a hologram containing a portrait of the artist.</div></div>
            <hr style={{marginLeft: "150px", marginTop: "30px"}} width="80%" color="black"  size={1} />
                </div>
            <div className="detail-box2"><div style={{textAlign: "center"}}>MAKE IT YOURS</div><br/><AiOutlineCheck size={20}  />&nbsp;Free & easy 14 days returns<br/><br/><AiOutlineCheck size={20} />&nbsp;Pay in instalments<br/><br/><AiOutlineCheck size={20} />&nbsp;Worldwide safe shipping</div>
            </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer />
        </div>
        </>
    )
}
export default ArtDetails;