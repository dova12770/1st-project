import './MySettingCss.css'

function Account(){

    return(
        <div className="profContainer">
            <div className='profBox'>
                <p className="prof">이메일</p>
                <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
                <p className="prof">비밀번호</p>
                <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
                <p className="prof">카카오 계정 연동</p>
                <button className="my_btn" >연동</button>
            </div>
            <div className='profBox'>
                <p className="prof">페이스북 계정 연동</p>
                <button className="my_btn" >연동</button>
            </div>
            <div className='profBox'>
                <p className="prof">네이버 계정 연동</p>
                <button className="my_btn" >연동</button>
            </div>
            <div className='profBox'>
                <p className="prof">애플 계정 연동</p>
                <button className="my_btn" >연동</button>
            </div>
            <div className='profBox'>
                <p className="prof">회원탈퇴</p>
                <button className="my_btn" >탈퇴</button>
            </div>
        </div>
    )
}
export default Account;