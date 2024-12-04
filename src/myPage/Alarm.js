import './MySettingCss.css'

function Alarm() {

    return (

        <div className="profContainer">
            <div className='profBox'>
                <p className="prof">메세지</p>
                <div>
                    <input type='checkbox' />새 메시지 알림을 이메일로 수신합니다.
                </div>
            </div>
            <div className='profBox'>
                <p className="prof">프로젝트 업데이트</p>
                <div>
                    <input type='checkbox' />프로젝트 업데이트 알림을 이메일로 수신합니다.
                </div>
            </div>
            <div className='profBox'>
                <p className="prof">알림신청 프로젝트</p>
                <div>
                    <input type='checkbox' />알림신청 프로젝트 알림을 이메일로 수신합니다.
                </div>
            </div>
            <div className='profBox'>
                <p className="prof">좋아한 프로젝트</p>
                <div>
                    <input type='checkbox' />좋아한 프로젝트 마감 알림을 이메일로 수신합니다.
                </div>
            </div>
            <div className='profBox'>
                <p className="prof">팔로우</p>
                <div>
                    <input type='checkbox' />팔로우한 판매자의 신규 프로젝트 알림을 이메일로 수신합니다.
                </div>
            </div>
            <div className='profBox'>
                <p className="prof">마케팅 메일</p>
                <div>
                    <input type='checkbox' />프리즘 추천 프로젝트 알림을 이메일로 수신하지 않습니다.
                </div>
            </div>
        </div>

    )
}

export default Alarm;