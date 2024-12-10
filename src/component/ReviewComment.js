import { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../particularpage/Ptcrpg.css';

function ReviewComment({ item, index, datas }) {
    const fixedStarCount = 5 - index;

    // 현재 리뷰와 연결된 사용자 이름 가져오기
    const currentData = datas.find((data) => data.userCommentDT.includes(item)); // 현재 리뷰를 포함한 데이터 찾기
    const userName = currentData ? currentData.userNameDT[currentData.userCommentDT.indexOf(item)] : "익명";

    return (
        <div className="reviewContainer">
            <div style={{ paddingLeft:"30px", marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                {/* 사용자 이름 */}
                <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                    {userName}
                </div>

                {/* 별점 */}
                <div style={{ display: "flex", marginBottom: "5px" }}>
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            size="14"
                            style={{ color: i < fixedStarCount ? "gold" : "#ddd" }} // 고정된 별점 표시
                        />
                    ))}
                </div>

                {/* 리뷰 텍스트 */}
                <div>{item}</div>
            </div>
        </div>
    );
}

export default ReviewComment;