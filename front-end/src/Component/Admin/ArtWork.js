import React from "react";
import '../../assets/css/Admin.css'; 
import SideBar from "../Utils/SideBar";
import Footer from "../Utils/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getArt, deleteArt } from "../Services/Api";
import { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import NotLoggedIn from "../Utils/NotLoggedIn";

const ArtWork = () =>{

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));

  const navigate = useNavigate();
  const [arts, setArts] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await getArt()
      setArts(response.data);
    }

    catch (error) {
      console.log(error);
    }
    console.log(arts);
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  const handleEdit = (id) => {
    navigate(`/admin/art/update/${id}`);
  }
  const handleDelete = async (id) => {
     try{
      const res = await deleteArt(id);
      console.log(res.status)
      if(res.status === 200){

      }
      fetchUsers();
     }
     catch(error) {
      console.log(error);
     }
  }
    return(
      <>
      {isLoggedIn ? 
      <div style={{display: "flex"}}>
      <SideBar/>
      <div style={{marginLeft: "150px"}}>
      <div className="dashboard-text3" style={{marginLeft: "150px"}}>ARTWORKS</div><br/>
      <div>
        <table>
        <tr>
        <th>ART ID</th>
        <th>Art Name</th>
        <th>Artist</th>
        <th>Price</th>
        <th>Type</th>
        <th>Style</th>
        <th>Year</th>
        <th>Size</th>
        <th>Actions</th>
        </tr><br></br>
        <tbody>
            {arts.map((art) => (
              <tr key={art.aid}>
                <td>{art.aid}</td>
                <td>{art.artname}</td>
                <td>{art.artist}</td>
                <td>{art.price}</td>
                <td>{art.type}</td>
                <td>{art.style}</td>
                <td>{art.year}</td>
                <td>{art.size}</td>
                <td><button className="action-icon" onClick={() => handleEdit(art.aid)}><BiEditAlt color="white" size={20} /></button>
                <button className="action-icon" onClick={() => handleDelete(art.aid)}><MdDeleteOutline color="white" size={20} /></button></td>
                <td></td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <Footer/>
      </div>
      :    
      <NotLoggedIn />
      }
      
      </>
    )
}
export default ArtWork;