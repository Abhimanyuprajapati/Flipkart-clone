import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import "../css/moreT.css";

export const MoreT = () => {
  return (
    <div className='moreT'>
        <div className='moreT1'>
           <span className='moreT2'>< NotificationsIcon/></span> 
            <span>Notification Preference</span>
        </div>
        <hr />
        <div className='moreT1'>
            <span className='moreT2'>< LiveHelpIcon/></span>
            <span>24x7 Customer Care</span>
        </div>
        <hr />
        <div className='moreT1'>
        <span className='moreT2'>< TrendingUpIcon/></span>
            <span>Advertise</span>
        </div>
        <hr />
        <div className='moreT1'>
            <span className='moreT2'>< DownloadIcon/></span>
            <span>Download App</span>
        </div>
    </div>
  )
}
