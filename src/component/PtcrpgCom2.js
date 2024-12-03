import '../particularpage/Ptcrpg2.css';
import { CgShapeTriangle } from "react-icons/cg";
import PtcrpgExpnRightCom from './PtcrpgExpnRightCom';

function PtcrpgCom2(props) {
    return (
        <>
            <div className='container2'>
                <div className='ptcrNav'>  {/* 네비바 */}
                    <div>프로젝트 계획</div>
                    <div>업데이트</div>
                    <div>커뮤니티</div>
                    <div>후기</div>
                </div>
                <div className='expn'>  {/* 상품설명창 */}
                    <div className='expnLeft'>  {/* 이미지및상품소개 박스 */}
                        <div className='expnTitle'><CgShapeTriangle style={{ fontSize: '18px' }} />프로젝트 소개</div>
                        <div className='expnBody'><img src={props.userImages[0]} width={630} /></div> {/* 가로사이즈 최대 630 */}
                        <div className='expnBody'>이미지및상품소개</div>
                        <div className='expnBody'><img src={props.userImages[0]} width={630} /></div>
                        <div className='expnBody'>이미지및상품소개</div>
                        <div className='expnBody'><img src={props.userImages[0]} width={630} /></div>
                    </div>
                    <div className='expnRight'>  {/* 상품 상세옵션 선택 박스 map반복 */}
                        {
                            props.userPrice.map((item,index) => {
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