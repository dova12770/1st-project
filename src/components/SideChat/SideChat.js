import { useState } from "react";
import '../../css/SideChat/SideChat.css'

function SideChat() {

    const [isOpen, setIsOpen] = useState(false); // 초기값 false


    return (
        <div>
            <div className="divrow">
                    <button className="btnOpen" onClick={() => {
                        if (isOpen == false) {
                            setIsOpen(true)
                        } else {
                            setIsOpen(false)
                        }
                    }}> <h1>오픈버튼</h1></button>
                <div className="container" style={{ width: isOpen ? "250px" : "0px", display: isOpen ? "inline-block" : "none" }}>
                    <h1>실시간 채팅창 <button className="btnclose" onClick={(()=>{
                        if (isOpen == false) {
                            setIsOpen(true)
                        } else {
                            setIsOpen(false)
                        }
                    })}>x</button></h1>

                    <div className="chatWindow"></div>
                    <input className="inputChat" placeHolder="대화를 입력하세요."></input>
                    <button className="btnSend">전송</button>
                </div>

            </div>
        </div>
    );
}

export default SideChat;