import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../particularpage/Ptcrpg2.css';
import { CgShapeTriangle } from "react-icons/cg";
import PtcrpgExpnRightCom from './PtcrpgExpnRightCom';


function PtcrpgCom2(props) {

    const navigate = useNavigate();

    return (
        <>
            <div className='container2'>
                <div className='ptcrNav'>  {/* 네비바 */}
                    <div onClick={()=> navigate('/planpage')}>프로젝트 계획</div>
                    <div onClick={()=> navigate('/updatepage')}>업데이트</div>
                    <div onClick={()=> navigate('/commupage')}>커뮤니티</div>
                    <div onClick={()=> navigate('/reviewpage')}>후기</div>
                </div>
                <div className='expn'>  {/* 상품설명창 */}
                    <div className='expnLeft'>  {/* 이미지및상품소개 박스 */}
                        <div className='expnTitle'><CgShapeTriangle style={{ fontSize: '18px' }} />프로젝트 소개</div>
                        <div className='expnBody'><img src={props.userImages[0]} width={630} /></div> {/* 가로사이즈 최대 630 */}
                        <div className='expnBody'>이미지및상품소개</div>
                        <div className='expnBody'><img src={props.userImages[0]} width={630} /></div>
                        <div className='expnBody'>이미지및상품소개</div>
                        <div className='expnBody'><img src={props.userImages[0]} width={630} /></div>

                        <div className='noticeText1'>
                            <div className='noticeTitle'><CgShapeTriangle style={{ fontSize: '18px' }} />신뢰와 안전</div>
                            <div className='noticeSubTitle'>크라우드 펀딩에 대한 안내</div>
                            <div className='noticeSubTitle2'>후원은 구매가 아닌 창의적인 계획에 자금을 지원하는 일입니다.</div>
                            <div>전자상거래법상 통신판매는 소비자의 청약 전 규격, 제조연월일 등 구체적인 상품정보가 제공 가능한 것을 대상으로 합니다. 따라서 텀블벅에서의 후원은 통신판매에 해당하지 않고, 전자상거래법 및 소비자보호규정(수령 후 7일 내 청약철회 등)이 적용되지 않습니다.</div>
                            <div className='noticeSubTitle2'>프로젝트는 계획과 달리 진행될 수 있습니다.</div>
                            <div>예상을 뛰어넘는 멋진 결과가 나올 수 있지만 진행 과정에서 계획이 지연, 변경되거나 무산될 수도 있습니다. 본 프로젝트를 완수할 책임과 권리는 창작자에게 있습니다.</div>
                        </div>
                        <div className='noticeText2'>
                            <div className='noticeSubTitle'>프로젝트 정책</div>
                            <div>- 기성 프리오더상품 후원자가 선물을 수령한 날로부터 7일 간은 단순 변심일지라도 후원자의 요청에 따른 교환/환불단순 변심에 의한 후원금 환불이 가능하나, 전자상거래법상 교환/환불이 제한되는 리워드(식품)인 경우에 해당하여 변심에 의한 교환 및 환불은 불가합니다.</div>
                            <div>- 예상 전달일로부터 [ 15 ]일 이상 선물 전달이 이뤄지지 않을 경우, 환불을 원하시는 분들께는 [ 수수료를 제외한 ] 후원금을 환불해 드립니다.
                                (플랫폼 수수료: 모금액의 5%, 부가세 별도 / 결제 수수료: 결제 성공액의 3%, 부가세 별도 )</div>
                            <div>- 선물 전달을 위한 배송지 및 서베이 답변은 [ 2024.12.05 ]에 일괄 취합할 예정입니다.</div>
                            <div>- 이후 배송지 변경이나 서베이 답변 변경을 원하실 때에는 '창작자에게 문의하기'로 개별 문의하셔야 합니다.</div>
                            <br></br>
                            <div>
                                <div>배송이 필요한 선물</div>
                                <div>- 파손 또는 불량품 수령 시 [ 2 ]일 이내로 연락을 주시면 교환이 가능합니다.</div>
                                <div>- 교환 및 AS 문의는 '창작자에게 문의하기'로 신청해 주세요.</div>
                                <div>- 파손이나 불량품 교환시 발생하는 비용은 창작자가 부담합니다. 선물 확인을 위한 포장 훼손 외에 아이템의 가치가 훼손된 경우에는 교환 및 환불이 불가합니다.
                                    [ 상품의 파손으로 상품불량이 생긴 경우 제품을 교환해드립니다 ]</div>
                                <div>- 후원자가 배송지를 잘못 기재하거나 창작자에게 사전 고지 없이 배송지를 수정하여 배송사고가 발생할 경우 창작자는 [ 책임을 지지 않습니다 ].</div>
                            </div>
                        </div>
                    </div>
                    <div className='expnRight'>  {/* 상품 상세옵션 선택 박스 map반복 */}
                        {
                            props.userPrice.map((item, index) => {

                                return (
                                    <PtcrpgExpnRightCom userPrice={item} index={index} userPriceText={props.userPriceText} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    )
}


export default PtcrpgCom2;