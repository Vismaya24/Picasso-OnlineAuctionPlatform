import React from "react";
import NavBar from "./Utils/NavBar";
import "../assets/css/Buy.css";
import Footer from "./Utils/Footer";
import { useState } from "react";
import { BiSearch } from 'react-icons/bi';
import { deleteArt, getArt } from "./Services/Api";
import { FiHeart } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { addToWishList, removeFromWishList } from "./redux/wishlistSlice";
import Popup2 from "./Utils/Popup2";
import CartPopUp from "./Utils/CartPopUp";
import NotLoggedIn from "./Utils/NotLoggedIn";

const Buy = ({item}) =>{
      
    const [searchArt, setSearchArt] = useState('');
    const [items, setItems] = useState([
        { id: '1', name: 'Sorry fürs Anspritzen', artist: 'Aneta Kajzer', type: 'Painting', year: '2023', price: '₹ 13,77,485', size: '100 x 100 cm', imgUrl: 'https://img.freepik.com/free-photo/vintage-landscape-with-gondolas_1160-162.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '2', name: 'Study for a painting', artist: 'Gustav Klimt', type: 'Drawing', price: '₹ 1,67,82,514', size: '100 x 100 cm' ,year: '1917', imgUrl: 'https://img.freepik.com/free-photo/wonderful-holiday-destination_1160-160.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '3', name: 'Sunset Boulevard', artist: 'Aneta Kajzer', type: 'Painting', price: '₹ 12,01,012', year: '2023', size: '100 x 100 cm' , imgUrl: 'https://img.freepik.com/premium-photo/painting-landscape-with-castle-horse-drawn-carriage-generative-ai_900814-1436.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '4', name: 'Choose Your Weapon (Slate)', artist: 'Banksy', type: 'Print', price: '₹ 81,42,070', year: '2010', size: '100 x 100 cm' , imgUrl: 'https://img.freepik.com/free-vector/watercolor-impressionist-landscape_23-2147543830.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=ais' },
        { id: '5', name: 'Three Men with Trays', artist: 'Salman Toor', type: 'Painting', price: '₹ 4,57,07,750', year: '2018', size: '100 x 100 cm' , imgUrl: 'https://img.freepik.com/premium-photo/artwork-sketch-natural-peaceful-illustration-fabulous-watercolor-landscape-mountains-flowers_713766-490.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=sph' },
        { id: '6', name: 'UP from Sanctum', artist: 'Damien Hirst',type: 'Print', price: '₹ 50,85,610', year: '2009/16', size: '100 x 100 cm' , imgUrl: 'https://img.freepik.com/premium-photo/sunset-camcorder-effect-style-creative-digital-painting_743855-1888.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=sph' },
      ]);
      const [filteredItems, setFilteredItems] = useState(items);
      const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchArt(searchArt);
    
        const filteredItems = items.filter((item) =>
          Object.values(item).some(
            (value) =>
              value &&
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setFilteredItems(filteredItems);
      };

      

    //backend integration

    const [isPopupVisible, setPopupVisible] = React.useState(false);
        const [message, setMessage] = React.useState({
          type: '',
          content: '',
          url: '',
          btn: ''
        });
        const showMessage = (type, content, btn = '', url = '') => {
          setMessage({type, content, url, btn});
          setPopupVisible(true);
        }
        
        const navigate = useNavigate();
        const handleGotItClick = () =>{
          if(message.url){
            navigate(message.url);
          }
          setPopupVisible(false);
        };
    const [arts, setArts] = useState([]);
    const fetchArt = async () => {
      try{
        const response = await getArt();
        setArts(response.data);
      }
      catch(error){

      }
    }    
    console.log(arts);

    const dispatch = useDispatch();     
    
    const handleAdd = (arts ) => {
      dispatch(addToCart( arts ));
      showMessage('sucess', 'Artwork successfully added to cart !', 'View Cart', '/cart');

  };
    useEffect(() => {
      fetchArt();
    }, []) 

const handleWishList = (arts) => {
  dispatch(addToWishList(arts));
  showMessage('sucess', 'Artwork successfully added to wishlist !', 'View Wishlist', '/wishlist');
}
const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));


    return(
        <>
          <NavBar /><br></br>
        {isLoggedIn ? 
        <div>
       <div style={{marginTop: "90px"}}>
       {/* <select className="select-filter">
        <option className="option-filter">ArtWork Type</option>
        <option className="option-filter">Prints</option>
        <option className="option-filter">Paintings</option>
        <option className="option-filter">Drawings</option>
        <option className="option-filter">Sculptures</option>
        <option className="option-filter">Photographs</option>
       </select> */}
       {/* <select className="select-filter">
        <option className="option-filter">Year</option>
        <option className="option-filter">1900 - 1950</option>
        <option className="option-filter">1950 - 2000</option>
        <option className="option-filter">2000 - 2023</option>
       </select> */}
       {/* <div style={{display: 'inline-flex'}}>
       <input className="search-bar" type="text" placeholder="Search Art Works" id="search-art" name="search-art" onChange={handleSearch} />
       <button className="search-btn"><BiSearch size={25} color="black"/></button>
       </div> */}
       {/* <div style={{marginTop: "15px", marginLeft: "60px"}}>
        {filteredItems.map((item, index) => (
            <div style={{display: "inline-flex"}}>
              <Link style={{textDecoration: "none"}} key={item.id} to={`/detail/${item.id}`}>
                <div className="category-box">
                <img src={item.imgUrl} height="300px" width="300px" alt=""></img><br></br>
                <div style={{marginLeft:"10px"}}>
                <div className="buy-text1">{item.name}</div>
                <div className="buy-text4">{item.artist}&emsp;{item.year}</div>
                <div className="buy-text3">{item.type} - {item.size}</div>
                <div className="buy-text2">{item.price}</div>
                <div style={{display: 'inline-flex'}}>
                <button className="bidnow-btn">BID NOW</button>
                <button style={{backgroundColor: "transparent", borderColor: "transparent"}}><FiHeart color="black" style={{marginTop: "40px",marginLeft: "90px"}} size={25}/></button>
                </div>
                </div> 
            </div>
            </Link>
            </div>
        ))}
       </div> */}


       {/* backend integration */}
       <div >
       <div style={{marginTop: "15px", marginLeft: "60px"}}>
       {arts.map((art) => (
            <div style={{display: "inline-flex"}}>
                <div className="category-box">
              <Link style={{textDecoration: "none"}} key={art.aid} to={`/detail/${art.aid}`}><img src={art.artimg} height="300px" width="300px" alt=""></img><br></br></Link>
                <div style={{marginLeft:"10px"}}>
                <div className="buy-text1">{art.artname}</div>
                <div className="buy-text4">{art.artist}&emsp;{art.year}</div>
                <div className="buy-text3">{art.type} - {art.size}</div>
                <div className="buy-text2">₹ {art.price}</div>
                <div style={{display: 'inline-flex'}}>
                <button className="bidnow-btn" onClick={() => handleAdd(art)}>ADD TO CART</button>
                <button onClick={() => handleWishList(art)} style={{backgroundColor: "transparent", borderColor: "transparent"}}><FiHeart color="black" style={{marginTop: "40px",marginLeft: "90px"}} size={25}/></button>
                </div>
                </div> 
            </div>
            </div>
        ))}
       </div>
       </div>
       {isPopupVisible && <Popup2 message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
       {/* {isPopupVisible && <CartPopUp message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />} */}
       </div><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        : 
        <NotLoggedIn/>
        }
          <Footer/>
       
        </>
    )
}
export default Buy;