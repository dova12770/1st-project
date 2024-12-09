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
import { useState } from 'react';

function Merge() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <div className="merge-container">
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Routes>
                    <Route path='/' element={<Body />} />
                    <Route path='/ptcr' element={<PtcrTotal />} />                   
                    <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path='/mypage' element={<MyPage />} />
                    <Route path='/mysetting' element={<MySetting />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/interest' element={< InterestPage/>} />
                </Routes>
                <MainFooter />
            </div>
        </Router>
    );
}

export default Merge;
