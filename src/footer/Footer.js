import { useState, useRef, useEffect } from 'react';
import './Footer.css';
import { FaApple } from "react-icons/fa";  //ios아이콘
import { IoLogoAndroid } from "react-icons/io"; //android아이콘
import { FiHelpCircle } from "react-icons/fi"; //고객센터 ? 아이콘
import { AiOutlineCopyrightCircle } from "react-icons/ai"; // c아이콘
import { BsArrowRightShort } from "react-icons/bs"; //고객센터 리스트 옆 화살표 아이콘
import FooterModal from './FooterModal';

function Footer() {
    let [modalFlag, setModalFlag] = useState(false);

    const modalRef = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalFlag(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

    return (
        <>
            <div className='containerFT'>
                <div className='innerContainer'>
                    <div className='footerTop'>
                        <div className='footerTopLeft'>
                            <div>정책약관</div><div>개인정보처리방침</div>
                        </div>
                        <div className='footerTopRight'>
                            <div>제휴문의</div>
                            <div>공지사항</div>
                            <div>인재채용</div>
                            <div onClick={() => {
                                setModalFlag(!modalFlag);
                            }}>Language</div>
                        </div>
                    </div>
                    <div className='footerMiddle'>
                        <div className='footerMiddleLeft'>
                            <h4><FiHelpCircle style={{ height: 'auto' }} /> 프리즘 고객센터</h4>
                            <p>채팅 상담하기 <BsArrowRightShort style={{ height: 'auto' }} /></p>
                            <p>문의 등록하기 <BsArrowRightShort style={{ height: 'auto' }} /></p>
                            <p>도움말 바로가기 <BsArrowRightShort style={{ height: 'auto' }} /></p>
                        </div>
                        <div className='footerMiddleRight'>
                            <p style={{ paddingTop: '30px' }}>프리즘㈜ <span>|</span> 대표이사 홍길동 <span>|</span> 사업자등록번호 12-3725-456 <span>|</span> 통신판매업신고번호 2024-천안-1130 <span>|</span> 충청남도 천안시 동남구 천안로 12 프리즘빌딩 101호</p>
                            <br></br><p>이메일 상담 info@prism.kr <span>|</span> 유선 상담 1515-1515 <AiOutlineCopyrightCircle /><span style={{ fontWeight: 700, color: 'rgb(53, 53, 53)' }}>prism Co.,Ltd</span></p>
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
                            <p style={{ fontWeight: '100', lineHeight: '20px' }}>평일 오전 9시 ~ 오후 6시 (주말, 공휴일 가능)</p>
                        </div>
                        <div className='footerBottomRight'>
                            <p><IoLogoAndroid style={{ height: 'auto' }} size={20} color='rgb(60,60,60)' />Android앱</p>
                            <div>　　</div>
                            <p><FaApple style={{ height: 'auto' }} size={20} color='rgb(60,60,60)' />iOS앱</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalFlag == true ? ( <div ref={modalRef}> <FooterModal setModalFlag={setModalFlag} modalFlag={modalFlag} /> </div> ) : null
            }
        </>
    )

}


export default Footer;