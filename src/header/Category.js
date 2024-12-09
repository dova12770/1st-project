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
            <li className='caList'><IoFastFoodOutline /> 화재</li>
            <li className='caList'><CgNotes /> 태풍/호우</li>
            <li className='caList'><IoShirtOutline /> 지진</li>
            <li className='caList'><CgBot /> 대설/한파</li>
            <li className='caList'><RiSofaLine /> 폭염</li>
            <li className='caList'><CgGames /> 전염병</li>
        </div>
    )
}

export default Category;