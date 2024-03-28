import React from "react";
import '../../assets/css/Admin.css'; 
import { useState } from "react";
import Footer from "../Utils/Footer";
import SideBar from "../Utils/SideBar";
import { useEffect } from "react";
import { deleteMsg, getMsg } from "../Services/Api";
import { MdDeleteOutline } from "react-icons/md";
import NotLoggedIn from "../Utils/NotLoggedIn";


const Contact = () =>{
    
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));

    const [isAdminToggled, setAdminToggled] = useState(false);
    const handleAdmin = () =>{
        setAdminToggled(!isAdminToggled);
    }
    const [useAdminButton, setAdminButton] = useState(true);
    const [msg, setMsg] = useState([]);
    const fetchUsers = async () => {
      try {
        const response = await getMsg()
        setMsg(response.data);
      }
  
      catch (error) {
        console.log(error);
      }
      console.log(msg);
    }
    useEffect(() => {
      fetchUsers();
    }, [])
    const handleDelete = async (id) => {
        try{
         const res = await deleteMsg(id);
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
        <div className="dashboard-text3" style={{marginLeft: "150px"}}>MESSAGES</div><br/>
            <>
              <table>
              <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL ID</th>
              <th>MOBILE NUMBER</th>
              <th>MESSAGE</th>
              <th>ACTIONS</th>
              <th></th>
              </tr><br></br>
              <tbody>
              {msg.map((msg) => (
                <tr key={msg.fid}>
                  <td>{msg.fid}</td>
                  <td>{msg.username}</td>
                  <td>{msg.useremail}</td>
                  <td>{msg.phno}</td>
                  <td>{msg.message}</td>
                  <td>
                  <button className="action-icon" onClick={() => handleDelete(msg.fid)}><MdDeleteOutline color="white" size={20}/></button></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
              
              
              </table>
            </>
        </div>
        <Footer/>
        </div>
        :
        <NotLoggedIn />
        }
        
        </>
    )
}
export default Contact;