import '../particularpage/Ptcrpg2.css';


function PtcrpgExpnRightCom(props){
    return(
        <div className='innerExpnRight'>
            <p className='pakagePrice'>{props.userPrice}원</p>
            <p>{props.userPriceText[props.index]}</p>
        </div>
    )
}


export default PtcrpgExpnRightCom;