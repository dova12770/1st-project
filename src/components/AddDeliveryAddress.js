import React, { useState, useEffect } from 'react';
import '../css/Modal.css'; 

function AddDeliveryAddress({ open, close, save }) {
    const [cardInfo, setCardInfo] = useState({
        owner: '',
        address: '',
        tel: ''
    });

    useEffect(() => {
        if (open) {
            setCardInfo({
                owner: '',
                address: '',
                tel: ''
            });
        }
    }, [open]);

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        let filteredValue = value;
        if (name === "owner") {
            filteredValue = value.replace(/[^a-zA-Zㄱ-힣\s]/g, ''); 
        } else if (name === "adress") {
            filteredValue = value.replace(/[^a-zA-Zㄱ-힣\s]/g, ''); 
        } else if (name === "tel") {
            filteredValue = value.replace(/\D/g, '')
        }

        setCardInfo({ ...cardInfo, [name]: filteredValue });
    };

    const handleSubmit = () => {
        const { number, expiration, owner, cvc } = cardInfo;

        if (number.length !== 16) {
            alert("카드 번호는 16자리 숫자를 입력해야 합니다.");
            return;
        }
        if (expiration.length !== 4) {
            alert("유효기간은 4자리 숫자 (MMYY)를 입력해야 합니다.");
            return;
        }
        if (!owner || owner.trim().length < 2) {
            alert("결제 명은 최소 2자 이상의 문자를 입력해야 합니다.");
            return;
        }
        if (cvc.length !== 3) {
            alert("CVC는 3자리 숫자를 입력해야 합니다.");
            return;
        }

        save(`${number} (${owner})`);
    };

    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <h2>결제수단 추가</h2>
                <div>
                    <input
                        type="text"
                        name="number"
                        placeholder="카드 번호 (16자리 숫자)"
                        value={cardInfo.number}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="expiration"
                        placeholder="유효기간 (MMYY)"
                        value={cardInfo.expiration}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="owner"
                        placeholder="결제 명 (문자만, 최소 2자)"
                        value={cardInfo.owner}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="cvc"
                        placeholder="CVC (3자리 숫자)"
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

export default AddDeliveryAddress;
