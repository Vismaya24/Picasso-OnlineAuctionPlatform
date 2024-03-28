import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { editArt, getArtById } from "../Services/Api";
import { useEffect } from "react";
import NotLoggedIn from "../Utils/NotLoggedIn";
import { RxCross1 } from "react-icons/rx";

const UpdateArt = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));

    const {artId} = useParams();
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        artname: '',
        artist:'',
        price: '',
        type: '', 
        style: '', 
        year: '', 
        size: '', 
        artimg: '', 
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
        }
        catch(error){

        }
    }
    const routeBack = () => {
        navigate(-1)
      }
    return(
        <>
        {isLoggedIn ? 
        <div>
            <button  style={{marginLeft: "10px", marginTop: "15px",cursor: "pointer", backgroundColor: "transparent", borderColor: "transparent"}} onClick={routeBack}><RxCross1 size={30}/></button><br/>
            <div className="sellart-text1">PICASSO</div><br/>
        <form className="" onSubmit={handleSubmit}>
            <label className="user-label">Art Name:</label><br/>
            <input className="user-input" type="text" name="artname" id="artname" placeholder="Artname" onChange={handleChange} value={formdata.artname} /><br/><br/>
            <label className="user-label">Artist:</label><br/>
            <input className="user-input" type="text" name="artist" id="artist" placeholder="artist" onChange={handleChange} value={formdata.artist} /><br/><br/>
            <label className="user-label">Price:</label><br/>
            <input className="user-input" type="text" name="price" id="price" placeholder="Price" onChange={handleChange} value={formdata.price} /><br/><br/>
            <label className="user-label">Type:</label><br/>
            <input className="user-input" type="text" name="type" id="type" placeholder="type" onChange={handleChange} value={formdata.type} /><br/><br/>
            <label className="user-label">Style:</label><br/>
            <input className="user-input" type="text" name="style" id="style" placeholder="style" onChange={handleChange} value={formdata.style} /><br/><br/>
            <label className="user-label">Year:</label><br/>
            <input className="user-input" type="text" name="year" id="year" placeholder="year" onChange={handleChange} value={formdata.year} /><br/><br/>
            <label className="user-label">Size:</label><br/>
            <input className="user-input" type="text" name="size" id="size" placeholder="size" onChange={handleChange} value={formdata.size} /><br/><br/>
            <label className="user-label">Art Image:</label><br/>
            <input className="user-input" type="text" name="artimg" id="artimg" placeholder="artimg" onChange={handleChange} value={formdata.artimg} /><br/>
            <button className="user-btn" type="submit" onClick={routeBack}>Update</button><br/><br/>
        </form>
    </div>
    :
    <NotLoggedIn />    
        }
        
        </>
    )
}
export default UpdateArt;