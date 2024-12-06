import React, { useState, useEffect } from 'react';
import '../css/Modal.css';

function AddDeliveryAddress({ open, close, save }) {
    const [addressInfo, setAddressInfo] = useState({
        name: '',
        phone: '',
        address: '',
        detail: ''
    });

    useEffect(() => {
        if (open) {
            setAddressInfo({
                name: '',
                phone: '',
                address: '',
                detail: ''
            });
        }
    }, [open]);

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        let filteredValue = value;
        if (name === "name") {
            filteredValue = value.replace(/[^a-zA-Zㄱ-힣\s]/g, '');
        } else if (name === "phone") {
            filteredValue = value.replace(/\D/g, '');
            if (filteredValue.length > 11) filteredValue = filteredValue.slice(0, 11);
            
        }

        setAddressInfo({ ...addressInfo, [name]: filteredValue });
    };

    const handleSubmit = () => {
        const { name, phone, address } = addressInfo;

        if (!name || name.trim().length < 2) {
            alert("이름은 최소 2자 이상의 문자를 입력해야 합니다.");
            return;
        }
        if (phone.length < 10 || phone.length > 11) {
            alert("연락처는 10~11자리 숫자를 입력해야 합니다.");
            return;
        }
        if (!address || address.trim().length < 5) {
            alert("주소는 최소 5자 이상 입력해야 합니다.");
            return;
        }

        save(`${name}, ${phone}, ${address} ${addressInfo.detail ? `(${addressInfo.detail})` : ''}`);
    };

    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <h2>배송지 추가</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="이름 (문자만, 최소 2자)"
                    value={addressInfo.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="연락처 (10~11자리 숫자)"
                    value={addressInfo.phone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="주소 (최소 5자)"
                    value={addressInfo.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="detail"
                    placeholder="상세주소 (선택 입력)"
                    value={addressInfo.detail}
                    onChange={(e) =>
                        setAddressInfo({ ...addressInfo, detail: e.target.value })
                    }
                />
                <div className="modalButtons">
                    <button onClick={close}>취소</button>
                    <button onClick={handleSubmit}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default AddDeliveryAddress;
