import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import ContactUs from './Component/ContactUs';
import AdminLogin from './Component/Admin/AdminLogin';
import Sell from './Component/Sell';
import Buy from './Component/Buy';
import Orders from './Component/Admin/Orders';
import Users from './Component/Admin/Users';
import { UserProvider } from './Component/context/UserContext';
import Privacy from './Component/Legal/Privacy';
import Terms from './Component/Legal/Terms';
import FAQ from './Component/Legal/FAQ';
import Fun from './Component/Legal/Fun';
import DashBoard from './Component/Admin/DashBoard';
import Seller from './Component/Admin/Seller';
import ArtWork from './Component/Admin/ArtWork';
import ArtDetails from './Component/ArtDetails';
import CheckOut from './Component/CheckOut';
import UserLogin from './Component/UserLogin';
import Contact from './Component/Admin/Contact';
import EditUser from './Component/Admin/EditUser';
import UpdateArt from './Component/Admin/UpdateArt';
import SellArt from './Component/SellArt';
import Cart from './Component/Cart';
import WishList from './Component/WishList';
import Shipping from './Component/Shipping';
import Payment from './Component/Payment';
import Button from './Component/Button';
import UserProfile from './Component/UserProfile';
import Fun2 from './Component/Legal/Fun2';
import BidForm from './Component/Utils/BidForm';
import UserProfileEdit from './Component/UserProfileEdit';

function App() {
  return (
    <div>
      <UserProvider>
      <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/sell" element={<Sell/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/fun" element={<Fun/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/fun" element={<Fun/>}></Route>
        <Route path="/seller" element={<Seller/>}></Route>
        <Route path="/artwork" element={<ArtWork/>}></Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>
        <Route path="/detail/:detailId" element={<ArtDetails/>}></Route>
        <Route path='/userlogin' element={<UserLogin />}></Route>
        <Route path='/wishlist' element={<WishList />}></Route>
        <Route path='/sellart' element={<SellArt />}></Route>
        <Route path='/ship/:userId' element={<Shipping />}></Route>
        <Route path='/button' element={<Button />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path="/admin/user/edit/:userId" element={<EditUser />}></Route>
        <Route path="/admin/art/update/:artId" element={<UpdateArt />}></Route>
        <Route path="/fun2" element={<Fun2 />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/bidform/:artId" element={<BidForm/>}></Route>
        <Route path="/profile" element={<UserProfile/>}></Route>
        <Route path="/profile/edit/:userId" element={<UserProfileEdit/>}></Route>
      </Routes>
    </Router>
      </UserProvider>
    </div>
    
  );
}

export default App;
