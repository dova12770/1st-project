import { Navigate, useNavigate } from 'react-router-dom';
import '../css/Rank.css';
import Datas from '../particularpage/data/Datas';

function Rankprojeck(props){

    const Navigate = useNavigate();


    return (
        <div>
            <div className="toprank numBer" onClick={()=>Navigate('/ptcr/' + Datas[props.index].idDT)}>
                <div><img src={props.imgs[props.index]} className='topimg' /> </div>
                <div><h4 className='ranknum'>{props.item}</h4></div>
                <div>
                    <div><h4>{props.Creatorinfo[props.index].title}</h4></div>
                    <div className='ranksubtitle'><h4 style={{color:'#333232', margin:'4px 0px'}}>{props.Creatorinfo[props.index].subtitle}</h4></div>
                    <div><h6 style={{color:'gray'}}>{props.Creatorinfo[props.index].tag}</h6></div>
                </div>
            </div>
        </div>
    );
}

export default Rankprojeck;