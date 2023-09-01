import "../css/payments.css";
import StripeCheckout from 'react-stripe-checkout';

export const Payments = () => {
    const onToken=(token)=>{
        console.log(token);
    }
  return (
   <>
    <div className="payments1">
       <div className="paymentsmain">
            <div className="loginDetail">
                <div>
                <span style={{
                    marginRight:"1rem",
                    color:"#2874f0",
                    backgroundColor:"#f0f0f0",
                    padding:"0.3rem 0.6rem"
                    }}>1</span>

                <span style={{
                    color:"#878787",
                    fontWeight:"550",
                    fontFamily:"sans-serif"
                }}>LOGIN</span>

                </div>
               
                <div>
                    <h3 style={{fontWeight:"500",paddingTop:"0.5rem"}}>Abhimanyu Prajapati</h3>
                    <h3 style={{fontWeight:"500",paddingTop:"0.5rem"}}>+91 9969268448</h3>
                    <h3 style={{fontWeight:"500",paddingTop:"0.5rem"}}>gmail@detail</h3>
                </div>
                <button className="loginDetail2">CHANGE</button>
            </div>
            <div className="addressDetail">
                <span style={{
                    marginRight:"1rem",
                    color:"#2874f0",
                    backgroundColor:"#f0f0f0",
                    padding:"0.3rem 0.6rem"
                    }}>2</span>

                <span style={{
                    color:"#878787",
                    fontWeight:"550",
                    fontFamily:"sans-serif"
                }}>address</span>

                <div><h3 style={{fontWeight:"500",paddingTop:"1rem"}}>jai hind chawl waghoba nagar kalwa east</h3></div>
                <button className="addressDetail2">CHANGE</button>
            </div>
            <div className="paymentsDetail">
                <span style={{
                    marginRight:"1rem",
                    color:"#2874f0",
                    backgroundColor:"#f0f0f0",
                    padding:"0.3rem 0.6rem"
                    }}>3</span>

                <span style={{
                    color:"#878787",
                    fontWeight:"550",
                    fontFamily:"sans-serif"
                }}>PAYMENT OPTIONS</span>

                <h2 style={{fontWeight:"500",paddingTop:"1rem"}}>Amount ₹500</h2>
                <div className="paymentsMode">              
                   <div style={{fontWeight:"500",paddingTop:"1rem"}}>
                    <StripeCheckout
                       name="Paying To Flipkart" 
                       description="Credit / Debit / ATM Card" 
                       image="https://static-assets-web.flixcart.com/www/promos/new/20150528-140547-favicon-retina.ico"
                       ComponentClass="div"
                       panelLabel="Total Payable"
                       amount={100}
                       currency="INR"
                        token={onToken}
                        stripeKey="pk_test_51NkStISFA7Ot5SaoOdsax9gfFuESZZdMR85dstjyoHQ7D2AP49YFK6xFasgmP3BfERn38buP5rgBTC3RWecqL7jN00Y8iCZQOD"
                        /> 
                   </div> 
                   <div style={{fontWeight:"500",paddingTop:"1rem"}}>
                        <input type="radio" name="selector" value="cash" id="cash"  style={{marginRight:"1rem",marginTop:"0.2rem"}} />
                        <label htmlFor="cash">Cash on Delivery</label>
                    </div> 

                    <div className="submit">
                        <button>Submit</button>
                    </div>    
                </div>
            </div>
       </div>
    </div>
    
   </>
  )
}

{/* <span>Credit / Debit / ATM Card</span> */}
// Pay With Card