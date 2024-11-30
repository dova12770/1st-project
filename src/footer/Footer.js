import { useState } from 'react';
import './Footer.css';
import { FaApple } from "react-icons/fa";

function Footer() {

    return (
        <>
            <div className='container'>
                <div className='innerContainer'>
                    <div className='footerTop'>
                        <div className='footerTopLeft'>
                            <div className='ftl'>정책약관</div><div className='ftl'>개인정보처리방침</div>
                        </div>
                        <div className='footerTopRight'>
                            <div>제휴문의</div>
                            <div>공지사항</div>
                            <div>인재채용</div>
                            <div>Language</div>
                        </div>
                    </div>
                    <div className='footerMiddle'>
                        <div className='footerMiddleLeft'>
                            <h4>프리즘 고객센터</h4>
                            <p>채팅 상담하기</p>
                            <p>문의 등록하기</p>
                            <p>도움말 바로가기</p>
                        </div>
                        <div className='footerMiddleRight'>
                            <p style={{paddingTop:'30px'}}>프리즘㈜ <span>|</span> 대표이사 홍길동 <span>|</span> 사업자등록번호 12-3725-456 <span>|</span> 통신판매업신고번호 2024-천안-1130 <span>|</span> 충청남도 천안시 동남구 천안로 12 프리즘빌딩 101호</p>
                            <br></br><p>이메일 상담 info@prism.kr | 유선 상담 1515-1515 prism Co.,Ltd</p>
                            <br></br><br></br>
                            <p className='footerMiddleRightText'>일부 상품의 경우 프리즘은 통신판매중개자이며 통신판매 당사자가 아닙니다.</p><br></br><p className='footerMiddleRightText'>해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.</p>
                            <br></br><br></br>
                            <p className='footerMiddleRightText'>프리즘 사이트의 리워드 정보, 메이커 정보, 스토리 정보, 콘텐츠, UI 등에 대한</p><br></br><p className='footerMiddleRightText'>무단복제, 전송, 배포, 크롤링, 스크래핑 등의 행위는
                            저작권법, 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지됩니다.</p>
                        </div>
                    </div>
                    <div className='footerBottom'>
                        <div className='footerBottomLeft'>
                            <p>상담 가능 시간</p>
                            <p style={{fontWeight:'100', lineHeight:'20px'}}>평일 오전 9시 ~ 오후 6시 (주말, 공휴일 가능)</p>
                        </div>
                        <div className='footerBottomRight'>
                            <p><FaApple />Android앱</p>
                            <p>iOS앱</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Footer;