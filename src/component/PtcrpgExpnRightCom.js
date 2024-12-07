import '../particularpage/Ptcrpg2.css';
import { useState } from 'react';




function PtcrpgExpnRightCom(props) {    //오른쪽 가격옵션 선택창 내부에 있는 작은 박스

    let [checkedItem,setCheckedItem] = useState(false);

    return (
        <div className='innerExpnRight' onClick={()=>{
            if(checkedItem == false){
                checkedItem = true;
                setCheckedItem(checkedItem);
                console.log(checkedItem);
                
            }else if(checkedItem == true){
                checkedItem = false;
                setCheckedItem(checkedItem);
                console.log(checkedItem);
            } 
        }} style={{ backgroundColor: checkedItem == false ? 'white' : 'rgb(243, 187, 187)' }} >
            <p className='pakagePrice' style={{ backgroundColor: checkedItem == false ? 'white' : 'rgb(243, 187, 187)' }} >{props.item}원</p>
            <p style={{ backgroundColor: checkedItem == false ? 'white' : 'rgb(243, 187, 187)' }} >{props.data[0].userPriceTextDT[props.index]}</p>
        </div>
    )
}


export default PtcrpgExpnRightCom;