import '../css/Rank.css';
import { img01, img02, img03, img04, img05, img06, img07, img08 } from '../image/images';
import { useState } from 'react';
import Creatorinfo from '../components/CreatorInfo';
import Rankprojeck from '../components/Rankprojeck';


function Rank() {

    const [rankPro, setRankPro] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ])
    let [imgs, setImges] = useState([img01, img02, img03, img04, img05, img06, img07, img08]); // 광고 이미지


    return (
        <div>
            <div>
                <div className="topranktitle"><h2>인기 프로젝트</h2>

                </div>
                {
                    rankPro.map((item, index) => {
                        return <Rankprojeck item={item} imgs={imgs} index={index} Creatorinfo={Creatorinfo}/>
                    })
                }
                <div className="toprankfooter"><h1>더보기</h1></div>
            </div>
        </div>
    )
}

export default Rank;