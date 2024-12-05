import '../css/More.css'

function Thisproject(props) {

    return (

        <div>
            <div className='maincard'>
                <img src={props.imgs[props.index]} className='moreimg' /></div>
            <h2 className='linkpointer'>{props.Creatorinfo[props.index].title}</h2>
                <h3 style={{ color: '#F08080' }} 
                className='linkpointer'>{props.Creatorinfo[props.index].company}</h3>
                <h4 className='subtitle linkpointer'>{props.Creatorinfo[props.index].subtitle}</h4>
                <h5>{props.Creatorinfo[props.index].tag}</h5>
            </div>
    );

}

export default Thisproject;