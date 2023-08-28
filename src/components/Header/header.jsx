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


export const Header = () => {
  const navigate=useNavigate();
  const homepage=()=>{
    navigate("/")
  }
  const navigate1=useNavigate();
  const pluspage=()=>{
    navigate1("/plus")
  }

  const navigate2=useNavigate();
  const comingsoon=()=>{
    navigate2("/comingsoon")
  }

  const navigate3=useNavigate();
  const cardRoute=()=>{
    navigate3("/card")
  }
// this is for card number to show
const cartCount=useSelector(state=>state.cart);
console.log("this is the count",cartCount);

  return (
   <div className="header">
    <div className="header_first">
        <img src="https://raw.githubusercontent.com/Abhimanyuprajapati/Flipkart-clone/main/src/img/flipkart-plus_8d85f4%20(1).png" onClick={homepage} alt="flipkart logo" />
        <div className='header_logo' onClick={pluspage}>
          <span style={{fontSize: "11",fontStyle: "italic", marginTop: "-1",color:'white'}}>Explore </span>
          <span style={{color: "#ffe500",fontWeight: "500",marginRight: "3"}}>Plus</span>
          <span><img src="https://raw.githubusercontent.com/Abhimanyuprajapati/Flipkart-clone/main/src/img/plus_aef861.png" alt="logo"  /></span>
        </div>
    </div>
    <div className="header_second">
      <input type="text" placeholder='Search for products, brands and more'/>
      <span className='search'><SearchIcon/></span>
    </div>
    <div className="header_third">
    <Tippy theme="light" interactive={true}  content={<LoginT/>}>
      <button>Login</button>
      </Tippy>
    </div>
    <div className="header_fourth">
      <span onClick={comingsoon}>Become a Seller</span>
    </div>
    <div className="header_fifth">
    <Tippy  theme="light" interactive={true}  content={<MoreT/> }>
    <span>More</span>
    </Tippy>
    <span><KeyboardArrowDownIcon/></span>
    </div>
    <div className="header_sixth" onClick={cardRoute}>
      <span><ShoppingCartIcon /></span>
      <span>Cart</span>
      <span>
        {cartCount == 0 ? <div></div>:<sup style={{marginLeft:"5px",fontSize:"18px"}}>{cartCount.length}</sup>}
      </span>
    </div>
   </div>
  )
} 
