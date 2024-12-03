import './Footer.css';

function FooterModal(props){
    return(
        <div className="ft_modal">
            <h5 onClick={()=>{
                props.setModalFlag(!props.modalFlag);
            }}>한국어</h5>
            <h5 onClick={()=>{
                props.setModalFlag(!props.modalFlag);
            }}>English</h5>
            <h5 onClick={()=>{
                props.setModalFlag(!props.modalFlag);
            }}>日本語</h5>
        </div>
    )
}


export default FooterModal;