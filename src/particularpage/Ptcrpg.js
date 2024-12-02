import './Ptcrpg.css';
import { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

function Ptcrpg() {

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

    let [proImg, setProImg] = useState(1); // 다음,이전 버튼 누를때 이미지 배열 인덱스 변경
    const images = [   // 이미지 배열
        process.env.PUBLIC_URL + '/images/test001.jpg',
        process.env.PUBLIC_URL + '/images/test002.jpg',
        process.env.PUBLIC_URL + '/images/test003.jpg' // 필요한 만큼 이미지 추가
    ];


    return (
        <>
            <div className='container'>
                <div className='mainTitle'>
                    <h1>제목</h1>
                </div>
                <div className='intro'>
                    <div className='introLeft'>
                        <img src={images[proImg - 1]} style={{ width: '100%', height: '100%' }} />
                        <div className='leftButton' onClick={() => {  // 이전사진
                            if (proImg > 1) {
                                setProImg(proImg - 1);
                            }
                        }}><IoIosArrowDropleft style={{ background: 'none' }} /></div>
                        <div className='rightButton' onClick={() => {  // 다음사진
                            if (proImg < images.length) {
                                setProImg(proImg + 1);
                            }
                        }}><IoIosArrowDropright style={{ background: 'none' }} /></div>
                    </div>
                    <div className='introRight'>
                        <div className='introRight1'>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>모인금액</p></div>
                                <div><p style={{ fontSize: '25px' }}>00000<span style={{ fontSize: '10px' }}> 원</span><span style={{ fontSize: '15px' }}> 000%</span></p></div>
                            </div>
                            <br></br>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>남은시간</p></div>
                                <div><p style={{ fontSize: '25px' }}>00<span style={{ fontSize: '10px' }}> 일</span></p></div>
                            </div>
                            <br></br>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>후원자</p></div>
                                <div><p style={{ fontSize: '25px' }}>00<span style={{ fontSize: '10px' }}> 명</span></p></div>
                            </div>
                        </div>
                        <div className='introRight2'>
                            <div className='introRight2Top'>
                                <div>
                                    <p>목표금액</p>
                                    <p>펀딩 기간</p>
                                    <p>결제</p>
                                    <p>예상 발송 시작일</p>
                                </div>
                                <div>
                                    <p>00000원</p>
                                    <p>0000일 ~ 0000일</p>
                                    <p>목표금액 달성시 0000에 결제 진행</p>
                                    <p>0000.00.00</p>
                                </div>
                            </div>
                            <div className='introRight2Bottom'>
                                <div>{
                                    liked ? (<IoIosHeart cursor="pointer" color="red" onClick={toggleLike} />) : (<IoIosHeartEmpty cursor="pointer" onClick={toggleLike} />)
                                }<span style={{ fontSize: '12px' }}>{likeCnt}</span></div>
                                <div><CiShare2 cursor={'pointer'} onClick={() => { setShareCnt(shareCnt + 1) }} /><span style={{ fontSize: '12px' }}>{shareCnt}</span></div>
                                <div><button className='jumunBtn'>예약 주문하기</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Ptcrpg;