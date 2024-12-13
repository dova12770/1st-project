import '../css/Rank.css';
import { img01, img02, img03, img04, img05, img06, img07, img08 } from '../image/images';
import { useState } from 'react';
import Creatorinfo from '../components/CreatorInfo';
import Rankprojeck from '../components/Rankprojeck';


function Rank() {

    const [rankPro, setRankPro] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ])
    let [imgs, setImges] = useState([process.env.PUBLIC_URL + '/images/라이프클락1.jpg', process.env.PUBLIC_URL + '/images/방염담요1.jpg', process.env.PUBLIC_URL + '/images/생존가방.jpg', process.env.PUBLIC_URL + '/images/구급가방.jpg', process.env.PUBLIC_URL + '/images/방독면.jpg', process.env.PUBLIC_URL + '/images/부착식소화기1.jpg', process.env.PUBLIC_URL + '/images/차수문.jpg', process.env.PUBLIC_URL + '/images/지진대피 방재모자.jpg']); // 광고 이미지


    return (
        <div>
            <div className='rankBorder'>
                <div className="topranktitle"><h2>인기 프로젝트</h2>

                </div>
                {
                    rankPro.map((item, index) => {
                        return <Rankprojeck item={item} imgs={imgs} index={index} Creatorinfo={Creatorinfo}/>
                    })
                }
                <div className="toprankfooter" onClick={()=>{alert('준비중 입니다.')}}><h1 style={{marginTop:'30px'}}>더보기</h1></div>
            </div>
        </div>
    )
}

export default Rank;