import './MySettingCss.css'
import { TbAlertSquare } from "react-icons/tb";

function DeliveryAddress() {

    return (
        <div className="profContainer">
            <div className='profBox'>
                <div className="prof">등록된 배송지</div>
                <div className='button' onClick={() => {

                }}>+추가</div>
            </div>
            <div className='iconAlert profAlter'><TbAlertSquare /></div>
            <div className="profAlter">
                등록된 배송지가 없습니다.
            </div>
            <div className="profAlter">
                배송지를 추가하여주세요.
            </div>
        </div>
    )
}

export default DeliveryAddress;