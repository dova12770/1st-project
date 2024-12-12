
import { useState } from "react";
import '../../css/CategoryPages/HotCatecoryPage.css';
import CategoryUnitCom from "../../components/Category/CategoryUnitCom";
import CategoryNewState from "../../components/Category/CategoryComponentNew";


function NewCatecoryPage() {

    const [unitTemp, setUnitTemp] = useState(CategoryNewState);

    return (
        <div className="HCPContainer">
            {/* 카테고리 전체 컨테이너 */}
            <h2 className="CatecoryTitle">신규 제품</h2>
            {/* 카테고리 타이틀 */}

        
        {
            unitTemp.map((_, index)=>{
                return <CategoryUnitCom  index={index} stating={CategoryNewState}/>
            })
        }


{/* 
            <div >

                <div className="HCPInnerContainer">

                    <div className="HCPHotSell">
                        <div className="HCPInnerName">Hot!</div>

                        <img src={img01} className="HCPInnerImg" />
                        <div className="HCPHotSellUnit">

                            <img src={img01} className="HCPHotSellUnitImg" />

                            <div className="HCPHotSellUnitWord">
                                <div className="HCPHotSellPrice"><span>30000</span><span>원</span></div>
                                <div className="HCPHotSellSubTitle">간편한 소화기 1인용</div>
                                <div className="HCPHotSellSubTag">HOT인기!</div>
                            </div>

                            <div>알람</div>
                            <div></div>

                        </div>

                    </div>
                    <div className="HPCitemAdd">

                        <div className="HCPItemTitle">
                            <h1>화재 대책 필수! 간편한 1인용 소화기!</h1>
                            <p className="HCPItemSub">운전 하거나 작업 도중 혹은 급한 볼 일 도중 화재 발견 시! 초기 진압 아이템!</p>
                        </div>
                        <div className="HCPItemShot">
                            <div className="HCPItemBox">
                                <div className="HCPUnitName">비하인드</div>
                                <img src={img01} className="HCPItemImg" />
                                <div className="HCPItemdetail">
                                    <span>
                                        <span className="HCPItemdetailTitle">간편 소화기를 소개합니다!</span>
                                        <br />
                                        <br />
                                        <span className="HCPItemdetailWord">
                                            나서고 싶지만 할 수 없을 때! 남녀노소 누구나 사용 할 수 있는 간편 소화기 입니다!</span>
                                    </span>
                                </div>
                            </div>

                            <div className="HCPItemBox">
                                <div className="HCPUnitName">활용팁</div>
                                <img src={img02} className="HCPItemImg" />
                                <div className="HCPItemdetail">
                                    <span>
                                        <span className="HCPItemdetailTitle">어떻게 사용하나요?</span>
                                        <br />
                                        <br />
                                        <span className="HCPItemdetailWord">
                                            걸려 있는 고리를 버튼을 누르고 당겨서 핀을 뽑고 던지기만 하면 됩니다!</span>
                                    </span>
                                </div>
                            </div>

                            <div className="HCPItemBox">
                                <div className="HCPUnitName">안전성</div>
                                <img src={img03} className="HCPItemImg" />
                                <div className="HCPItemdetail">
                                    <span>
                                        <span className="HCPItemdetailTitle">위험하지는 않나요?</span>
                                        <br />
                                        <br />
                                        <span className="HCPItemdetailWord">
                                            버튼을 눌러서 당겨야 하므로 핀이 실수라도 뽑힐 일이 없고, 잘 못 던졌어도
                                            소화 분말은 인체에 무해합니다!</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div> */}

        </div>
    );
}

export default NewCatecoryPage;