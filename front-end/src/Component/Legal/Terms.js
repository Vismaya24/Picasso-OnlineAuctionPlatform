import React from "react";
import '../../assets/css/Legal.css';
import NavBar from "../Utils/NavBar";
import Footer from "../Utils/Footer";

const Terms = () => {
    return(
        <><NavBar /><br></br>
        <div style={{marginTop: "80px"}}>
            <div className="privacy-text1">
                {/* <hr width="450px" size="2" color="black"></hr> */}
                TERMS AND CONDITIONS
                {/* <hr width="450px" size="2" color="black"></hr> */}
                </div><br></br><br></br><br/><br/>
            <div className="privacy-text2">Bidding and buying</div><br></br>
            <div className="privacy-text3">
            <ul><li>Each Bidder/Buyer wishing to bid in an Auction must register prior to bidding by providing the relevant information as requested by AoaP. This is to ensure the relevant due diligence checks can been carried out. However, AoaP still has discretion to refuse participation in the auction. </li> 
            <li>By participating in the Auction each Bidder/Buyer represents and warrants that any bids placed by You, or on someone else’s behalf, are not the product of any collusive or other anti-competitive agreement and are otherwise compliant with the laws of England and Wales.</li>
            <li>It is the responsibility of the prospective Bidder/Buyer to ensure the correct details are entered when completing an online form.</li>
            </ul></div><br></br>
            <div className="privacy-text2">The Auction</div><br></br>
            <div className="privacy-text3">
            <ul>
                <li> Works are offered subject to a reserve price.</li>
                <li>The sale will be conducted in GBP and any international Bidder/Buyer will be responsible for all exchange rate differences that may occur at any time.</li>
                <li> AoaP has discretion at any time to refuse any bid, withdraw any lot or re-offer a Work for sale (including after the fall of the hammer) if the auctioneer has reasonable belief that there has been an error or dispute during the sale of the Work. The auctioneer can then take any reasonable action to resolve the issue (i.e. reoffer the Work for sale).</li>
                <li> The highest bidder at the close of auction will be the successful purchaser of the Work. The end of the auction will mark the contract of sale between the Bidder/Buyer and AoaP.</li>
                <li></li>
            </ul></div><br></br>
        <div className="privacy-text2">Payment</div><br></br>
        <div className="privacy-text3">
            <ul>
                <li> What is bid in the Auction is the final price (“Bid Price”) and the total sum that is due to be paid immediately on receipt of an invoice by the Bidder/Buyer to AoaP. There is no buyer’s commission and no payment fees are due from the Bidder/Buyer in calculating the Bid Price.</li>
                <li>Title in the Work will not pass to the Bidder/Buyer until AoaP has received the full payment of the Bid Price in cleared funds.</li>
                <li>Only the named account holder of the winning bid paddle of the successful Bidder/Buyer can make payment of the Bid Price.</li>
                <li>Any fees incurred during the shipping process must be paid for by the buyer.</li>
            </ul>
        </div><br></br>
       <div className="privacy-text2">Shipping</div><br></br>
       <div className="privacy-text3">
        <ul>
            <li>Works will be shipping from AoaP office at 'Art on a Postcard, Unit 14, 15-17 Ingate Place, Nine Elms, London SW8 3NS'</li>
            <li>All artworks will be sent via insured shipping up to a suitable amount.</li>
            <li>Any fees incurred during the shipping process must be paid for by the buyer. We cannot undervalue items or mark as anything other than sale to avoid shipping taxes.</li>
        </ul>
        </div><br></br>
        <div className="privacy-text2"> Failure to pay, collect and cancellation of the sale</div><br></br>
        <div className="privacy-text3">
        <ul>
            <li>If the Bidder/Buyer pays the Bid Price but fails to pay for insured postage or provide a shipping address when contacted by AoaP within 3 months, the sale still stands, and the work can still be shipping on receipt of postage payment but buyer will no longer qualify for VAT exemption.</li>
            <li>If the Bidder/Buyer pays the Bid Price but fails to pay for insured postage or provide a shipping address when contacted by AoaP within 6 months, the sale will be cancelled and any fees paid to date considered a donation to Hepatitis C Trust.</li>
            <li>Failure to pay the Bid Price within 6 months of invoice will result in the cancellation of the sale of the Work and AoaP may offer the underbidders the opportunity to purchase the Work at a set price. The Work may also be auctioned again at a later date.</li>
            <li>AoaP has the right  to rescind a sale without notice to the Bidder/Buyer if We have reasonable belief that there is doubt as to the Seller’s ownership of the Work.</li>
            <li>Failure to pay within 6 months of receiving an invoice from AoaP may result in the buyer being blacklisted from future AoaP auctions.</li>
        </ul>
        </div><br></br>
       <div className="privacy-text2"> Reselling or Reproducing</div><br></br>
       <div className="privacy-text3">
        <ul>
            <li>You must not reproduce, duplicate, copy, sell, resell or exploit any works. In doing so, you endanger our relationships with artists, and directly jeopardise the charitable work we do.</li>
            <li>Anyone found doing will subject to legal action and will no longer be able to take part in AoaP auctions.</li>
        </ul>
        </div><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        <Footer/>
        </>
    )
}
export default Terms;