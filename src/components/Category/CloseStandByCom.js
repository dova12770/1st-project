import '../../css/CategoryPages/OpenStandBy.css';
import { BsBellFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function CloseStandByCom(props){

    let [alCnt,setAlCnt] = useState(0);

    const Navigate = useNavigate();

    return(<div className="OBSCardSlot">
        <div className="OBSCardImgBox" onClick={()=>Navigate('/ptcr/'+ props.CloseComponent[props.index].id)}> <img className="OBSCardImg" src={props.CloseComponent[props.index].OBSImage}/> </div>
        <div className="OBSCardDetailCon"  onClick={()=>alert('상품 준비중 입니다.')}>
            <div className="OBSCardDetailCompany">{props.CloseComponent[props.index].OBSCompany}</div>
            <div className="OBSCardDetailTitle">{props.CloseComponent[props.index].OBSTitle}</div>
            <div className="OBSCardDetailDetail">{props.CloseComponent[props.index].OBSDetail}</div>
            <div className='OBSEmptyBox'></div>
        </div>
        <div className="OBSAlram">
            <div className="OBSAlraming">{alCnt}명 알림신청 중</div>
            <div className="OBSAlramBell" onClick={()=>{
                alert('알림 신청 되었습니다');
                {setAlCnt(alCnt+1)};
                }}> <BsBellFill /> 알림신청</div>
        </div>
    </div>

    );
}

export default CloseStandByCom;