
import { useState } from "react";
import './MySettingCss.css';
import MySettingCategory01 from "./MySettingCategory01";
import MySettingCategory02 from "./MySettingCategory02";
import DeliveryAddress from "./DeliveryAddress";
import profDate from '../data/profDate';
import Alarm from "./Alarm";
import Pay from "./Pay";
import Account from "./Account";

function MySetting() {

    const CateName = ['프로필', '계정', '결재수단', '배송지', '알림'];
    const [selectedIndex, setSelectedIndex] = useState(0); // 기본적으로 프로필 선택
    const [clickButton, setClickButton] = useState(false);
    const [prof, setProf] = useState(profDate);

    const renderContent = () => {
        switch (selectedIndex) {
            case 0:
                return <MySettingCategory02
                    prof={prof} clickButton={clickButton} setClickButton={setClickButton}
                    />;
            case 1:
                return <Account/>;
            case 2:
                return <Pay/>;
            case 3:
                return <DeliveryAddress/>;
            case 4:
                return <Alarm/>;
            default:
                return <div>카테고리를 선택해주세요</div>;
        }
    };

    return (
        <div className="MySettingContainer">
            <div className="MySettingName">
                <h1 className="title">설정</h1>
            </div>
            <div className="settingCategory">
                <ul>
                    {CateName.map((item, index) => (
                        <MySettingCategory01
                            key={index}
                            name={item}
                            index={index}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                        />
                    ))}
                </ul>
            </div>
            <div className="settingContent">
                {renderContent()}
            </div>
        </div>
    );
}

export default MySetting;
