import '../css/MySettingCss.css';
import { TbAlertSquare } from "react-icons/tb";
import { useState } from 'react';
import AddDeliveryAddress from '../components/AddDeliveryAddress';

function Address() {
    const [openModal, setOpenModal] = useState(false);
    const [addressList, setAddressList] = useState([]);

    const modalOpen = () => {
        setOpenModal(true);
    };

    const modalClose = () => {
        setOpenModal(false);
    };

    const handleSave = (address) => {
        setAddressList([...addressList, address]);
        modalClose();
    };

    const handleDelete = (index) => {
        const updatedList = addressList.filter((_, i) => i !== index);
        setAddressList(updatedList);
    };

    return (
        <div className="profContainer">
            <div className='profBox'>
                <div className="prof">등록된 배송지</div>
                <div className='button' onClick={modalOpen}>+추가</div>
            </div>
            {addressList.length === 0 ? (
                <>
                    <div className='iconAlert profAlter'><TbAlertSquare /></div>
                    <div className="profAlter">
                        등록된 배송지가 없습니다.
                    </div>
                    <div className="profAlter">
                        배송지를 추가하여 주세요.
                    </div>
                </>
            ) : (
                <ul className="payInfoList">
                    {addressList.map((address, index) => (
                        <li key={index} className="payInfoItem">
                            {address}
                            <button
                                className="deleteButton"
                                onClick={() => handleDelete(index)}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <AddDeliveryAddress open={openModal} close={modalClose} save={handleSave} />
        </div>
    );
}

export default Address;
