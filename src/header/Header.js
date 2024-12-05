import './HeaderCss.css'
import { useState,useEffect } from 'react'
import Category from './Category';
import { CgHeart } from "react-icons/cg";
import { CgBell } from "react-icons/cg";
import { CgList } from "react-icons/cg";
import { CgMicrosoft } from "react-icons/cg";
function Header() {

    const [view,setView]= useState(false);
    const [menuOn,setMenuOn] = useState(false);

    return (
        <div className = 'HContainer'>
            <div className='headerContainer'>
                <div className='PrTitle'>
                    <span className='Prism'>Prism</span>
                </div>
                <div className='logoRight'>
                    <div className='bell'><CgBell />알림</div>
                    <div className='bell'><CgHeart />선호</div>
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
        </div>

    )

}

export default Header;