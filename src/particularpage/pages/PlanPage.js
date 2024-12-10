import { useLocation, useNavigate, useParams } from "react-router-dom";


function PlanPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state?.id;
    return (
        <>
            <div className='ptcrNav'>  {/* 네비바 */}
                <div onClick={() => navigate('/planpage/' + id, { state: { id: id } })}>프로젝트 계획</div>
                <div onClick={() => navigate('/updatepage/' + id, { state: { id: id } })}>업데이트</div>
                <div onClick={() => navigate('/commupage/' + id, { state: { id: id } })}>커뮤니티</div>
                <div onClick={() => navigate('/reviewpage/' + id, { state: { id: id } })}>후기</div>
            </div>
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>프로젝트계획 페이지입니다.</h1>
        </>
    )
}

export default PlanPage;