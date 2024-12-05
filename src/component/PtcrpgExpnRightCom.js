import '../particularpage/Ptcrpg2.css';




function PtcrpgExpnRightCom(props) {    //오른쪽 가격옵션 선택창 내부에 있는 작은 박스
    console.log(props.datasDT[0].userPriceTextDT);
    return (
        <div className='innerExpnRight'>
            <p className='pakagePrice'>{props.item}원</p>
            <p>{props.datasDT[0].userPriceTextDT[props.index]}</p>
        </div>
    )
}


export default PtcrpgExpnRightCom;