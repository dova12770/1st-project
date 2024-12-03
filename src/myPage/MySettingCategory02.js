import './MySettingCss.css'

function MySettingCategory02({prof}) {

    return (
        <div className="profContainer">
            <div className='profBox'>
            <p className="prof">프로필사진</p>
            <button className="my_btn" onClick={()=>{
            }}>변경</button>
            </div>
            <div className='profBox'>
            <p className="prof">이름</p>
            <span>{prof.name}</span>
            <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
            <p className="prof">사용자이름(url)</p>
            <span>{prof.url}</span>
            <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
            <p className="prof">소개</p>
            <span>{prof.introduction}</span>
            <button className="my_btn" >변경</button>
            </div>
            <div className='profBox'>
            <p className="prof">프라이버시</p>
            <div>
            <input type='checkbox'/>후원한 프로젝트 목록을 공개합니다.
            </div>
            </div>
        </div>
        
    )
}

export default MySettingCategory02;

