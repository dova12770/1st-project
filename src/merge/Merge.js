import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Merge.css';
import Body from '../pages/Body';

function Merge() {
    return (
        <div className="merge-container">
            <Header />
            <Body/>
            <Footer />
        </div>
    );
}

export default Merge;
