import '../css/Interest.css';
import '../header/HeaderCss.css'
import { useState } from 'react';
import InterestData from '../data/InterestData';
import InterestComponent from '../components/InterestComponent';
import AlarmData from '../data/AlarmData';
import AlarmComponent from '../components/AlarmComponent';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function InterestPage(){

    //관심목록을 저장할 useState 변수
    const [interest, setInterest] = useState(InterestData);

    //알림신청목록을 저장할 useState 변수
    const [alarm, setAlarm] = useState(AlarmData);

    // 좋아한 nav 클릭 상태 관리
    const [showLike, setShowLike] = useState(false);

    // 알람신청 nav 클릭 상태 관리
    const [showAlarm, setShowAlarm] = useState(false);

    //관심목록을 지울 함수
    const onDelete = (id) =>{
        const deleteHeart = interest.filter( (value) => value.id !== id );
        setInterest(deleteHeart);
    }
    const onDelete2 = (id) =>{
        const deleteAlarm = alarm.filter( (value) => value.id !== id );
        setAlarm(deleteAlarm);
    }
    

    return(
        <div>
            <div className='interest_container'>
                <div className='interest_body'>
                    <div className='title_body'> <h1>관심 프로젝트</h1> </div>
                    <div className='top_body'>
                        <div className='l_body' onClick={()=>{ setShowLike((showLike) => { 
                                setShowAlarm(false); //알림신청 초기화
                                return !showLike;}) }}> 좋아한 {interest.length}</div> {/* 좋아한 부분 보이기 */}
                        <div className='r_body' onClick={()=>{ setShowAlarm((showAlarm) => {
                                setShowLike(false);  //좋아한 초기화
                                return !showAlarm;}) }}> 알림신청 {alarm.length}</div> {/* 알림신청 부분 보이기 */}
                    </div>
                    { //좋아한 부분 내용
                        showLike && (
                            <div className='main_body_like'>
                                {interest.map( (interest) => ( <InterestComponent interest={interest} onDelete={onDelete}/> ))} {/* 반복 렌더링 */}
                            </div>
                        )
                    }
                    { //알림신청 부분 내용
                        showAlarm && (
                            <div className='main_body_alarm'>
                                {alarm.map( (alarm) => ( <AlarmComponent alarm={alarm} onDelete2={onDelete2}/> ))} {/* 반복 렌더링 */}
                            </div>
                        )
                    }
                    
                </div>
            </div>

        </div>
    );

}
export default InterestPage;