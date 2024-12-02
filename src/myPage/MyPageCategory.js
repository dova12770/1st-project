import './MyPageCss.css'

function MyPageCategory() {

    return (
        <>
            <li className="GreenLine" onClick={() => {
                setUnderLine(!underLine);
            }}>프로필</li>
        </>
    )
}

export default MyPageCategory;