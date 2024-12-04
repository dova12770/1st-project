import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ptcrpg from './particularpage/Ptcrpg';
import PlanPage from './pages/PlanPage';
import UpdatePage from './pages/UpdatePage';
import CommuPage from './pages/CommuPage';
import ReviewPage from './pages/ReviewPage';
import Footer from "./footer/Footer";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Ptcrpg />} />
          <Route path='/planpage' element={<Ptcrpg />} />
          <Route path='/updatepage' element={<UpdatePage />} />
          <Route path='/commupage' element={<CommuPage />} />
          <Route path='/reviewpage' element={<ReviewPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
