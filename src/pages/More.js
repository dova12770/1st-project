import '../css/More.css';
import { img01, img02, img03, img04, img05, img06, img07, img08 } from '../image/images';
import { useState } from 'react';

function More() {


    const [trypro, setTryPro] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ])
    let [imgs, setImges] = useState([img01, img02, img03, img04, img05, img06, img07, img08]);

    let [title, setTitle] = useState([
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
        <div className='morediv'>
            <div className='texttitle'><h1>이달의 추천 프로젝트</h1></div>

            <div className='cardcontainer'>

                {
                    trypro.map((item, index)=>{
                        return <div>
                        <div className='maincard'><img src={imgs[index]} className='moreimg' /></div>
                            <div>제작자
                            <div>{title[index]}</div>
                            <div>달성룔 or 알림신청</div>
                            <div>태그</div>
                        </div>
                    </div>
                    })
                }
                


            </div>
        </div>
    );
}


export default More;