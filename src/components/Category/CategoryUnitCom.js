import { useNavigate } from 'react-router-dom';
import '../../css/CategoryPages/HotCatecoryPage.css';
import { FaBell } from "react-icons/fa6";
import Datas from '../../particularpage/data/Datas';


function CategoryUnitCom(props) {
    const Navigate = useNavigate();

    return (

            <div >
                {/* 제품설명 전체 영역 */}
                <div className="HCPInnerContainer">
                    {/* 제품설명  영역 */}
                    <div className="HCPHotSell" onClick={()=>Navigate('/ptcr/' + Datas[props.index].idDT)}>
                        <div className="HCPInnerName">{props.stating[props.index].state}</div>
                        {/* 제품 상세 영역 */}
                        <img src={props.stating[props.index].MainImg} className="HCPInnerImg" />
                        <div className="HCPHotSellUnit">
                            {/* 제품 밑 유닛 존 */}
                            <img src={props.stating[props.index].MainImg02} className="HCPHotSellUnitImg" />
                            {/* 유닛존 이미지 */}
                            <div className="HCPHotSellUnitWord">
                                <div className="HCPHotSellPrice"><span>{props.stating[props.index].price}</span><span>원</span></div>
                                <div className="HCPHotSellSubTitle">{props.stating[props.index].title}</div>
                                <div className="HCPHotSellSubTag">{props.stating[props.index].tag}</div>
                            </div>

                            <div><FaBell /></div>
                            <div></div>
                            {/* 유닛존 설명 */}
                        </div>

                    </div>
                    <div className="HPCitemAdd">
                        {/* 제품 옆 */}
                        <div className="HCPItemTitle">
                            <h2>{props.stating[props.index].MainTitle}</h2>
                            <p className="HCPItemSub">{props.stating[props.index].SubTitle}</p>
                        </div>
                        <div className="HCPItemShot">
                            <div className="HCPItemBox">
                            <div className="HCPUnitName">{props.stating[props.index].itemTag[0]}</div>
                                <img src={props.stating[props.index].UnitImg01} className="HCPItemImg" />
                                <div className="HCPItemdetail">
                                    <span>
                                    <span className="HCPItemdetailTitle">Q.{props.stating[props.index].FirstQ}</span>
                                        <br/>
                                        <br/>
                                        <span className="HCPItemdetailWord">
                                        {props.stating[props.index].FirstA}</span>
                                    </span>
                                </div>
                            </div>

                            <div className="HCPItemBox">
                            <div className="HCPUnitName">{props.stating[props.index].itemTag[1]}</div>
                                <img src={props.stating[props.index].UnitImg02} className="HCPItemImg" />
                                <div className="HCPItemdetail">
                                <span>
                                    <span className="HCPItemdetailTitle">Q.{props.stating[props.index].SecondQ}</span>
                                        <br/>
                                        <br/>
                                        <span className="HCPItemdetailWord">
                                        {props.stating[props.index].SecondA}</span>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="HCPItemBox">
                            <div className="HCPUnitName">{props.stating[props.index].itemTag[2]}</div>
                                <img src={props.stating[props.index].UnitImg03} className="HCPItemImg" />
                                <div className="HCPItemdetail">
                                <span>
                                    <span className="HCPItemdetailTitle">Q.{props.stating[props.index].ThirdQ}</span>
                                        <br/>
                                        <br/>
                                        <span className="HCPItemdetailWord">
                                        {props.stating[props.index].ThirdA}</span>
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>


                </div>

            </div>
    );
}

export default CategoryUnitCom;