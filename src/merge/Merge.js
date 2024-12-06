import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Merge.css';
import Body from '../pages/Body';
import MyPage from '../myPage/MyPage';
import MySetting from '../myPage/MySetting';
function Merge() {
    return (
        <div className="merge-container">
            <Header />
            <MyPage />
            {/* <MySetting/> */}
            {/* <Body/> */}
            <Footer />
        </div>
    );
}

export default Merge;
