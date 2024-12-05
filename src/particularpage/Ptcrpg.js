import { useState, useEffect } from 'react';
import PtcrpgCom from '../component/PtcrpgCom';
import PtcrpgCom2 from '../component/PtcrpgCom2';

function Ptcrpg() {

    const getMainTainLikeCnt = () => Number(localStorage.getItem('likeCnt')) || 0;  // 좋아요버튼 공유버튼 새로고침해도 유지 시작
    const getMainTainShareCnt = () => Number(localStorage.getItem('shareCnt')) || 0;
    const getMainTainLiked = () => localStorage.getItem('liked') === 'true' || false;

    const [likeCnt, setLikeCnt] = useState(getMainTainLikeCnt);  //하트카운트
    const [shareCnt, setShareCnt] = useState(getMainTainShareCnt); //공유카운트
    const [liked, setLiked] = useState(getMainTainLiked); //하트 색상 변경
    const [ppTitle, setPpTitle] = useState(['딸기콩포트']); // 상세페이지 최상단 제목
    const [converge, setConverge] = useState([100]);     // 모인금액
    const [cvgPersent, setCvgPersent] = useState([50]);  // 모인금액 퍼센트 -------------- 모인금액 / 목표금액 계산해야함
    const [remaindeTime, setRemaindeTime] = useState([24]);  // 남은시간 (일 기준)
    const [sponser, setSponser] = useState([1]);              // 후원자 명수
    const [targetAmount, setTargetAmount] = useState([200]);   // 목표금액
    const [fundDate1, setFundDate1] = useState(['2024.11.01']);  // 펀딩 시작일
    const [fundDate2, setFundDate2] = useState(['2024.12.01']);  // 펀딩 종료일
    const [payday, setPayday] = useState(['2024.12.10']);   // 목표금액달성시 결제시작일
    const [goDelivery, setGoDelivery] = useState(['2024.12.20']); // 예상 발송 시작일

    const [userPrice, setUserPrice] = useState(['10,000','20,000','30,000','40,000','50,000']);  // 상품설명오른쪽에 상세옵션 선택창 가격배열
    const [userPriceText, setUserPriceText] = useState(['만원 패키지', '이만원 패키지', '삼만원 패키지', '사만원 패키지', '오만원 패키지']);
   



    const toggleLike = () => {
        setLiked(!liked);
        setLikeCnt(liked ? likeCnt - 1 : likeCnt + 1); // 좋아요 상태에 따라 카운트 증가/감소
    };

    useEffect(() => { localStorage.setItem('likeCnt', likeCnt); }, [likeCnt]);
    useEffect(() => { localStorage.setItem('shareCnt', shareCnt); }, [shareCnt]);
    useEffect(() => { localStorage.setItem('liked', liked); }, [liked]);            // 좋아요버튼 공유버튼 새로고침해도 유지 끝

    let [cntImg, setCntImg] = useState(1); // 다음,이전 버튼 누를때 이미지 배열 인덱스 변경
    const images = [   // intro 박스 이미지 배열
        process.env.PUBLIC_URL + '/images/test001.jpg',
        process.env.PUBLIC_URL + '/images/test002.jpg',
        process.env.PUBLIC_URL + '/images/test003.jpg' // 필요한 만큼 이미지 추가
    ];

    let [cntImg2, setCntImg2] = useState(1);
    const userImages = [ // 상품설명박스 이미지 배열
        process.env.PUBLIC_URL + '/images/test001.jpg',
        process.env.PUBLIC_URL + '/images/test002.jpg',
        process.env.PUBLIC_URL + '/images/test003.jpg'
    ];


    return (
        <div>
            <PtcrpgCom
                likeCnt={likeCnt} setLikeCnt={setLikeCnt}
                shareCnt={shareCnt} setShareCnt={setShareCnt}
                liked={liked} setLiked={setLiked}
                ppTitle={ppTitle} setPpTitle={setPpTitle}
                converge={converge} setConverge={setConverge}
                cvgPersent={cvgPersent} setCvgPersent={setCvgPersent}
                remaindeTime={remaindeTime} setRemaindeTime={setRemaindeTime}
                sponser={sponser} setSponser={setSponser}
                targetAmount={targetAmount} setTargetAmount={setTargetAmount}
                fundDate1={fundDate1} setFundDate1={setFundDate1}
                fundDate2={fundDate2} setFundDate2={setFundDate2}
                payday={payday} setPayday={setPayday}
                goDelivery={goDelivery} setGoDelivery={setGoDelivery}
                cntImg={cntImg} setCntImg={setCntImg}
                images={images}
                toggleLike={toggleLike}
            />
            <PtcrpgCom2 userImages={userImages} userPrice={userPrice} userPriceText={userPriceText} />
        </div>
    );
}



export default Ptcrpg;