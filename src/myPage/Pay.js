import './MySettingCss.css'
import { TbAlertSquare } from "react-icons/tb";

function Pay() {

    return (
        <div className="profContainer">
            <div className='profBox'>
                <div className="prof">등록된 결제수단</div>
                <div className='button' onClick={() => {

                }}>+추가</div>
            </div>
            <div className='iconAlert prof'><TbAlertSquare /></div>
            <div className="prof">
                등록된 결제수단이 없습니다.
                
            </div>
            <div className="prof">
                결제수단을 추가하여주세요.
            </div>
        </div>
    )
}

export default Pay;