import '../css/Rank.css';
import { img01, img02, img03, img04, img05, img06, img07, img08 } from '../image/images';
import { useState } from 'react';


function Rank() {

    const [rankPro, setRankPro] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ])
    let [imgs, setImges] = useState([img01, img02, img03, img04, img05, img06, img07, img08]); // 광고 이미지

    let[title,setTitle] = useState([
        '알리바바',
        '백설공주',
        '일곱난쟁이',
        '몽환의숲',
        '전설의전당',
        '예술의전당',
        '코딩의전당',
        '종교의장'
    ])

    return (
        <div>
            <div>
                <div className="toprank">인기 프로젝트

                </div>
                {
                    rankPro.map((item, index) => {
                        return <div>
                            <div className="toprank numBer">
                                <div><img src={imgs[index]} className='topimg' /> </div>
                                <div><h4>{item}</h4></div>
                                <div>
                                    <div><h4>{title[index]}</h4></div>
                                    <div>프로젝트 펀딩 상태 달성률</div>
                                    <div>펀딩남은시간</div>
                                    <div>펀딩 제작자 뱃지</div>
                                    <div>대략 3.9천만원+ ect...</div>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className="toprank">인기 더보기</div>
            </div>
        </div>
    )
}

export default Rank;