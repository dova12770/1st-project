import './TopDown.css';
import { GiTriangleTarget } from "react-icons/gi";
import { useEffect } from 'react';


function TopDown() {
    useEffect(() => {
        const handleScroll = () => {
            const td_btn = document.getElementsByClassName('td_btn')[0];
            if (document.documentElement.scrollTop > 800) {
                td_btn.style.opacity = '1';
            } else {
                td_btn.style.opacity = '0';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='td_btn' onClick={() => {
                window.scrollTo({
                    top: '0',
                    behavior: 'smooth'
                })
            }}>
                <GiTriangleTarget size={50} />
                <p>UP</p>
            </div>
        </>
    )
}

export default TopDown;