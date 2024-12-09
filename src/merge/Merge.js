import React from 'react';
import Header from "../header/Header";
import './Merge.css';
import Body from '../pages/Body';
import MyPage from '../myPage/MyPage';
import MySetting from '../myPage/MySetting';
import Ptcrpg from "../particularpage/Ptcrpg";
import UpdatePage from "../particularpage/pages/UpdatePage";
import CommuPage from "../particularpage/pages/CommuPage";
import ReviewPage from "../particularpage/pages/ReviewPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFooter from '../footer/MainFooter';
import HeaderTotal from './HeaderTotal';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import InterestPage from '../pages/InterestPage';
import { useState } from 'react';
import Rank from '../pages/Rank';
import PlanPage from '../particularpage/pages/PlanPage';
import ScrollToTop from './ScrollToTop';


function Merge() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <ScrollToTop />  {/* 화면 이동시에 스크롤 맨위로 가게하는 기능 컴포넌트 */}
            <div className="merge-container">
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Routes>
                    <Route path='/' element={<Body />} />
                    <Route path='/ptcr' element={<Ptcrpg />} />
                    <Route path='/planpage' element={<Ptcrpg />} />
                    <Route path='/updatepage' element={<UpdatePage />} />
                    <Route path='/commupage' element={<CommuPage />} />
                    <Route path='/reviewpage' element={<ReviewPage />} />                
                    <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} /> {/* 로그인 */}
                    <Route path="/signup" element={<SignupPage />} /> {/* 회원가입 */}
                    <Route path='/mypage' element={<MyPage />} /> {/* 마이페이지 */}
                    <Route path='/mysetting' element={<MySetting />} />
                    <Route path="/interest" element={<InterestPage />} /> {/* 선호 */}
                    <Route path='/rank' element={< Rank/>} /> {/* 인기 */}
                    {/*<Route path='/' element={< />} /> */} {/* 신규 */}
                    {/*<Route path='/' element={< />} /> */} {/* 공개예정 */}
                    {/*<Route path='/' element={< />} /> */} {/* 마감임박 */}
                </Routes>
                <MainFooter />
            </div>
        </Router>
    );
}

export default Merge;
