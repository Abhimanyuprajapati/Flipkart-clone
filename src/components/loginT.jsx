import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import "../css/loginT.css";
import { useNavigate } from 'react-router-dom';

export const LoginT = () => {
    const navigate1=useNavigate();
    const pluspage=()=>{
      navigate1("/plus")
    }

    const navigate2=useNavigate();
    const comingSoon=()=>{
        navigate2("/comingsoon")
    }

  return (
    <div className='loginT'>
        <div className='loginT1'>
           <span className='loginT5'>New Customer</span> 
           <span className='loginT6'>Sign Up</span>
        </div>
        <hr />
        <div className='loginT1' onClick={comingSoon}>
            <span className='loginT2'>< AccountCircleIcon/></span>
            <span>My Profile</span>
        </div>
        <hr />
        <div className='loginT1' onClick={pluspage}>
            <span className='loginT2'><img src="./src/img/plus_aef861.png" alt="logo" className='loginT3' /></span>
            <span>Flipkart Plus Zone</span>
        </div>
        <hr />
        <div className='loginT1' onClick={comingSoon}>
            <span className='loginT2'>< BrandingWatermarkIcon/></span>
            <span>Orders</span>
        </div>
        <hr />
        <div className='loginT1' onClick={comingSoon}>
            <span className='loginT2'>< FavoriteIcon/></span>
            <span>Wishlist</span>
        </div>
        <hr />
        <div className='loginT1' onClick={comingSoon}>
            <span className='loginT2'>< EmojiEventsIcon/></span>
            <span>Rewards</span>
        </div>
        <hr />
        <div className='loginT1' onClick={comingSoon}>
            <span className='loginT2'>< CardGiftcardIcon/></span>
            <span>Gift Cards</span>
        </div>
    </div>
  )
}
