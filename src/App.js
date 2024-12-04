import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ptcrpg from './particularpage/Ptcrpg';
import PlanPage from './particularpage/pages/PlanPage';
import UpdatePage from "./particularpage/pages/UpdatePage";
import CommuPage from './particularpage/pages/CommuPage';
import ReviewPage from './particularpage/pages/ReviewPage';
import Footer from "./footer/Footer";
import TopDown from './topdown/TopDown';
import Header from './header/Header';


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Ptcrpg />} />
          <Route path='/planpage' element={<Ptcrpg />} />
          <Route path='/updatepage' element={<UpdatePage />} />
          <Route path='/commupage' element={<CommuPage />} />
          <Route path='/reviewpage' element={<ReviewPage />} />
        </Routes>
      </Router>
      <TopDown />
      <Footer />
    </div>
  )
}

export default App;
