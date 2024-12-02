import './MyPageCss.css'
import userImg from '../image/userImg.png'
import { GoGear } from "react-icons/go";
import { useState } from 'react';
import MyPageCategory from './MyPageCategory'
function MyPage(){

    const [underLine,setUnderLine] = useState(false);
    return (
        <div className='MyPage_Container'>
            <div className='Prof_Container'>
                <div className='Avatar'>
                    <img src={userImg} alt='유저기본이미지' height='100px' width='100px'/>
                </div>
                <div className='UserName'>김도현 
                <div className='OptionGear'><GoGear /></div>
                
                </div>
                <div className='Prof_button' onClick={()=>{

                }}>프로필 변경</div>
            </div>
            <div className='MyCategory'>
                <ul>
                    <MyPageCategory underLine={underLine} setUnderLine={setUnderLine}/>
                    <li>후원한 프로젝트</li>
                    <li>작성한 후기</li>
                    <li>팔로워</li>
                    <li>팔로잉</li>
                </ul>
            </div>
        </div>
    )
}

export default MyPage;