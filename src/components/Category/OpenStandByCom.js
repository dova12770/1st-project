import '../../css/CategoryPages/OpenStandBy.css';
import { BsBellFill } from "react-icons/bs";



function OpenStandByCom(props){

    return(<div className="OBSCardSlot">
        <div className="OBSCardImgBox"> <img className="OBSCardImg" src={props.OpenComponent[props.index].OBSImage}/> </div>
        <div className="OBSCardDetailCon">
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