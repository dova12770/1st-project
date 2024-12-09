import Rank from "./Rank";
import More from "./More";
import Slide from "../components/Slide";
import SideChat from "../components/SideChat/SideChat";
import { useNavigate, useLocation  } from 'react-router-dom'; 
import '../css/Body.css';


function Body() {
    const navigate = useNavigate();

    return (
        <div className="bodyFrame">
            <div className="bodyaside">
                <div><Slide/><More/></div>
                <Rank/>
                </div>
            </div>
            // <div className="chat"><SideChat/></div> 임시 차단
            );
}

    export default Body;