import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReviewComment from "../../component/ReviewComment";
import { useState, useEffect } from "react";
import Datas from "../data/Datas";


function ReviewPage() {
    const navigate = useNavigate();
    const [userComment, setUserComment] = useState(Datas[0].userCommentDT); // 리뷰
    console.log(userComment)

    useEffect(() => { // 리뷰
        fetch('/data/userInfoData.json')
            .then(res => res.json())
            .then(Datas => setUserComment(Datas));
    }, []);

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
            {
                userComment.map((item, index) => (
                    <ReviewComment item={item} index={index} datas={Datas} />
                ))
            }
        </>
    )
}

export default ReviewPage;