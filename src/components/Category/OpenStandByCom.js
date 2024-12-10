import '../../css/CategoryPages/OpenStandBy.css';
import { BsBellFill } from "react-icons/bs";
import Datas from '../../particularpage/data/Datas';
import { useNavigate } from 'react-router-dom';


function OpenStandByCom(props){

    const Navigate = useNavigate();

    return(<div className="OBSCardSlot">
        <div className="OBSCardImgBox" onClick={()=>Navigate('/ptcr/' + Datas[props.index].idDT)}> <img className="OBSCardImg" src={props.OpenComponent[props.index].OBSImage}/> </div>
        <div className="OBSCardDetailCon"  onClick={()=>Navigate('/ptcr/' + Datas[props.index].idDT)}>
            <div className="OBSCardDetailCompany">{props.OpenComponent[props.index].OBSCompany}</div>
            <div className="OBSCardDetailTitle">{props.OpenComponent[props.index].OBSTitle}</div>
            <div className="OBSCardDetailDetail">{props.OpenComponent[props.index].OBSDetail}</div>
            <div className='OBSEmptyBox'></div>
        </div>
        <div className="OBSAlram">
            <div className="OBSAlraming">N명 알림신청 중</div>
            <div className="OBSAlramBell"> <BsBellFill /> 이모티콘 알림신청</div>
        </div>
    </div>

    );
}

export default OpenStandByCom;