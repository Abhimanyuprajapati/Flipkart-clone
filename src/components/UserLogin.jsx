import { useState } from "react";
import "../css/UserLogin.css";
// import CloseIcon from '@mui/icons-material/Close';

export const UserLogin = () => {
    // const setOpener=()=>{
    //     console.log("hello friends");
    // }

    const [name,setName]=useState("");
    const nameChange=(e)=>{
      setName(e.target.value)
    }

  return (
    <div style={{
        position:"fixed",
        top:"0",
        bottom:"0",
        left:"0",
        right:"0",
        background:"rgba(0,0,0,0.7)",
        zIndex:1000
    }}>
                <div style={{
        position:"absolute",
        zIndex:"1000",
        top:"10%",
        left:"25%",
        width:"50vw",
        backgroundColor:"white"
    }}>
        <div style={{display:"flex"}}>
            <div className="leftlogin">
                <span>Login</span>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="image" />
            </div>
            <div className="rightlogin">
                    <form action="onsubmit">
                        <label htmlFor="name" className="name">Enter Your Name</label>
                       
                        <input type="text"id="name" value={name} onChange={nameChange} />
                      
                        <label htmlFor="gmail" className="name">Enter Your Gmail</label>
                       
                        <input type="gmail" id="gmail"/>
                    
                        <label htmlFor="number" className="name">Enter Your number</label>
                    
                        <input type="text" id="number"/>
                     
                        <label htmlFor="password" className="name">Enter Your Password</label>
                     
                        <input type="password"id="password"/>

                        <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>

                        <button>Submit</button>
                    </form>
                        <h1>Or</h1>
                        <button>Sign in with Google </button>
                        {/* <div className="xcloser" onClick={setOpener}>
                           <CloseIcon/>
                        </div> */}
            </div>
        </div>
       
    </div>
    </div>
   )
}



