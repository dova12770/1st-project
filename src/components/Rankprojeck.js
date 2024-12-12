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
                    <div><h3>{props.Creatorinfo[props.index].title}</h3></div>
                    <div className='subtitle'><h4 style={{color:'#333232', margin:'3px'}}>{props.Creatorinfo[props.index].subtitle}</h4></div>
                    <div><h5 style={{color:'gray'}}>{props.Creatorinfo[props.index].tag}</h5></div>
                </div>
            </div>
        </div>
    );
}

export default Rankprojeck;