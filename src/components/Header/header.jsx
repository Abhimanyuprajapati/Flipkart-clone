import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import "././headertab.css"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MoreT } from '../moreT';
import { LoginT } from '../loginT';
import 'tippy.js/themes/light.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserLogin } from '../UserLogin';
import { useState } from 'react';
import { UserDetail } from '../userDetail';
// import { Avatar } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';


export const Header = () => {

  // open the login form 

  const navigate = useNavigate();
  const homepage = () => {
    navigate("/")
  }
  const navigate1 = useNavigate();
  const pluspage = () => {
    navigate1("/plus")
  }

  const navigate2 = useNavigate();
  const comingsoon = () => {
    navigate2("/comingsoon")
  }

  const navigate3 = useNavigate();
  const cardRoute = () => {
    navigate3("/card")
  }
  // this is for card number to show
  const cartCount = useSelector(state => state.cart);
  console.log("this is the count", cartCount);


  const blacker = {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000
  }

  const [opener, setOpener] = useState(false);

  const closeBtnHandler = () => {
    setOpener(false);
  }

  // const getanswer=localStorage.getItem('signupData')!==null
  // const getanswer=JSON.parse(localStorage.getItem('signupData') || []);
  // console.log("this is from local  storage",getanswer);
  // console.log(getanswer.name);
  // const first=getanswer.name.charAt(0);
  // const firstcapital=first.toUpperCase();
  // str.toUpperCase()
  const userDataArr = JSON.parse(localStorage.getItem('user')) || [];
    console.log("this is me from local storage",userDataArr);
    let firstcapital;
    // console.log("this is me name store",firstcapital);
    userDataArr.map((el) => {
      console.log("this is eval",el)
      let namo=null;
      namo=el.name;
      let first=namo.charAt(0);
      firstcapital=first.toUpperCase()
    })

    console.log("this is me name store",firstcapital);
    // console.log(namo);
    // const first=namo.charAt(0);
    // const firstcapital=first.toUpperCase();
    // console.log(firstcapital);
    // if(namo!==null){
    //   const first=namo.charAt(0);
    //   const firstcapital=first.toUpperCase();
    //   console.log(firstcapital);
    // }
    // const firstcapital=User;

  return (
    <div className="header">
      <div className="header_first">
        <img src="https://raw.githubusercontent.com/Abhimanyuprajapati/Flipkart-clone/main/src/img/flipkart-plus_8d85f4%20(1).png" onClick={homepage} alt="flipkart logo" />
        <div className='header_logo' onClick={pluspage}>
          <span style={{ fontSize: "11", fontStyle: "italic", marginTop: "-1", color: 'white' }}>Explore </span>
          <span style={{ color: "#ffe500", fontWeight: "500", marginRight: "3" }}>Plus</span>
          <span><img src="https://raw.githubusercontent.com/Abhimanyuprajapati/Flipkart-clone/main/src/img/plus_aef861.png" alt="logo" /></span>
        </div>
      </div>
      <div className="header_second">
        <input type="text" placeholder='Search for products, brands and more' />
        <span className='search'><SearchIcon /></span>
      </div>


      <div className="header_third">
      {
       firstcapital==undefined?
        <>
        <Tippy theme="light" interactive={true} content={<LoginT />}>
        <button onClick={() => setOpener(true)} >Login</button>
        </Tippy>

        <div style={{
          visibility: opener ? "visible" : "hidden",
          opacity: opener ? "1" : "0"
        }}>
          <UserLogin closeBtnHandler={closeBtnHandler} />
        </div>

        </>
        :
        <Tippy theme="light" interactive={true} content={<UserDetail />}>
        <span className='getnamestyle'>{firstcapital}</span>
      </Tippy>}
      
      
{/* localStorage.getItem('userDataArr')!==undefined? */}

      </div>


      
      <div className="header_fourth">
        <span onClick={comingsoon}>Become a Seller</span>
      </div>
      <div className="header_fifth">
        <Tippy theme="light" interactive={true} content={<MoreT />}>
          <span>More</span>
        </Tippy>
        {/* <span><KeyboardArrowDownIcon/></span> */}
      </div>
      <div className="header_sixth" onClick={cardRoute}>
        <span><ShoppingCartIcon /></span>
        <span>Cart</span>
        <span>
          {cartCount == 0 ? <div></div> : <sup style={{ marginLeft: "5px", fontSize: "18px" }}>{cartCount.length}</sup>}
        </span>
      </div>
    </div>
  )
}




{/* onClick={onclose} style={{
          zIndex:"2000",
          position:"absolute",
          top:"30",
          marginLeft:"25.2rem",
          backgroundColor:"#2874f0",
          color:"white",
          borderRadius:"3px",
          marginTop:"1.3rem"
      }} */}
{/* <div>
            <CloseIcon />
          </div> */}



          // const [opener, setOpener] = useState(false)
          // const Model = ({ children, open, onclose }) => {
          //   if (!open) return null;
          //   return (
          //     <>
          //       <div>
          //         {children}
          //       </div>
          //     </>
          //   )
          // }


/*
 {/* <Tippy theme="light" interactive={true} content={<LoginT />}>
          <button onClick={() => setOpener(true)} >Login</button>
        </Tippy> */

         /* </Model> <Model open={opener} onclose={() => { setOpener(false) }} > */

        /*this is login components  *//*--------------------------------------*/

         /* <button className='getnamestyle'>{getanswer.name}</button> */
        /* getanswer.name.charAt(0) 
*/