// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { saveArt } from "./Services/Api";

// // const UserLogin = () => {
// //   const navigate = useNavigate()
// //   const [fileUrl, setFileUrl] = useState('');
// //   const [formdata, setFormdata] = useState({
// //     artname: '',
// //     price: '',
// //     artist: '',
// //     year:'',
// //     style: '',
// //     type: '',
// //     size: '',
// //     artimg: ''
// //   })

// //   const handleChange = (e) => {
// //     e.preventDefault();
// //     setFormdata({ ...formdata, [e.target.id]: e.target.value })
// //   }
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //       console.log(formdata)
// //       const res = await saveArt(formdata);
// //       console.log(res)
// //       if (res.status === 201) {
        
        
// //           navigate('/buy')
       
// //       }
// //     }
    
  

// //   const routeBack = () => {
// //     navigate(-1)
// //   }
// //   return (
// //     <>
    
// //       <div className='mainx'>

// //         <form className='data-content shadow bg-white' onSubmit={handleSubmit}>
// //           <h3 className='data-title green'>Add Product</h3>
// //           <input type="text" name="artname" id="artname" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} required />
// //           <input type="text" name="price" id="price" placeholder='Price' className='data-input bg-secondary black' onChange={handleChange} required />
// //           <input type="text" name="artist" id="artist" placeholder='artist' className='data-input bg-secondary black' onChange={handleChange} required />
// //           <input type="text" name="type" id="type" placeholder='type' className='data-input bg-secondary black' onChange={handleChange} required />
// //           <input type="text" name="style" id="style" placeholder='style' className='data-input bg-secondary black' onChange={handleChange} required />
// //           <input type="text" name="year" id="year" placeholder='year' className='data-input bg-secondary black' onChange={handleChange} required />
// //           <input type="text" name="size" id="size" placeholder='size' className='data-input bg-secondary black' onChange={handleChange} required />
// //           <input type="text" name="artimg" id="artimg" placeholder='artimg' className='data-input bg-secondary black' onChange={handleChange} required />
// //           {/* <FileUploader setImageUrl={setFileUrl} /> */}
// //           <button type="submit" className='data-btn bg-green white'>Add</button>
// //         </form>


// //       </div>
// //     </>
// //   )
// // }
// // export default UserLogin;

// import React, { useState } from "react";
// import "../assets/css/NavBar.css";

// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
// import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
// import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const menus = [
//     { name: "dashboard", link: "/", icon: MdOutlineDashboard },
//     { name: "user", link: "/", icon: AiOutlineUser },
//     { name: "messages", link: "/", icon: FiMessageSquare },
//     { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
//     { name: "File Manager", link: "/", icon: FiFolder },
//     { name: "Cart", link: "/", icon: FiShoppingCart },
//     { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
//     { name: "Setting", link: "/", icon: RiSettings4Line },
//   ];
//   const [open, setOpen] = useState(true);
//   return (
//     <section className="flex gap-6">
//       <div
//         className={`bg-[#0e0e0e] min-h-screen ${
//           open ? "w-72" : "w-16"
//         } duration-500 text-gray-100 px-4`}
//       >
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3
//             size={26}
//             className="cursor-pointer"
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//         <div className="mt-4 flex flex-col gap-4 relative">
//           {menus?.map((menu, i) => (
//             <Link
//               to={menu?.link}
//               key={i}
//               className={` ${
//                 menu?.margin && "mt-5"
//               } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
//             >
//               <div>{React.createElement(menu?.icon, { size: "20" })}</div>
//               <h2
//                 style={{
//                   transitionDelay: `${i + 3}00ms`,
//                 }}
//                 className={`whitespace-pre duration-500 ${
//                   !open && "opacity-0 translate-x-28 overflow-hidden"
//                 }`}
//               >
//                 {menu?.name}
//               </h2>
//               <h2
//                 className={`${
//                   open && "hidden"
//                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
//               >
//                 {menu?.name}
//               </h2>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className="m-3 text-xl text-gray-900 font-semibold">
//         REACT TAILWIND
//       </div>
//     </section>
//   );
// };

// export default Home;
