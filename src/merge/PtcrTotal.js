import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import TopDown from "../topdown/TopDown";
import MainFooter from "../footer/MainFooter";
import Ptcrpg from "../particularpage/Ptcrpg";
import PlanPage from "../particularpage/pages/PlanPage";
import UpdatePage from "../particularpage/pages/UpdatePage";
import CommuPage from "../particularpage/pages/CommuPage";
import ReviewPage from "../particularpage/pages/ReviewPage";


function PtcrTotal() {
    return (

            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Ptcrpg />} />
                        <Route path='/planpage' element={<Ptcrpg />} />
                        <Route path='/updatepage' element={<UpdatePage />} />
                        <Route path='/commupage' element={<CommuPage />} />
                        <Route path='/reviewpage' element={<ReviewPage />} />
                    </Routes>
                    <TopDown />
                    <MainFooter />

                </div>
            </Router>
    )
}


export default PtcrTotal;