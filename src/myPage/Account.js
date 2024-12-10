import '../css/MySettingCss.css';
import { useState } from 'react';
import PasswordModal from '../components/PasswordModal';

function Account({ acc }) {
    const [editingField, setEditingField] = useState(null);
    const [editedAcc, setEditedAcc] = useState({ ...acc[0] });
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    const handleSave = (field) => {
        setEditingField(null);
    };

    const handleChange = (field, value) => {
        setEditedAcc((prev) => ({ ...prev, [field]: value }));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handlePasswordSave = (newPassword) => {
        alert(`새 비밀번호가 저장되었습니다: ${newPassword}`);
    };

    return (
        <div className="profContainer">
            <div className="profBox">
                <div>
                    <p className="prof">이메일</p>
                    <p>{acc[0].email}</p>
                </div>
            </div>
            <div className="profBox">
                <div>
                    <p className="prof">비밀번호</p>
                </div>
                <button className="my_btn" onClick={openModal}>
                    변경
                </button>
            </div>
            <div className="profBox">
                <div>
                    <p className="prof">연락처</p>
                    {editingField === 'tel' ? (
                        <input
                            type="text"
                            value={editedAcc.tel}
                            onChange={(e) => handleChange('tel', e.target.value)}
                        />
                    ) : (
                        <span>{editedAcc.tel}</span>
                    )}
                </div>
                <div>
                    <button
                        className="my_btn"
                        onClick={() =>
                            editingField === 'tel'
                                ? handleSave('tel')
                                : setEditingField('tel')
                        }
                    >
                        {editingField === 'tel' ? '저장' : '변경'}
                    </button>
                    {editingField === 'tel' && (
                        <button className="my_btn" onClick={() => setEditingField(null)}>
                            취소
                        </button>
                    )}
                </div>
            </div>
            <div className="profBox">
                <p className="prof">카카오 계정 연동</p>
                <button className="my_btn" onClick={() => {
                    if (window.confirm('카카오 계정에 연동하시겠습니까?')) {
                        alert('연동되었습니다.');
                    }
                }}>연동</button>
            </div>
            <div className="profBox">
                <p className="prof">페이스북 계정 연동</p>
                <button className="my_btn" onClick={() => {
                    if (window.confirm('페이스북 계정에 연동하시겠습니까?')) {
                        alert('연동되었습니다.');
                    }
                }}>연동</button>
            </div>
            <div className="profBox">
                <p className="prof">네이버 계정 연동</p>
                <button className="my_btn" onClick={() => {
                    if (window.confirm('네이버 계정에 연동하시겠습니까?')) {
                        alert('연동되었습니다.');
                    }
                }}>연동</button>
            </div>
            <div className="profBox">
                <p className="prof">애플 계정 연동</p>
                <button className="my_btn" onClick={() => {
                    if (window.confirm('애플 계정에 연동하시겠습니까?')) {
                        alert('연동되었습니다.');
                    }
                }}>연동</button>
            </div>
            <div className="profBox">
                <p className="prof">회원탈퇴</p>
                <button className="my_btn" onClick={() => {
                    if (window.confirm('정말로 탈퇴하겠습니까?')) {
                        alert('탈퇴되었습니다.');
                    }
                }}>탈퇴</button>
            </div>
            <PasswordModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handlePasswordSave}
            />
        </div>
    );
}

export default Account;
