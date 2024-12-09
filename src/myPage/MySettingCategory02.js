import '../css/MySettingCss.css';


function MySettingCategory02({ prof }) {

    return (
        <div className="profContainer">
            <div className='profBox'>
                <p className="prof">프로필사진</p>
                <button className="my_btn" onClick={() => {
                }}>변경</button>
            </div>
            <div className='profBox'>
                <div>
                <p className="prof">이름</p>
                <div>{prof[0].userName}</div>
                </div>
                <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
                <div>
                <p className="prof">사용자이름(url)</p>
                <span>{prof[0].url}</span>
                </div>
                <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
                <div className='proBoxFirst'>
                <p className="prof">소개</p>
                <span>{prof[0].introduction}</span>
                </div>
                <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
                <p className="prof">프라이버시</p>
                <div>
                    <input type='checkbox' />후원한 프로젝트 목록을 공개합니다.
                </div>
            </div>
        </div>

    )
}

export default MySettingCategory02;

