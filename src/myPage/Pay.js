
import './MySettingCss.css';
import { TbAlertSquare } from "react-icons/tb";
import { useState } from 'react';
import AddPay from '../components/AddPay'; 

function Pay() {
    const [openModal, setOpenModal] = useState(false);
    const [payInfoList, setPayInfoList] = useState([]); 

    const modalOpen = () => {
        setOpenModal(true);
    };

    const modalClose = () => {
        setOpenModal(false);
    };

    const handleSave = (info) => {
        if (info) {
            setPayInfoList([...payInfoList, info]); 
        }
        modalClose();
    };

    return (
        <div className="profContainer">
            <div className="profBox">
                <div className="prof">등록된 결제수단</div>
                <div className="button" onClick={modalOpen}>+추가</div>
            </div>
            {payInfoList.length === 0 ? (
                <>
                    <div className="iconAlert profAlter"><TbAlertSquare /></div>
                    <div className="profAlter">
                        등록된 결제수단이 없습니다.
                    </div>
                    <div className="profAlter">
                        결제수단을 추가하여주세요.
                    </div>
                </>
            ) : (
                <div className="profAlter">
                    <ul>
                        {payInfoList.map((info, index) => (
                            <li key={index}>결제수단 {index + 1}: {info}</li>
                        ))}
                    </ul>
                </div>
            )}
            <AddPay open={openModal} close={modalClose} save={handleSave} />
        </div>
    );
}

export default Pay;
