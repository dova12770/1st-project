import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Merge.css';
import Body from '../pages/Body';
import MyPage from '../myPage/MyPage';
import MySetting from '../myPage/MySetting';
import PtcrTotal from './PtcrTotal';
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
import PlanPage from '../particularpage/pages/PlanPage';
import ScrollToTop from './ScrollToTop';


function Merge() {
    return (
        <Router>
            <ScrollToTop />  {/* 화면 이동시에 스크롤 맨위로 가게하는 기능 컴포넌트 */}
            <div className="merge-container">
                <Header />
                <Routes>
                    <Route path='/' element={<Body />} />
                    <Route path='/ptcr' element={<Ptcrpg />} />
                    <Route path='/planpage' element={<Ptcrpg />} />
                    <Route path='/updatepage' element={<UpdatePage />} />
                    <Route path='/commupage' element={<CommuPage />} />
                    <Route path='/reviewpage' element={<ReviewPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/mypage' element={<MyPage />} />
                    <Route path='/mysetting' element={<MySetting />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/interest' element={< InterestPage />} />
                    {/* <PtcrTotal />
                                <HeaderTotal />
                                <MyPage />
                                <MySetting />
                                <Body /> */}
                </Routes>
                <MainFooter />
            </div>
        </Router>
    );
}

export default Merge;
