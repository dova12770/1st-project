import '../css/More.css';
import { img01, img02, img03, img04, img05, img06, img07, img08 } from '../image/images';
import { useState } from 'react';
import Creatorinfo from '../components/CreatorInfo';
import Thisproject from '../components/Thisproject';

function More() {


    const [trypro, setTryPro] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ])
    let [imgs, setImges] = useState([process.env.PUBLIC_URL + '/images/라이프클락1.jpg', process.env.PUBLIC_URL + '/images/방염담요1.jpg', process.env.PUBLIC_URL + '/images/생존가방.jpg', process.env.PUBLIC_URL + '/images/구급가방.jpg', process.env.PUBLIC_URL + '/images/방독면.jpg', process.env.PUBLIC_URL + '/images/부착식소화기1.jpg', process.env.PUBLIC_URL + '/images/차수문.jpg', process.env.PUBLIC_URL + '/images/지진대피 방재모자.jpg']);


    return (
        <div className='morediv'>
            <div className='texttitle'><h2 style={{marginTop:'100px'}}>금주의 추천 프로젝트</h2></div>

            <div className='cardcontainer'>

                {
                    trypro.map((item, index)=>{
                        return <Thisproject imgs={imgs} index={index} Creatorinfo={Creatorinfo} />
                    })
                }
                


            </div>
        </div>
    );
}


export default More;