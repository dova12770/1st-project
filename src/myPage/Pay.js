import './MySettingCss.css'
import { TbAlertSquare } from "react-icons/tb";
import { useState } from 'react';

function Pay() {
    const [openModal,setOpenModal]= useState(false)
    const modalOpen = () => {
        setOpenModal(true);
    };
    const modalClose = () => {
        setOpenModal(false);
    };
    return (
        <div className="profContainer">
            <div className='profBox'>
                <div className="prof">등록된 결제수단</div>
                <div className='button' onClick={() => {
                    modalOpen
                }}>+추가</div>
            </div>
            <div className='iconAlert profAlter'><TbAlertSquare /></div>
            <div className="profAlter">
                등록된 결제수단이 없습니다.
            </div>
            <div className="profAlter">
                결제수단을 추가하여주세요.
            </div>
        </div>
    )
}

export default Pay;