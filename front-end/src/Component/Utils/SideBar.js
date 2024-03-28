import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TfiBarChart } from 'react-icons/tfi';
import { PiUsers } from 'react-icons/pi';
import { LuClipboardList } from 'react-icons/lu';
import { BsBrush } from 'react-icons/bs';
import { TbMessageCircle2 } from 'react-icons/tb';
import { RiUser2Fill } from 'react-icons/ri';
import { PiListLight } from 'react-icons/pi';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";

const SideBar = () =>{

    const navigate = useNavigate();
    const name = localStorage.getItem('AdminName')
    const email = localStorage.getItem('AdminEmail')
    // function SideBar1() {
    //     return(
    //         <>
    //         <div style={{backgroundImage: `url(".jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    //     <div className="admin-text1"><br></br>ADMIN</div><hr color="ffffffcf" width="190px" size="1"></hr>
    //     <br></br><br></br>
    //     <div style={{display: "inline-flex", marginLeft: "20px"}}><BiSolidDashboard size={30} /><Link style={{textDecoration: "none"}} to="/dashboard" ><button className="admin-textbox">DASHBOARD</button></Link>&emsp;</div><br></br><br></br>
    //     <div style={{display: "inline-flex", marginLeft: "20px"}}><TbUserQuestion size={30}/><Link style={{textDecoration: "none"}} to="/contact" ><button className="admin-textbox">CONTACT US</button></Link>&emsp;</div><br></br><br></br>
    //     <div style={{display: "inline-flex", marginLeft: "20px"}}><HiUsers size={30}/><Link style={{textDecoration: "none"}} to="/users" ><button className="admin-textbox">USERS</button></Link>&emsp;</div><br></br><br></br>
    //     <div style={{display: "inline-flex", marginLeft: "20px"}}><FaClipboardList size={30}/><Link style={{textDecoration: "none"}} to="/orders" ><button className="admin-textbox">ORDERS</button></Link>&emsp;</div><br></br><br></br>
    //     <div style={{display: "inline-flex", marginLeft: "20px"}}><RiUser2Fill size={30}/><Link style={{textDecoration: "none"}} to="/seller" ><button className="admin-textbox">SELLER</button></Link>&emsp;</div><br></br><br></br>
    //     <div style={{display: "inline-flex", marginLeft: "20px"}}><FaPaintBrush size={30}/><Link style={{textDecoration: "none"}} to="/artwork" ><button className="admin-textbox">ART WORK</button></Link>&emsp;</div><br></br><br></br>
    //     {/* <div style={{display: "inline-flex"}}><FiLogOut size={30}/><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link></div> */}
    //     </div>
    //         </>
    //     )
    // }
    // function SideBar2(){
    //     return(
    //         <>
    //         <div style={{marginTop: "110px"}}>
    //         <div style={{display: "inline-flex", marginLeft: "15px"}}><Link style={{textDecoration: "none", color:"black"}} to="/dashboard" ><BiSolidDashboard size={30} /></Link></div><br></br><br></br>
    //         <div style={{display: "inline-flex", marginLeft: "15px"}}><Link style={{textDecoration: "none", color:"black"}} to="/contact" ><TbUserQuestion size={30}/></Link></div><br></br><br></br>
    //         <div style={{display: "inline-flex", marginLeft: "15px"}}><Link style={{textDecoration: "none", color:"black"}} to="/users" ><HiUsers size={30}/></Link></div><br></br><br></br>
    //         <div style={{display: "inline-flex", marginLeft: "15px"}}><Link style={{textDecoration: "none", color:"black"}} to="/orders" ><FaClipboardList size={30}/></Link></div><br></br><br></br>
    //         <div style={{display: "inline-flex", marginLeft: "15px"}}><Link style={{textDecoration: "none", color:"black"}} to="/seller" ><RiUser2Fill size={30}/></Link></div><br></br><br></br>
    //         <div style={{display: "inline-flex", marginLeft: "15px"}}><Link style={{textDecoration: "none", color:"black"}} to="/artwork" ><FaPaintBrush size={30}/></Link></div><br></br><br></br>
    //         <button onClick={logoutHandler}><FiLogOut size={30} color="black"/></button>
    //         </div>
    //         </>
    //     )
    // }
    const [isToggled, setToggled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
const handleToggle = () =>{
  setToggled(!isToggled);
  setIsOpen(!isOpen);
}
const logoutHandler = () => {
    localStorage.clear();
    navigate('/login');
}
    return(
        <>
        {/* <div>
        <button onClick={handleToggle}><PiListLight size={50}/></button>
        <div className={`sidebar ${isToggled ? 'open' : ''}`}>
        {isToggled ? <SideBar1/> : <SideBar2/>}
        </div>
        </div> */}
        {/* <div className="admin-nav">
            <button onClick={handleToggle} style={{backgroundColor: "transparent", borderColor: "transparent"}}><PiListLight size={40}/></button>
            <div>
            {isToggled ? <SideBar1/> : <SideBar2/>}
            </div>
        </div> */}
        <div className="admin-nav">
         <div className="admin-text1"><br></br>PICASSO</div>
         <br></br><br></br>
         <div style={{display: "inline-flex", marginLeft: "32px"}}><TfiBarChart size={25} /><Link style={{textDecoration: "none"}} to="/dashboard" ><button className="admin-textbox">DASHBOARD</button></Link>&emsp;</div><br></br><br></br>
         <div style={{display: "inline-flex", marginLeft: "32px", marginTop: "10px"}}><TbMessageCircle2 size={25}/><Link style={{textDecoration: "none"}} to="/contact" ><button className="admin-textbox">MESSAGES</button></Link>&emsp;</div><br></br><br></br>
         <div style={{display: "inline-flex", marginLeft: "32px", marginTop: "10px"}}><PiUsers size={25}/><Link style={{textDecoration: "none"}} to="/users" ><button className="admin-textbox">USERS</button></Link>&emsp;</div><br></br><br></br>
         <div style={{display: "inline-flex", marginLeft: "32px", marginTop: "10px"}}><LuClipboardList size={25}/><Link style={{textDecoration: "none"}} to="/orders" ><button className="admin-textbox">ORDERS</button></Link>&emsp;</div><br></br><br></br>
         {/* <div style={{display: "inline-flex", marginLeft: "20px"}}><RiUser2Fill size={30}/><Link style={{textDecoration: "none"}} to="/seller" ><button className="admin-textbox">SELLER</button></Link>&emsp;</div><br></br><br></br> */}
         <div style={{display: "inline-flex", marginLeft: "32px", marginTop: "10px"}}><BsBrush size={25}/><Link style={{textDecoration: "none"}} to="/artwork" ><button className="admin-textbox">ART WORK</button></Link>&emsp;</div><br></br><br></br>
         <div style={{display: "inline-flex", fontFamily: "Calibri", fontSize: "17px", marginLeft: "20px", marginTop: "130px"}}>
         <Stack direction="column" spacing={2}><Avatar alt="" src="v.jpeg" sx={{ width: 60, height: 60 }} /></Stack>
         <br/>&nbsp;&nbsp;{name}
         </div>
         <div onClick={logoutHandler} style={{display: "inline-flex"}}><button className="admin-logout">LOG OUT</button></div>
         </div>
        </>
    )
}
export default SideBar;