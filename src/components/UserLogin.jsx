import { useState } from "react";
import "../css/UserLogin.css";
import CloseIcon from '@mui/icons-material/Close';
import { Link, json, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { auth,provider } from "../../firebase";
// import { signInWithPopup } from "@firebase";
import { signInWithPopup } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';

const initialState = {
    name: "",
    email: "",
    number:"",
    password: ""
}

export const UserLogin = ({ closeBtnHandler }) => {

    const navigate = useNavigate();
    const [signupData, setSignupData] = useState(initialState);

    const signupHandler = (e) => {
        e.preventDefault();
        const userDataArr = JSON.parse(localStorage.getItem('user')) || [];
        userDataArr.push(signupData);
        localStorage.setItem('user', JSON.stringify(userDataArr));
        toast.success('Registered Successfully')
        setTimeout(() => {
            navigate('/'); 
            closeBtnHandler();
        },1200)   
    }

    const GoogleAuth=()=>{
        // add the firebase code here
        signInWithPopup(auth,provider).then((result)=>{
            console.log("result",result);
        }).catch((error)=>{
            console.log("error",error);
        })
    }

    return (
        <div style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000
        }}>
            <div style={{
                position: "absolute",
                zIndex: "1000",
                top: "10%",
                left: "25%",
                width: "50vw",
                backgroundColor: "white"
            }}>
                <div style={{ display: "flex" }}>
                    <div className="leftlogin">
                        <span>Login</span>
                        <p>Get access to your Orders, Wishlist and Recommendations</p>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="image" />
                    </div>
                    <div className="rightlogin">
                        <form onSubmit={signupHandler}>
                            <label htmlFor="name" className="name">Enter Your Name</label>

                            <input type="text" id="name" onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}  required placeholder="Enter Your Name" />

                            <label htmlFor="email" className="name">Enter Your Email</label>

                            <input type="email" id="email" onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} required placeholder="Enter Your Email" />

                            <label htmlFor="number" className="name">Enter Your number</label>

                            <input type="text" id="number"  onChange={(e) => setSignupData({ ...signupData, number: e.target.value })} required placeholder="Enter Your number" />

                            <label htmlFor="password" className="name">Enter Your Password</label>

                            <input type="password" id="password"  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} required placeholder="Enter Your Password" />

                            <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>

                            <button className="home">Submit</button>
                        </form>
                        
                        <h1>Or</h1>
                        <button onClick={GoogleAuth}><GoogleIcon/> Sign in with Google </button>

                        <div className="xcloser" onClick={closeBtnHandler}>
                            <CloseIcon />
                        </div>
                    </div>
                </div>

            </div>
            <Toaster
            position="top-right"
            reverseOrder={false}
            />
        </div>
    )
}



