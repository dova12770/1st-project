import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Merge.css';
import Body from '../pages/Body';
import MyPage from '../myPage/MyPage';
import MySetting from '../myPage/MySetting';
import PtcrTotal from './PtcrTotal';
import { BrowserRouter } from 'react-router-dom';
import MainFooter from '../footer/MainFooter';
import HeaderTotal from './HeaderTotal';
function Merge() {
    return (
        <BrowserRouter>
        <div className="merge-container">
            <Header />
            <PtcrTotal />
            <HeaderTotal />
            <MyPage />
            <MySetting />
            <Body />
            <MainFooter />
        </div>
        </BrowserRouter>
    );
}

export default Merge;
