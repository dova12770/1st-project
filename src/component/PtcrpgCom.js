import React from "react";
import { Link } from "react-router-dom";
import '../particularpage/Ptcrpg.css';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


function PtcrpgCom(props){
    return(
        <div className="outerContainer">
            <div className='container'>
                <div className='mainTitle'>
                    <h1>{props.ppTitle}</h1>
                </div>
                <div className='intro'>
                    <div className='introLeft'>
                        <img src={props.images[props.cntImg - 1]} style={{ width: '100%', height: '100%' }} />
                        <div className='leftButton' onClick={() => {  // 이전사진
                            if (props.cntImg > 1) {
                                props.setCntImg(props.cntImg - 1);
                            }
                        }}><IoIosArrowDropleft style={{ background: 'none' }} /></div>
                        <div className='rightButton' onClick={() => {  // 다음사진
                            if (props.cntImg < props.images.length) {
                                props.setCntImg(props.cntImg + 1);
                            }
                        }}><IoIosArrowDropright style={{ background: 'none' }} /></div>
                    </div>
                    <div className='introRight'>
                        <div className='introRight1'>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>모인금액</p></div>
                                <div><p style={{ fontSize: '25px' }}>{props.converge}<span style={{ fontSize: '10px' }}> 원</span><span style={{ fontSize: '15px' }}> {props.cvgPercent}%</span></p></div>
                            </div>
                            <br></br>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>남은시간</p></div>
                                <div><p style={{ fontSize: '25px' }}>{props.remaindeTime}<span style={{ fontSize: '10px' }}> 일</span></p></div>
                            </div>
                            <br></br>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>후원자</p></div>
                                <div><p style={{ fontSize: '25px' }}>{props.sponser}<span style={{ fontSize: '10px' }}> 명</span></p></div>
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
                                    <p>{props.targetAmount}원</p>
                                    <p>{props.fundDate1}일 ~ {props.fundDate2}일</p>
                                    <p>목표금액 달성시 {props.payday}에 결제 진행</p>
                                    <p>{props.goDelivery}</p>
                                </div>
                            </div>
                            <div className='introRight2Bottom'>
                                <div>{
                                    props.liked ? (<IoIosHeart cursor="pointer" color="red" onClick={props.toggleLike} />) : (<IoIosHeartEmpty cursor="pointer" onClick={props.toggleLike} />) 
                                }<span style={{ fontSize: '12px' }}>{props.likeCnt}</span></div>        {/* 하트 누르면 빨간색으로 변경 카운트1 다시누르면 빈하트변경 카운트-1 */}
                                <div><CiShare2 cursor={'pointer'} onClick={() => { props.setShareCnt(props.shareCnt + 1) }} /><span style={{ fontSize: '12px' }}>{props.shareCnt}</span></div>
                                <div><button className='jumunBtn'>예약 주문하기</button></div>           {/* 공유 누르면 카운트+1 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PtcrpgCom;