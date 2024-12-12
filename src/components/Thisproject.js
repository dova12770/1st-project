import { Navigate, useNavigate } from 'react-router-dom';
import '../css/More.css'
import PtcrTotal from '../merge/PtcrTotal';
import Datas from '../particularpage/data/Datas';

function Thisproject(props) {
    const Navigate = useNavigate();

    return (

        <div onClick={()=> Navigate('/ptcr/' + Datas[props.index].idDT)}>
            <div className='CardSlot'>
            <div className='maincard'>
                <img src={props.imgs[props.index]} className='moreimg' /></div>
            <h3 className='linkpointer'>{props.Creatorinfo[props.index].title}</h3>
            <h5 style={{ color: '#F08080' }}
                className='linkpointer'>{props.Creatorinfo[props.index].company}</h5>
            <h5 className='subtitle linkpointer'>{props.Creatorinfo[props.index].subtitle}</h5>
            <h6 className='tagtitle'>{props.Creatorinfo[props.index].tag}</h6>
        </div>
        </div>
    );

}

export default Thisproject;