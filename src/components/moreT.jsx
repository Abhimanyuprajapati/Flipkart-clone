import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import "../css/moreT.css";
import { useNavigate } from 'react-router-dom';


export const MoreT = () => {
const navigeter=useNavigate();
const navigate=()=>{
    navigeter("/comingsoon");
}
  return (
    <div className='moreT'>
        <div className='moreT1' onClick={navigate}>
           <span className='moreT2'>< NotificationsIcon/></span> 
            <span>Notification Preference</span>
        </div>
        <hr />
        <div className='moreT1' onClick={navigate}>
            <span className='moreT2'>< LiveHelpIcon/></span>
            <span>24x7 Customer Care</span>
        </div>
        <hr />
        <div className='moreT1' onClick={navigate}>
        <span className='moreT2'>< TrendingUpIcon/></span>
            <span>Advertise</span>
        </div>
        <hr />
        <div className='moreT1'>
            <span className='moreT2'>< DownloadIcon/></span>
            <a href='https://play.google.com/store/apps/details?id=com.flipkart.android' target='_blank' style={{textDecoration:"none",color:"black"}}><span>Download App</span></a>
        </div>
    </div>
  )
}
