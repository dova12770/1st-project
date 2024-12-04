// 푸터페이지 컴포넌트화

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ptcrpg from "../particularpage/Ptcrpg";
import PlanPage from "../particularpage/pages/PlanPage";
import UpdatePage from "../particularpage/pages/UpdatePage";
import CommuPage from "../particularpage/pages/CommuPage";
import ReviewPage from "../particularpage/pages/ReviewPage";
import Footer from "./Footer";
import TopDown from "../topdown/TopDown";
import Merge from "../merge/Merge";
import Header from "../header/Header";
import MainPtcrpg from "../particularpage/MainPtcrpg";


function MainFooter(){
    return(
        <Footer />
    )
}

export default MainFooter;