import { useState } from "react";
import '../../css/CategoryPages/OpenStandBy.css'
import CloseComponent from '../../components/Category/CloseComponent';
import CloseStandByCom from "../../components/Category/CloseStandByCom";


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
                        return <CloseStandByCom index={index} CloseComponent={CloseComponent}  />
                    })
                }

                    

            </div>
        </div>
    );
}

export default OpenStandBy;