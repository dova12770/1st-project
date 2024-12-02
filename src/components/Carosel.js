import { useState, useEffect } from "react";
import { img01, img02, img03, img04, img05, img06, img07, img08 } from '../image/images';
import '../css/Carosel.css';

const Carosel = () => {

    let [imgs, setImges] = useState([img01, img02, img03, img04, img05, img06, img07, img08]); // 광고 이미지
    let [index, setIndex] = useState([0]);   //광고 이미지 순서


    return (
        <div className="imgdiv">{/* 화면 */}
            <div className="container">{/* 나열된 화면 */}
                <div>
                    <img src={imgs[index]} className="imgMain" />

                    <botton className='btn_prev' onClick={() => {
                        {/* 이전 버튼 클릭시 */ }
                        if (index == 0) {
                            {/* 첫번 째 페이지면  마지막 페이지로*/ }
                            setIndex(index = imgs.length - 1)
                        }
                        else {
                            setIndex(--index)
                        } {/* 아니면 이전 페이지 */ }
                    }} >이전</botton>


                    <botton className='btn_next' onClick={() => {
                        {/* 다음 버튼 클릭시 */ }
                        if (index != imgs.length - 1) {
                            {/* 마지막 페이지가 아니면  증가 */ }
                            setIndex(++index);
                        }
                        else {
                            setIndex(index = 0)
                        } {/* 마지막 페이지면 첫번 째 페이지로 */ }
                    }}>다음</botton>
                </div>
            </div>


        </div>
    );
};


export default Carosel;