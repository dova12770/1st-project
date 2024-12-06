import './App.css';
import Body from './pages/Body';
import Advertisement from './pages/Advertisement';
import Rank from './pages/Rank';
import More from './pages/More';
import Slide from './components/Slide';
import SideChat from './components/SideChat/SideChat';
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
import MyPage from './myPage/MyPage';
import MySetting from './myPage/MySetting';
import InterestPage from './pages/InterestPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

  //return <Merge/>;
function App() {

  // return <Body/>
  return <Merge/>
  //return <InterestPage/>
  // return <Advertisement/>
  // return <Rank/>
  // return <More/>
  // return <Slide/>
  // return<SideChat/>
  // return <Footer />;
  //return <TopDown/>;
  
  // return <Header />
  // return <MainPtcrpg />
  // return <TopDown />
  // return <MainFooter />
  // return<MyPage/>
  // return<MySetting/>

  //return <SignupPage />;

  //정민 app.js 
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<MainPage />} /> 
  //       <Route path="/interest" element={<InterestPage/>}/>
  //       <Route path="/signup" element={<SignupPage />} />
  //       <Route path="/login" element={<LoginPage />} />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
