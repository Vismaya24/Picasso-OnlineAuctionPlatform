import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import '../../assets/css/Admin.css'; 
import SideBar from "../Utils/SideBar";
import { getUser, deleteUser } from "../Services/Api";
import Footer from "../Utils/Footer";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import NotLoggedIn from "../Utils/NotLoggedIn";


const Users= () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
  
 const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await getUser()
      setUsers(response.data);
    }

    catch (error) {
      console.log(error);
    }
    console.log(users);
  }
  useEffect(() => {
    fetchUsers();
  }, [])
  const handleEdit = (id) => {
    navigate(`/admin/user/edit/${id}`);
  }
  const handleDelete = async (id) => {
     try{
      const res = await deleteUser(id);
      console.log(res.status)
      if(res.status === 200){

      }
      fetchUsers();
     }
     catch(error) {
      console.log(error);
     }
  }
  function ViewUsers(){
    return(
        <div>
          <table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile Number</th>
    <th>Actions</th>
    <th></th>
  </tr><br/><br/>
  <tbody >
              {users.map((user) => (
                  <tr key={user.uid}>
                  <td>{user.uid}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phno}</td>
                  <td><button className="action-icon" onClick={() => handleEdit(user.uid)}><BiEditAlt color="white" size={20} /></button>&emsp;
                  <button className="action-icon" onClick={() => handleDelete(user.uid)}><MdDeleteOutline color="white" size={20} /></button></td>
                  <td>
                  </td>
                </tr>            
              ))}
            </tbody>
  
  </table>
        </div>
    );
}
function AddUsers() {
  return(
    <div>

      <div className="add-box"><br></br>
      <img src ="add-users.jpg" height="400px" width="400px" alt="" ></img>
      <form><br></br><br></br>
        <input className="add-users" type="text" placeholder="Name" id="Name"></input>
        <input className="add-users" type="text" placeholder="User Name" id="name"></input>
        <input className="add-users" type="text" placeholder="Email ID" id="email"></input>
        <input className="add-users" type="text" placeholder="Phone Number" id="Phone Number"></input><br></br><br></br>
        <button className="submit-users">ADD</button>
      </form>
      </div>
    </div>
  );
}
const [isToggled, setToggled] = useState(false);
const handleToggle = () =>{
  setToggled(!isToggled);
}
const [useButtonStyle, setButtonStyle] = useState(true);
const toggleButtonStyle = () =>{
  setButtonStyle(!toggleButtonStyle);
}
    return(
        <>
        {isLoggedIn ? 
        <div>
          <div style={{display: "flex"}}> 
        <SideBar/>
        <div style={{marginLeft: "150px"}}>
        <div className="dashboard-text3" style={{marginLeft: "150px"}}>USERS DETAILS</div><br/>
        <div onClick={toggleButtonStyle}>
        <button className={useButtonStyle ? 'add-btn' : 'view-btn'} onClick={handleToggle}>{isToggled ? 'View Users' : 'Add Users'}</button>
        </div>
        {isToggled ? <AddUsers /> : <ViewUsers />}
        </div>
        </div><br/><br/><br/><br/>
        <Footer/>
        </div>
        :
        <NotLoggedIn />
        }
        
        </>
    )
}
export default Users;