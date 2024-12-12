import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ptcrpg from "../particularpage/Ptcrpg";
import UpdatePage from "../particularpage/pages/UpdatePage";
import CommuPage from "../particularpage/pages/CommuPage";
import ReviewPage from "../particularpage/pages/ReviewPage";
import Datas from "../particularpage/data/Datas";


function PtcrTotal() {
    return (

        <>
            <Routes>
                <Route path="/" element={<Ptcrpg />} />
                <Route path='/planpage/:id' element={<Ptcrpg datas={Datas} />} />
                <Route path='/updatepage' element={<UpdatePage />} />
                <Route path='/commupage' element={<CommuPage />} />
                <Route path='/reviewpage' element={<ReviewPage />} />
            </Routes>
        </>
    )
}


export default PtcrTotal;