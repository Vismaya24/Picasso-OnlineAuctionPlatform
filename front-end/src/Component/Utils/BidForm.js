import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editArt, getArtById } from "../Services/Api";
import { useEffect } from "react";

const BidForm = () => {

  const {artId} = useParams();
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        price: '',
    })
    const fetchUsers = async () => {
        try{
            const response = await getArtById(artId);
            setFormdata(response.data);
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value})
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await editArt(artId, formdata);
            navigate(-1)
        }
        catch(error){

        }
    }
    const routeBack = () => {
        navigate(-1)
      }
    return(
        <>
        <div>
        <button  style={{marginLeft: "10px", marginTop: "15px",cursor: "pointer", backgroundColor: "transparent", borderColor: "transparent"}} onClick={routeBack}><RxCross1 size={30}/></button><br/>
          <div className="sellart-text1">PICASSO</div>
            <form style={{marginTop: "50px"}} onSubmit={handleSubmit}>
                <label className="bidnow-label">Enter You Price</label><br/>
                <input className="bidnow-input" type="text" name="price" id="price" placeholder="Price" onChange={handleChange} value={formdata.price} /><br/>
            <div className="bidnow-text1"><input style={{marginLeft: "600px", marginTop: "15px"}} type="checkbox" color="black" required></input>Agree to the terms and conditions.&nbsp;<Link to="/terms">Click Here</Link></div><br></br>
                <button className="bidnow-button" type="submit">BID NOW</button>
            </form>
            <div className="bidnow-box">
                <div className="bidnow-text2">Read Before You Bid</div>
                <div className="bidnow-text1">It is the responsibility of the prospective Bidder/Buyer to ensure the correct details are entered when completing an online form.</div>
                <div className="bidnow-text1">Failure to pay within 6 months of receiving an invoice from AoaP may result in the buyer being blacklisted from future AoaP auctions.</div>
                <div className="bidnow-text1">Only the named account holder of the winning bid paddle of the successful Bidder/Buyer can make payment of the Bid Price.</div>
                <div className="bidnow-text1">By participating in the Auction each Bidder/Buyer represents and warrants that any bids placed by You, or on someone else’s behalf, are not the product of any collusive or other anti-competitive agreement and are otherwise compliant with the laws of England and Wales.</div>
            </div>
        </div>
        </>
    )
}
export default BidForm;