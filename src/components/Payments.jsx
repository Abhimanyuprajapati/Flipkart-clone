import { useNavigate, useNavigationType } from "react-router-dom";
import "../css/payments.css";
import StripeCheckout from 'react-stripe-checkout';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { clearAllState } from "../store/cartSlice";
import { useState } from "react";

export const Payments = () => {
    const onToken = (token) => {
        console.log(token);
    }

/*
    const confirmPage = () => {
        toast.success('Thank You! \n Your payment received successfully \n order Confirm \n product will be delivered on time',
        {
            duration: 2500,
        }
        );
        setTimeout(() => {
            dispatch(clearAllState());
            navigate('/');
        },3000)
       
    }
*/

    // local storage parts
    const userInformation = JSON.parse(localStorage.getItem('user')); 
    const userName=userInformation[0].name;
    const userEmail=userInformation[0].email;
    const userNumber=userInformation[0].number;

    // this is for total price from local storage
    const total=JSON.parse(localStorage.getItem("total"));
    const TotalValue=Number(total.total);
    // console.log(TotalValue)

    // this is for selected option 
    const [selectedOption,setSelectedOption]=useState('');
    const [error, setError] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setError('');
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedOption === '') {
            setError('Please select an option');
        } 
        if (selectedOption !== ''){
            toast.success('Thank You! \n Your payment received successfully \n order Confirm \n product will be delivered on time',
            {
                duration: 2000,
            }
            );
            setTimeout(() => {
                dispatch(clearAllState());
                navigate('/');
            },2500)
           
        }
    };

    return (
        <>
            <div className="payments1">
                <div className="paymentsmain">
                    <div className="loginDetail">
                        <div>
                            <span style={{
                                marginRight: "1rem",
                                color: "#2874f0",
                                backgroundColor: "#f0f0f0",
                                padding: "0.3rem 0.6rem"
                            }}>1</span>

                            <span style={{
                                color: "#878787",
                                fontWeight: "550",
                                fontFamily: "sans-serif"
                            }}>LOGIN</span>

                        </div>

                        <div>
                            <h3 style={{ fontWeight: "500", paddingTop: "0.5rem" }}>{userName}</h3>
                            <h3 style={{ fontWeight: "500", paddingTop: "0.5rem" }}>+91 {userNumber}</h3>
                            <h3 style={{ fontWeight: "500", paddingTop: "0.5rem" }}>{userEmail}</h3>
                        </div>
                        <button className="loginDetail2">CHANGE</button>
                    </div>
                    <div className="addressDetail">
                        <span style={{
                            marginRight: "1rem",
                            color: "#2874f0",
                            backgroundColor: "#f0f0f0",
                            padding: "0.3rem 0.6rem"
                        }}>2</span>

                        <span style={{
                            color: "#878787",
                            fontWeight: "550",
                            fontFamily: "sans-serif"
                        }}>address</span>

                        <div><h3 style={{ fontWeight: "500", paddingTop: "1rem" }}>jai hind chawl waghoba nagar kalwa east</h3></div>
                        <button className="addressDetail2">CHANGE</button>
                    </div>
                    <div className="paymentsDetail">
                        <span style={{
                            marginRight: "1rem",
                            color: "#2874f0",
                            backgroundColor: "#f0f0f0",
                            padding: "0.3rem 0.6rem"
                        }}>3</span>

                        <span style={{
                            color: "#878787",
                            fontWeight: "550",
                            fontFamily: "sans-serif"
                        }}>PAYMENT OPTIONS</span>

                        <h2 style={{ fontWeight: "500", paddingTop: "1rem" }}>Amount ₹{TotalValue}</h2>
                        <div className="paymentsMode">
                            <form onSubmit={handleSubmit}>
                                <div style={{ fontWeight: "500", paddingTop: "1rem" }}>
                                    <input type="radio" name="selector" value="Card" id="Card" onChange={handleOptionChange} checked={selectedOption === 'Card'} style={{ marginRight: "1rem", marginTop: "0.2rem" }} />
                                    <label htmlFor="cash"><StripeCheckout
                                        name="Paying To Flipkart"
                                        description="Credit / Debit / ATM Card"
                                        image="https://static-assets-web.flixcart.com/www/promos/new/20150528-140547-favicon-retina.ico"
                                        ComponentClass="div"
                                        panelLabel="Total Payable"
                                        amount={TotalValue*100}
                                        currency="INR"
                                        token={onToken}
                                        stripeKey="pk_test_51NkStISFA7Ot5SaoOdsax9gfFuESZZdMR85dstjyoHQ7D2AP49YFK6xFasgmP3BfERn38buP5rgBTC3RWecqL7jN00Y8iCZQOD"
                                    /></label>    
                                </div>
                                <div style={{ fontWeight: "500", paddingTop: "1rem" }}>
                                    <input type="radio" name="selector" value="cash" id="cash" onChange={handleOptionChange} checked={selectedOption === 'cash'} style={{ marginRight: "1rem", marginTop: "0.2rem" }} />
                                    <label htmlFor="cash">Cash on Delivery</label>
                                </div>
                                {error && <div style={{ color: 'red' }}>{error}</div>}
                                <div className="submit">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

// onClick={confirmPage}
