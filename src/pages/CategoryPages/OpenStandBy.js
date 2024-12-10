import { useState } from "react";
import '../../css/CategoryPages/OpenStandBy.css'
import OpenComponent from '../../components/Category/OpenComponent';
import OpenStandByCom from "../../components/Category/OpenStandByCom";


function OpenStandBy(){

    const[repeat,setRepeat]=useState(OpenComponent);

    return(
        <div>
            <div className="OBSCon">
                <div><h1 className="OSBTitle">공개예정</h1></div>
            </div>
            
            <div className="OBSMenuContainer">

                {
                    repeat.map((_,index) => {
                        return <OpenStandByCom index={index} OpenComponent={OpenComponent}  />
                    })
                }

                    

            </div>
        </div>
    );
}

export default OpenStandBy;