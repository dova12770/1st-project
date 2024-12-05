import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ptcrpg from './particularpage/Ptcrpg';
import PlanPage from './particularpage/pages/PlanPage';
import UpdatePage from "./particularpage/pages/UpdatePage";
import CommuPage from './particularpage/pages/CommuPage';
import ReviewPage from './particularpage/pages/ReviewPage';
import Footer from "./footer/Footer";
import TopDown from "./topdown/TopDown";
import Merge from './merge/Merge';
import Header from "./header/Header";
import MainPtcrpg from "./particularpage/MainPtcrpg";
import MainFooter from "./footer/MainFooter";
import PtcrTotal from "./merge/PtcrTotal";

  

  //return <Merge/>;
function App() {
  return (
    <div>
      <PtcrTotal/>
    </div>
  )
}

export default App;
