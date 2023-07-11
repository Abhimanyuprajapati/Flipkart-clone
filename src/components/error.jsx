import { useNavigate } from "react-router-dom";
import "../css/error.css"
const ErrorPage = () => {
    const navigater=useNavigate();
    const navigate=()=>{
        navigater('/');
    }
  return (
    <div className="error">
            <img src="https://www.bypeople.com/wp-content/uploads/2016/03/2016-03-09_16-30-59.gif" alt="img" />
            <button className="error1" onClick={navigate}>Back to Home</button>
    </div>
  )
}

export default ErrorPage;