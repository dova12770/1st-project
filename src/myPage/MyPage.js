import '../css/MyPageCss.css';
import userImg from '../image/userImg.png';
import { GoGear } from "react-icons/go";
import { useState } from 'react';
import MyPageCategory from './MyPageCategory';
import { useNavigate } from 'react-router-dom';

function MyPage() {
    const CateName = ['프로필', '후원한 프로젝트', '작성후기', '팔로워', '팔로잉'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();


    return (
        <div className='MyPage_Container'>
            <div className='Prof_Container'>
                <div className='Avatar'>
                    <img src={userImg} alt='유저기본이미지' height='100px' width='100px' />
                </div>
                <div className='UserName'>김도현
                    <div className='OptionGear' onClick={() => navigate('/MySetting')}><GoGear /></div>
                </div>
                <div className='Prof_button' onClick={() => navigate('/MySetting')}>
                    프로필 변경
                </div>
            </div>
            <div className='MyCategory'>
                <ul>
                    {CateName.map((item, index) => (
                        <MyPageCategory
                            key={index}
                            name={item}
                            index={index}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                        />
                    ))}
                </ul>
            </div>
            <div className='MyPage_Content'>
                <p>등록된 {CateName[selectedIndex]}이(가) 없습니다</p>
            </div>
        </div>
    );
}

export default MyPage;