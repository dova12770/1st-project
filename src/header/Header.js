import './HeaderCss.css'
import { useState,useEffect } from 'react'
import Category from './Category';
import { CgHeart } from "react-icons/cg";
import { CgBell } from "react-icons/cg";
import { CgList } from "react-icons/cg";
import { CgMicrosoft } from "react-icons/cg";
import NotificationData from '../data/NotificationData';
import NotificationComponent from '../components/NotificationComponent';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 임포트

function Header() {

    const [view,setView]= useState(false);
    const [menuOn,setMenuOn] = useState(false);

    //알람 정보
    const [alarms, setAlarms] = useState(NotificationData);

    // 알림창 상태
    const [isOpen, setIsOpen] = useState(false); 

    // useNavigate 훅을 사용하여 navigate 함수 가져오기
    const navigate = useNavigate();

    
    // 클릭된 알람을 제거
    const onDelete = (id) => { 
        const updatedAlarms = alarms.filter( (value) => value.id !== id); //삭제할 알람을 제외한 새로운 배열 생성
        setAlarms(updatedAlarms);
    };

    return (
        <div className = 'HContainer'>
            <div className='headerContainer'>
                <div className='PrTitle'>
                    <span className='Prism'>Prism</span>
                </div>
                <div className='logoRight'>
                    <div className='bell' onClick={ () => setIsOpen(!isOpen) }> <CgBell /> 알림</div>
                    <div className='bell'><CgHeart/>선호</div>
                    <div className='login_btn'>로그인/회원가입</div>
                </div>
            </div>

            <div className='Menubar'>
                <ul>
                    <li className='category' onMouseEnter={()=>{
                            setView(!view)
                        }} onMouseLeave={()=>{
                            setView(!view)
                        }}><CgList /> 카테고리
                        {view && <Category/>}
                    </li>
                    <li className='hoverName'>신규</li>
                    <li className='hoverName'>인기</li>
                    <li className='hoverName'>공개예정</li>
                    <li className='hoverName'>마감임박</li>
                </ul>
            </div>

            {/* 알림창 */}
            {  isOpen && (
                <div className='notification_box'>
                    <button className='close_notification' onClick={()=>{
                        setIsOpen(false);
                    }}>X</button>

                    <div className='notification_top'>
                        <h3>사용자 아이디 님 {alarms.filter( (alarms) => alarms.userId === 'aaaa' ).length}개의 알람이 있습니다.</h3> {/* userid가 aaaa인 alarm 개수 */}
                    </div>

                    <div className='notification_list'>
                        {alarms.filter( (alarms) => alarms.userId === 'aaaa' ).map( (alarms) => ( <NotificationComponent  alarms={alarms} onDelete={onDelete} /> ))} {/* userid가 aaaa인 alarm 반복 렌더링 */}
                    </div>
                    
                    <button className='deleteAll' onClick={()=>{
                        setAlarms([]); //모든 알람을 삭제 새로운 배열 생성
                    }}>모두 읽음</button>
                </div>
            )}

        </div>

    )

}

export default Header;