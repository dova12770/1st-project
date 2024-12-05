import './HeaderCss.css'
import { CgMicrosoft } from "react-icons/cg";
import { CgGames } from "react-icons/cg";
import { CgNotes } from "react-icons/cg";
import { CgBot } from "react-icons/cg";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { RiSofaLine } from "react-icons/ri";
import { FaRegGem } from "react-icons/fa";
import { LiaStoreAltSolid } from "react-icons/lia";
function Category() {

    return (
        <div className='dropdown_menu'>
            <li className='caList'><CgMicrosoft /> 전체</li>
            <li className='caList'><IoFastFoodOutline /> 푸드</li>
            <li className='caList'><CgNotes /> 출판</li>
            <li className='caList'><IoShirtOutline /> 의류</li>
            <li className='caList'><CgBot /> 테크</li>
            <li className='caList'><RiSofaLine /> 리빙</li>
            <li className='caList'><CgGames /> 게임</li>
            <li className='caList'><FaRegGem /> 주얼리</li>
            <li className='caList'><LiaStoreAltSolid /> 잡화</li>
        </div>
    )
}

export default Category;