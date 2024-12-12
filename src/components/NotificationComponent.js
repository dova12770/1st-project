import NotificationData from "../data/NotificationData";

function NotificationComponent({ alarms, onDelete }){

    return (
        <div className='notification'>
            <span className='notification_content'>{alarms.content}</span>
            <button 
                className='delete_notification' 
                onClick={() => onDelete(alarms.id)}>X</button>
        </div>
    );

}
export default NotificationComponent;