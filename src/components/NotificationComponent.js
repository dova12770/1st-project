import '../css/Notification.css';

function NotificationComponent({ alarms, onDelete }){

    return (
        <div className='alarm'>
            <span>{alarms.content}</span>
            <button 
                className='delete_alarm' 
                onClick={() => onDelete(alarms.id)}>X</button>
        </div>
    );

}
export default NotificationComponent;