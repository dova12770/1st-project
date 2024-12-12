import { useState } from "react";
import '../../css/CategoryPages/OpenStandBy.css'
import CloseComponent from '../../components/Category/CloseComponent';
import OpenStandByCom from "../../components/Category/OpenStandByCom";


function OpenStandBy(){

    const[repeat,setRepeat]=useState(CloseComponent);

    return(
        <div>
            <div className="OBSCon">
                <div><h2 className="OSBTitle">마감임박</h2></div>
            </div>
            
            <div className="OBSMenuContainer">

                {
                    repeat.map((_,index) => {
                        return <OpenStandByCom index={index} OpenComponent={CloseComponent}  />
                    })
                }

                    

            </div>
        </div>
    );
}

export default OpenStandBy;