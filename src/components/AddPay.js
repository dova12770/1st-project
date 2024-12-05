
import React, { useState } from 'react';
import '../css/Modal.css'; // 모달 디자인을 위한 CSS

function AddPay({ open, close, save }) {
    const [cardInfo, setCardInfo] = useState({
        number: '',
        expiration: '',
        owner: '',
        cvc: ''
    });

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardInfo({ ...cardInfo, [name]: value });
    };

    const handleSubmit = () => {
        if (cardInfo.number && cardInfo.expiration && cardInfo.owner && cardInfo.cvc) {
            save(`${cardInfo.number} (${cardInfo.owner})`);
        } else {
            alert("모든 필드를 입력해주세요.");
        }
    };

    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <h2>결제수단 추가</h2>
                <div>
                    <input
                        type="text"
                        name="number"
                        placeholder="카드 번호"
                        value={cardInfo.number}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="expiration"
                        placeholder="유효기간 (MM/YY)"
                        value={cardInfo.expiration}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="owner"
                        placeholder="소유자 이름"
                        value={cardInfo.owner}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        value={cardInfo.cvc}
                        onChange={handleChange}
                    />
                </div>
                <div className="modalButtons">
                    <button onClick={close}>취소</button>
                    <button onClick={handleSubmit}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default AddPay;


