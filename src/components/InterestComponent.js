import InterestData from "../data/InterestData";

function InterestComponent({interest, onDelete}){

    return(

        <div className='interest'>
            <div className='interest_img'><img className='interest_inImg' src={interest.image} alt={interest.title}/></div>
            <div className='interest_brand'>{interest.brand}</div>
            <div className='interest_title'>{interest.title}</div>
            <div className='interest_content'>{interest.content}</div>
            <div className="interest_heart" onClick={()=> onDelete(interest.id)}> ❤ </div>
        </div>
        
    );

}
export default InterestComponent;