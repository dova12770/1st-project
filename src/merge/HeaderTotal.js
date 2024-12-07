import MainPage from "../pages/MainPage";
import InterestPage from "../pages/InterestPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function HeaderTotal() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} /> {/* 테스트용 메인 */}
                <Route path="/interest" element={<InterestPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
    
}


export default HeaderTotal;