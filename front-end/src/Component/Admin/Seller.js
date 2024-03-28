import React from "react";
import SideBar from "../Utils/SideBar";
import Footer from "../Utils/Footer";

const Seller = () => {
    return(
        <>
        <div style={{display: "flex"}}>
        <SideBar/>
        <div style={{marginLeft: "250px"}}>
        <div style={{marginLeft: "250px"}} className="head-text">Seller</div>
        <div>
        <div>
          <table>
          <tr>
          <th>ARTIST ID</th>
          <th>ARTIST NAME</th>
          <th>USERNAME</th>
          <th>EMAIL ID</th>
          <th>MOBILE NUMBER</th>
          <th>ART WORK NAME</th>
          <th>ART WORK ID</th>
          <th>STARTING PRICE</th>
          </tr><br></br>
          <tr>
            <td>C454</td>
            <td>Aneta Kajzer</td>
            <td>aneta_kajzer</td>
            <td>anetakajzer@gamil.com</td>
            <td>7458120350</td>
            <td>Sunset Boulevard</td>
            <td>A123</td>
            <td>1,00,000</td>
          </tr><br></br>
          <tr>
            <td>C899</td>
            <td>Everett Shinn</td>
            <td>Everett_Shinn</td>
            <td>everrtshinn@gmail.com</td>
            <td>8451274522</td>
            <td>Julia Marlowe as Barbara Frietchie in the Play</td>
            <td>A845</td>
            <td>2,00,00,000</td>
          </tr><br></br>
          <tr>
            <td>C467</td>
            <td>Ralph Albert Blakelock</td>
            <td>Ralph_Albert</td>
            <td>raphl2@gamil.com</td>
            <td>7845128521</td>
            <td>Woodland Cabin</td>
            <td>A231</td>
            <td>2,00,000</td>
          </tr><br></br>
          </table>
        </div>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Seller;