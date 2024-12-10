import '../css/MySettingCss.css';
import '../css/Modal.css'
import { useState } from 'react';

function PasswordModal({ isOpen, onClose, onSave }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
            return;
        }
        onSave(newPassword); 
        onClose(); 
    };

    if (!isOpen) return null;

    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <h2>비밀번호 변경</h2>
                <div className="modalField">
                    <label>현재 비밀번호</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className="modalField">
                    <label>새 비밀번호</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="modalField">
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="modalButtons">
                    <button className="my_btn" onClick={handleSave}>
                        저장
                    </button>
                    <button className="my_btn" onClick={onClose}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PasswordModal;

