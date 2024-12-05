import '../css/MySettingCss.css';
import { TbAlertSquare } from "react-icons/tb";

function DeliveryAddress() {
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
    const handleDelete = (index) => {
        const updatedList = payInfoList.filter((_, i) => i !== index);
        setPayInfoList(updatedList);
    };

    return (
        <div className="profContainer">
            <div className='profBox'>
                <div className="prof">등록된 배송지</div>
                <div className='button' onClick={() => { modalOpen }}>+추가</div>
            </div>
            {payInfoList.length === 0 ? (
                <>
                    <div className="iconAlert profAlter"><TbAlertSquare /></div>
                    <div className="profAlter">
                        등록된 배송지가 없습니다.
                    </div>
                    <div className="profAlter">
                        배송지를 추가하여주세요.
                    </div>
                </>
            ) : (

                <ul className="payInfoList">
                    {payInfoList.map((info, index) => (
                        <li key={index} className="payInfoItem">
                            {index + 1}번 배송지<br />
                            주소 : {info}
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
        </div>
    )
}

export default DeliveryAddress;