import './HeaderCss.css'
import { CgMicrosoft } from "react-icons/cg";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { FaCloudShowersWater } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { RiEarthquakeLine } from "react-icons/ri";
import { FaSun } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { LiaStoreAltSolid } from "react-icons/lia";
function Category() {

    return (
        <div className='dropdown_menu'>
            <li className='caList'><CgMicrosoft /> 전체</li>
            <li className='caList'><FaFireAlt /> 화재</li>
            <li className='caList'><FaCloudShowersWater /> 태풍/호우</li>
            <li className='caList'><RiEarthquakeLine /> 지진</li>
            <li className='caList'><FaRegSnowflake /> 대설/한파</li>
            <li className='caList'><FaSun /> 폭염</li>
            <li className='caList'><RiSurgicalMaskLine /> 전염병</li>
        </div>
    )
}

export default Category;