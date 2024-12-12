import React from "react";
import '../particularpage/Ptcrpg.css';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import dayjs from 'dayjs';


function PtcrpgComTop(props){

    
    return(
        <div className="outerContainerPP">
            <div className='containerPP' style={{border:'none'}}>
                <div className='mainTitle'>
                    <h1>{props.data[0].ppTitleDT}</h1>
                </div>
                <div className='intro'>
                    <div className='introLeft'>
                        <img src={props.data[0].imagesDT[props.cntImg]} style={{ width: '100%', height: '100%' }} />
                        <div className='leftButton' onClick={() => {  // 이전사진
                            if (props.cntImg > 0) {
                                props.setCntImg(props.cntImg - 1);
                            }
                        }}><IoIosArrowDropleft style={{ background: 'none' }} /></div>
                        <div className='rightButton' onClick={() => {  // 다음사진
                            if (props.cntImg+1 < props.data[0].imagesDT.length) {
                                //image 0 1 2  < 3
                                props.setCntImg(props.cntImg + 1);
                            }
                        }}><IoIosArrowDropright style={{ background: 'none' }} /></div>
                    </div>
                    <div className='introRight'>
                        <div className='introRight1'>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>모인금액</p></div>
                                <div><p style={{ fontSize: '25px' }}>{props.data[0].convergeAmountDT}<span style={{ fontSize: '10px' }}> 원</span><span style={{ fontSize: '15px' }}> {((props.data[0].convergeAmountDT/props.data[0].targetAmountDT)*100).toFixed(2)}%</span></p></div>
                            </div>
                            <br></br>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>남은시간</p></div>
                                <div><p style={{ fontSize: '25px' }}>{dayjs(new Date(props.data[0].fundDate2DT)).diff(dayjs(),'day')}<span style={{ fontSize: '10px' }}> 일</span></p></div>
                            </div>
                            <br></br>
                            <div>
                                <div><p style={{ fontSize: '10px' }}>후원자</p></div>
                                <div><p style={{ fontSize: '25px' }}>{props.data[0].sponserCountDT}<span style={{ fontSize: '10px' }}> 명</span></p></div>
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
                                    <p>{props.data[0].targetAmountDT}원</p>
                                    <p>{props.data[0].fundDate1DT}일 ~ {props.data[0].fundDate2DT}일</p>
                                    <p>목표금액 달성시 {props.data[0].paydayDT}에 결제 진행</p>
                                    <p>{props.data[0].goDeliveryDT}</p>
                                </div>
                            </div>
                            <div className='introRight2Bottom'>
                                <div className="heartShareBtn">{
                                    props.liked ? (<IoIosHeart cursor="pointer" color="red" onClick={props.toggleLike} />) : (<IoIosHeartEmpty cursor="pointer" onClick={props.toggleLike} />) 
                                }<span style={{ fontSize: '12px' }}>{props.likeCnt}</span></div>        {/* 하트 누르면 빨간색으로 변경 카운트1 다시누르면 빈하트변경 카운트-1 */}
                                <div className="heartShareBtn"><CiShare2 cursor={'pointer'} onClick={() => { props.setShareCnt(props.shareCnt + 1) }} /><span style={{ fontSize: '12px' }}>{props.shareCnt}</span></div>
                                <div><button className='jumunBtn' onClick={()=>{window.confirm('후원 하시겠습니까?')}}>프로젝트 후원하기</button></div>           {/* 공유 누르면 카운트+1 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PtcrpgComTop;