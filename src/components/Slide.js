import { Navigate, useNavigate } from 'react-router-dom';
import '../css/Slide.css';
import { img01, img02, img03, img04, img05, img06, img07, img08 } from '../image/images';
import { useState, useEffect } from 'react';
import Datas from '../particularpage/data/Datas';


function Slide() {

    let Navigate = useNavigate();

    const [cnt, setCnt] = useState([
        0, 1, 2, 3, 4, 5, 6, 7
    ])
    //자동 슬라이드
    const [intervalId, setIntervalId] = useState(null);
    let [imgs, setImges] = useState(['/images/라이프클락1.jpg','/images/방염담요1.jpg', '/images/생존가방.jpg', '/images/구급가방.jpg', '/images/방독면.jpg', '/images/부착식소화기1.jpg', '/images/차수문.jpg', '/images/지진대피 방재모자.jpg']);
    const [curSlide, setCurSlide] = useState(0);

    const StartSlideIndex = 0; //시작 슬라이드 번호
    const EndSlideIndex = cnt.length - 1; //끝나는 슬라이드 번호
    const MoveSlideIndex = 1; //슬라이드 이동 값


    const autoMoveSlide = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }

        setIntervalId(
            setInterval(() => {
                setCurSlide((prevState) =>
                    prevState < EndSlideIndex
                        ? prevState + MoveSlideIndex
                        : StartSlideIndex
                );
            }, 3000)
        );
    };

    useEffect(() => {
        autoMoveSlide();

        return () => clearInterval(intervalId);
    }, []);

    // 버튼 누르면 넘어감
    const moveToSlide = (value) => {
        if (value == 'next') {
            setCurSlide((prevState) =>
                prevState < EndSlideIndex ? prevState + MoveSlideIndex : StartSlideIndex
            );
        }
        if (value == 'prev') {
            setCurSlide((prevState) =>
                prevState > StartSlideIndex ? prevState - MoveSlideIndex : EndSlideIndex
            );
        }
    }


    //슬라이드 현재 값
    const handlePaginationClick = (index) => {
        setCurSlide(index);
        autoMoveSlide();
    };


    return (
        <div className='slide'>
            <button
                className='prev-button'
                onClick={() => moveToSlide('prev')}
            >
                <h1>＜</h1>
            </button>

            <div className='view'>
                {
                    cnt.map((item, index) => {
                        return <div
                            style={{
                                transform: `translateX(${-800 * curSlide}px)`,
                                transition: 'all 0.7s ease-in-out'
                            }}
                        ><img src={imgs[index]} className='imgconfig' onClick={()=> Navigate('/ptcr/' + Datas[index].idDT ) } /></div>
                        
                    })
                };
            </div>
            <ol className='slide-index'>
                {
                    cnt.map((_, index) => (
                        <li
                            key={index}
                            className={`index-item ${curSlide === index ? 'active' : ''}`}
                            onClick={() => handlePaginationClick(index)}
                        >
                            {index+1}
                        </li>
                    ))
                }
            </ol>

            <button
                className='next-button'
                onClick={() => moveToSlide('next')}
            >
                <h1>＞</h1>
            </button>
        </div>
    );
}

export default Slide;