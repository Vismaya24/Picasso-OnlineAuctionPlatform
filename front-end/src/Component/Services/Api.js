import axios from "axios";

const URI = 'http://localhost:8222/neptune'
const URL = 'http://localhost:8222/feedback';
let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

//Authentication
const userLogin = (signin) => axios.post(`${URI}/auth/login`, signin);
const userRegister = (register) => axios.post(`${URI}/auth/register`, register);
const adminLogin =(signin) => axios.post(`${URI}/auth/login`, signin);

//user
const getUser = () => axios.get(`${URI}/user/get`, {headers});
const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, {headers});
const editUser = (id, art) => axios.put(`${URI}/user/edit/${id}`, art, {headers});
const getUserById = (id) => axios.get(`${URI}/user/byId/${id}`, {headers});
//ArtWorks

const saveArt = (data) => axios.post(`${URI}/art/post`, data, {headers});
const getArt = () => axios.get(`${URI}/art/get`, {headers});
const getArtById = (id) => axios.get(`${URI}/art/byId/${id}`, { headers })
const getById = (id) => axios.get(`${URI}/art/byId/${id}`, { headers })
// const getArtById = (id) => axios.get(`{})

const editArt = (id, art) => axios.put(`${URI}/art/update/${id}`, art, { headers })
const deleteArt = (id) => axios.delete(`${URI}/art/delete/${id}`, {headers});

//contactUs

const sendMsg = (data) => axios.post(`${URL}/addFeed`, data, {headers});
const getMsg = () => axios.get(`${URL}/getFeed`, {headers});
const editMsg = (id, msg) => axios.put(`${URL}/updateFeed/${id}`, msg, { headers })
const deleteMsg = (id) => axios.delete(`${URL}/deleteFeed/${id}`, {headers});

//orders
const addOrder=(order)=> axios.post(`${URI}/order/add`,order, {headers})
const getUserOrders = (id) =>axios.get(`${URI}/order/get/${id}`,{headers})

export {userLogin, userRegister, adminLogin, saveArt, getUser, deleteUser, editUser, getUserById, getArt, getArtById, editArt, deleteArt, getById, sendMsg, getMsg, editMsg, deleteMsg, addOrder, getUserOrders}