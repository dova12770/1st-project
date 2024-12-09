
import { useNavigate , useLocation } from 'react-router-dom';


function NavigateComp(){

    //UserInfo 이름 받아오기

    //useNavigate로 navigate 함수 정의
    const navigate = useNavigate();
    const location = useLocation();

    //signupPage에서 전달된 userList 받기
    const userList = location.state?.userList || [];

    //입력받은 id, pw가  userList에 있는지 확인
    const matchedUser = userList.find(
        (user) => user.userId 
    );

    // matchedUser가 없는 경우 기본값 처리
    if (!matchedUser) {
        return (
            <div className='MyPage_Container'>
                <p>사용자 정보를 찾을 수 없습니다. 다시 로그인해주세요.</p>
                <button onClick={() => navigate('/login')}>로그인 페이지로 이동</button>
            </div>
        );
    }

    //user정보 MyPage로 전달
    <MyPage UserInfo= {UserInfo} />;

        // 로그인 후 MainPage로 이동하며 userList 전달
    navigate('/mypage', { state: { userList: [...userList] } }); 

    //return(<h1 onClick={ ()=>navigate('/mypage')}>{matchedUser.userName}</h1> {/* 마이페이지 이동 임시버튼 */});

}

export default NavigateComp;