import './HeaderCss.css'
import { useState, useEffect } from 'react'
import Category from './Category';
import { CgHeart } from "react-icons/cg";
import { CgBell } from "react-icons/cg";
import { CgList } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa6";

import NotificationData from '../data/NotificationData';
import NotificationComponent from '../components/NotificationComponent';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../data/UserInfo';

function Header({ isLoggedIn, setIsLoggedIn }) {
    const [view, setView] = useState(false);
    const [menuOn, setMenuOn] = useState(false);
    const [alarms, setAlarms] = useState(NotificationData);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onDelete = (id) => {
        const updatedAlarms = alarms.filter((value) => value.id !== id);
        setAlarms(updatedAlarms);
    };

    return (
        <div className='HContainer'>
            <div className='headerContainer'>
                <div className='PrTitle' onClick={() => navigate('/')}>
                    <span className='Prism'>Prism</span>
                </div>
                <div className='logoRight'>
                    <div className='bell' onClick={() => {isLoggedIn ? setIsOpen(!isOpen) : setIsOpen(isOpen)}}>
                        <CgBell /> 알림
                    </div>
                    <div className='bell' onClick={() => { isLoggedIn ? navigate('/interest') : alert("로그인 먼저 해주세요.") }}>
                        <CgHeart /> 선호
                    </div>
                    <div className='login_btn' onClick={() => {
                        if (!isLoggedIn) {
                            navigate('/login');
                        } else {
                            navigate('/mypage');
                        }
                    }}>
                        {isLoggedIn ? "마이페이지 " : "로그인/회원가입"}
                        {isLoggedIn &&(
                        <FaPowerOff className='logout_btn' onClick={(event) => {
                            event.stopPropagation();
                            if (window.confirm('로그아웃하시겠습니까?')) {
                                setIsLoggedIn(false);
                                navigate('/');
                            }
                        }}
                        />
                    )}
                    </div>
                </div>
            </div>

            <div className='Menubar'>
                <ul>
                    <li className='category'
                        onMouseEnter={() => setView(true)}
                        onMouseLeave={() => setView(false)}>
                        <CgList /> 카테고리
                        {view && <Category />}
                    </li>
                    <li className='hoverName' onClick={() => navigate('/')}>신규</li>
                    <li className='hoverName' onClick={() => navigate('/')}>인기</li>
                    <li className='hoverName' onClick={() => navigate('/')}>공개예정</li>
                    <li className='hoverName' onClick={() => navigate('/')}>마감임박</li>
                </ul>
            </div>

            {isOpen && (
                <div className='notification_box'>
                    <button className='close_notification' onClick={() => setIsOpen(false)}>X</button>
                    <div className='notification_top'>
                        {/* user id == aaaa의 이름과 알람 개수  */}
                        <h3> {UserInfo.find(user => user.userId === 'aaaa')?.userName || "알수없음"}  님 {alarms.filter(alarm => alarm.userId === 'aaaa').length}개의 알람이 있습니다.</h3>
                    </div>
                    <div className='notification_list'>
                        {alarms.filter(alarm => alarm.userId === 'aaaa').map((alarm) => (
                            <NotificationComponent key={alarm.id} alarms={alarm} onDelete={onDelete} />
                        ))}
                    </div>
                    <button className='deleteAll' onClick={() => setAlarms([])}>모두 읽음</button>
                </div>
            )}
        </div>
    );
}

export default Header;
