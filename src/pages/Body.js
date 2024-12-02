import Advertisement from "./Advertisement";
import Rank from "./Rank";
import More from "./More";
import '../css/Body.css';


function Body() {

    return (
        <div>
            <div className="bodyaside">
                <div> <div><Advertisement/></div>
                    <div><More/></div>
                    </div>
                    <div><Rank/></div>
                </div>
            </div>
            );
}

            export default Body;