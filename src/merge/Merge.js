import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Merge.css';
import Body from '../pages/Body';
import MyPage from '../myPage/MyPage';
import MySetting from '../myPage/MySetting';
import PtcrTotal from './PtcrTotal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFooter from '../footer/MainFooter';
import HeaderTotal from './HeaderTotal';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import InterestPage from '../pages/InterestPage';
import Rank from '../pages/Rank';

function Merge() {
    return (
        <Router>
            <div className="merge-container">
                <Header />
                <Routes>
                    <Route path='/' element={<Body />} />
                    <Route path='/ptcr' element={<PtcrTotal />} />                   
                    <Route path='/login' element={<LoginPage />} /> {/* 로그인 */}
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
