import '../css/Rank.css';

function Rankprojeck(props){


    return (
        <div>
            <div className="toprank numBer">
                <div><img src={props.imgs[props.index]} className='topimg' /> </div>
                <div><h4 className='ranknum'>{props.item}</h4></div>
                <div>
                    <div><h3>{props.Creatorinfo[props.index].title}</h3></div>
                    <div className='subtitle'><h4>{props.Creatorinfo[props.index].subtitle}</h4></div>
                    <div><h5>{props.Creatorinfo[props.index].tag}</h5></div>
                </div>
            </div>
        </div>
    );
}

export default Rankprojeck;