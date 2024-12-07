

function AlarmComponent({alarm, onDelete2}){

    return(

        <div className='alarms'>
            <div className='alarm_img'>{alarm.id}</div>
            <div className='alarm_brand'>{alarm.brand}</div>
            <div className='alarm_title'>{alarm.title}</div>
            <div className='alarm_content'>{alarm.content}</div>
            <div className="alarm_bell" onClick={()=> onDelete2(alarm.id)}> 🔔 </div>
        </div>
        
    );

}
export default AlarmComponent;