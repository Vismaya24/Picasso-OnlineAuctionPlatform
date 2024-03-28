// import React, { useState,useCallback,useEffect } from 'react'
// import { useParams } from "react-router-dom";
// import { connect } from 'react-redux';
// import { BsDash, BsPlus } from "react-icons/bs";
// import axios from '../../axios-orders';
// import Spinner from '../../components/UI/Spinner/Spinner'
// import {RiHeart3Fill} from 'react-icons/ri';

import FileUploader from "../Utils/FileUploader"



// const Fun2 = (props) => {
    
//     const { id } = useParams();

//     const [toggleHeart, setToggleHeart] = useState(false);
//     const [itemPresent, setItemPresent] = useState('');

//     useEffect(()=>{
//         axios.post('/UserPortal/CartItems/get_wishlist.php', {
//             customer_id: localStorage.getItem('Id')
//         } )
//         .then((response) => {
//           console.log(response.data);
//          response.data.map((item)=>{
//             return setItemPresent(item.product_id)
//         })
    
//         if(itemPresent === id){
//             console.log('[item]',itemPresent)
//         }
//         })
//     },[toggleHeart,id,itemPresent])


//     var c = props.orders.find(product => product.id === id);

    

//     const changeColor = useCallback(() =>{
//         setToggleHeart(!toggleHeart);
//         const data = {
//             customer_id: localStorage.getItem('Id'),
//             name: c.name,
//             price: c.price,
//             description: c.description,
//             quantity: c.quantity,
//             product_id : c.id
//         }
//         axios.post('/UserPortal/CartItems/wishlist.php', data )
//             .then((response) => {
//               console.log(response.data);
//             })
//        },[toggleHeart,c.id,c.name,c.price,c.description,c.quantity])


//    if(props.orders.length === 0){
//     return <Spinner/>;
//    }

//  return (
//                 <div className="details__info">
                              
//                                 {localStorage.getItem('email') 
//                                 ? itemPresent ? 

//                                  <RiHeart3Fill className={
//                                     toggleHeart ? 'heart active' : 'heart'
//                                   } onClick={changeColor}/>

//                                 :   <RiHeart3Fill className="heart" onClick={changeColor}/>
//                                 :   <RiHeart3Fill className="heart"/>

//                }
//                                 </div>
                      
   
// );
// }
// export default Fun2;

import React, { useState } from 'react';

const Fun2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [comparisonNumber, setComparisonNumber] = useState(10); // Change this to the number you want to compare against
  const [isGreater, setIsGreater] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkIfGreater = () => {
    setIsGreater(Number(inputValue) > comparisonNumber);
  };

  return (
    <div>
      <label>
        Enter a number:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={checkIfGreater}>Check if greater</button>

      {isGreater && <p>The entered number is greater than the comparison number.</p>}
      {!isGreater && <p>The entered number is not greater than the comparison number.</p>}
    </div>
  );
};

export default Fun2;