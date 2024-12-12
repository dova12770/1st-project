import '../css/Interest.css';
import '../header/HeaderCss.css'
import { useState } from 'react';
import InterestData from '../data/InterestData';
import InterestComponent from '../components/InterestComponent';
import AlarmData from '../data/AlarmData';
import AlarmComponent from '../components/AlarmComponent';
function InterestPage(){

    //관심목록을 저장할 useState 변수
    const [interest, setInterest] = useState(InterestData);

    //알림신청목록을 저장할 useState 변수
    const [alarm, setAlarm] = useState(AlarmData);

    // 좋아한 nav 클릭 상태 관리
    const [showLike, setShowLike] = useState(true);

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
                    <div className='title_body'> <h2>관심 프로젝트</h2> </div>
                    <div className='top_body'>
                        <div className='l_body' onClick={()=>{ setShowLike((showLike) => { 
                                setShowAlarm(false); //알림신청 초기화
                                return !showLike;}) }} 
                                style={{ fontWeight: showLike ? 'bold' : 'normal', color: showLike ? 'black' : 'gray' }}> 좋아한 {interest.filter(value => value.userId === 'aaaa').length}</div> {/* user id == aaaa 가 좋아한 부분 보이고 글씨 검정 진하게 */}
                        <div className='r_body' onClick={()=>{ setShowAlarm((showLike) => {
                                setShowLike(false);  //좋아한 초기화
                                return !showAlarm;}) }}
                                style={{ fontWeight: showAlarm ? 'bold' : 'normal', color: showAlarm ? 'black' : 'gray' }}> 알림신청 {alarm.filter(value => value.userId === 'aaaa').length}</div> {/* user id == aaaa 가 알림신청 부분 보이고 글씨 검정 진하게 */}
                    </div>
                    { //user id == aaaa 가 좋아한 부분 내용
                        showLike && (
                            <div className='main_body_like'>
                                {interest.filter(value => value.userId === 'aaaa').map( (value) => ( <InterestComponent interest={value} onDelete={onDelete}/> ))} {/* 반복 렌더링 */}
                            </div>
                        )
                    }
                    { //user id == aaaa 가 알림신청 부분 내용
                        showAlarm && (
                            <div className='main_body_alarm'>
                                {alarm.filter(value => value.userId === 'aaaa').map( (value) => ( <AlarmComponent alarm={value} onDelete2={onDelete2}/> ))} {/* 반복 렌더링 */}
                            </div>
                        )
                    }
                    
                </div>
            </div>

        </div>
    );

}
export default InterestPage;