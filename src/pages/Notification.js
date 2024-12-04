import { useState } from 'react';
import '../css/Notification.css';
import NotificationData from '../data/NotificationData';
import NotificationComponent from '../components/NotificationComponent';


function Notification(){

    //알람 정보
    const [alarms, setAlarms] = useState(NotificationData);

    // 알림창 상태
    const [isOpen, setIsOpen] = useState(false); 

    
    // 클릭된 알람을 제거
    const onDelete = (id) => { 
        const updatedAlarms = alarms.filter( (value) => value.id !== id); //삭제할 알람을 제외한 새로운 배열 생성
        setAlarms(updatedAlarms);
    };

    return(
        <div>

            <div className='icon' onClick={()=>{
                setIsOpen(!isOpen);
            }}> 💡 </div> 

            {/* 알림창 */}
            {   isOpen && (
                <div className='alarm_box'>
                    <button className='close_alarm' onClick={()=>{
                        setIsOpen(!isOpen);
                    }}>X</button>

                    <div className='alarm_top'>
                        <h3>사용자 아이디 님 {alarms.filter( (alarms) => alarms.userId === 'aaaa' ).length}개의 알람이 있습니다.</h3> {/* userid가 aaaa인 alarm 개수 */}
                    </div>

                    <div className='alarm-list'>
                        {alarms.filter( (alarms) => alarms.userId === 'aaaa' ).map( (alarms) => ( <NotificationComponent  alarms={alarms} onDelete={onDelete} /> ))} {/* userid가 aaaa인 alarm 반복 렌더링 */}
                    </div>
                    
                    <button className='deleteAll' onClick={()=>{
                        setAlarms([]); //모든 알람을 삭제 새로운 배열 생성
                    }}>모두 읽음</button>
                </div>
            )}

        </div>
    );
}
export default Notification;