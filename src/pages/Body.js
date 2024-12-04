import Advertisement from "./Advertisement";
import Rank from "./Rank";
import More from "./More";
import Slide from "../components/Slide";
import SideChat from "../components/SideChat/SideChat";
import '../css/Body.css';


function Body() {

    return (
        <div className="bodyFrame"><div className="chat"><SideChat/></div>
            <div className="bodyaside">
                <div><Slide/><More/></div>
                <Rank/>
                </div>
            </div>
            );
}

            export default Body;