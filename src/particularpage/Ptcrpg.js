import { useState, useEffect } from 'react';
import PtcrpgComTop from '../component/PtcrpgComTop';
import PtcrpgComBottom from '../component/PtcrpgComBottom';
import Datas from './data/Datas';
import { useParams } from 'react-router-dom';

function Ptcrpg() {

    let { id } = useParams();
    console.log(id);

    const [datasDT, setDatasDT] = useState(Datas);
    const data = datasDT.filter(data => data.idDT === id); //연결된 컴포넌트에 아이디값만 변경하면 사진,내용 자동으로 바뀜


    const getMainTainLikeCnt = () => Number(localStorage.getItem('likeCnt')) || 0;  // 좋아요버튼 공유버튼 새로고침해도 유지 시작
    const getMainTainShareCnt = () => Number(localStorage.getItem('shareCnt')) || 0;
    const getMainTainLiked = () => localStorage.getItem('liked') === 'true' || false;

    const [likeCnt, setLikeCnt] = useState(getMainTainLikeCnt);  //하트카운트
    const [shareCnt, setShareCnt] = useState(getMainTainShareCnt); //공유카운트
    const [liked, setLiked] = useState(getMainTainLiked); //하트 색상 변경

    const toggleLike = () => {
        setLiked(!liked);
        setLikeCnt(liked ? likeCnt - 1 : likeCnt + 1); // 좋아요 상태에 따라 카운트 증가/감소
    };

    useEffect(() => { localStorage.setItem('likeCnt', likeCnt); }, [likeCnt]);
    useEffect(() => { localStorage.setItem('shareCnt', shareCnt); }, [shareCnt]);
    useEffect(() => { localStorage.setItem('liked', liked); }, [liked]);            // 좋아요버튼 공유버튼 새로고침해도 유지 끝

    let [cntImg, setCntImg] = useState(0); // 다음,이전 버튼 누를때 이미지 배열 인덱스 변경

    let [cntImg2, setCntImg2] = useState(0);



    return (
        <div>
            <PtcrpgComTop
                likeCnt={likeCnt} setLikeCnt={setLikeCnt}
                shareCnt={shareCnt} setShareCnt={setShareCnt}
                liked={liked} setLiked={setLiked}
                toggleLike={toggleLike}
                cntImg={cntImg} setCntImg={setCntImg}
                cntImg2={cntImg2} setCntImg2={setCntImg2}
                datasDT={datasDT}
                data={data}
            />
            <PtcrpgComBottom
                datasDT={datasDT}
                data={data}
            />
        </div>
    );
}



export default Ptcrpg;