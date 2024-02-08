import React from 'react'
import { IoCompass } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { AiFillPlusCircle } from "react-icons/ai";
import avatar2 from '../../../assets/images/user/avatar2.png'
import avatar3 from '../../../assets/images/user/avatar3.png'
import avatar4 from '../../../assets/images/user/avatar4.png'
import avatar5 from '../../../assets/images/user/avatar5.png'


const SideBar = () => {
  return (
    <div className="siderBar">
      <div className="sideBarInner">
        <div className="sideBarInnerTop">
          <div className="navigation dbIconTheme">
            <IoCompass />
          </div>
          <div className="favorite dbIconTheme">
            <TiStarFullOutline />
          </div>
          <div className="messenger dbIconTheme">
            <FaFacebookMessenger />
          </div>
          <div className="rise dbIconTheme">
            <AiOutlineRise />
          </div>
          <div className="globe dbIconTheme">
            <FaGlobeAmericas />
          </div>
          <div className="building dbIconTheme">
            <HiMiniBuildingOffice2 />
          </div>
        </div>
        <div className="sideBarInnerBottom">
          <div className="avatarpfp">
            <img src={avatar2} alt="" />
          </div>
          <div className="avatarpfp">
            <img src={avatar3} alt="" />
          </div>
          <div className="avatarpfp">
            <img src={avatar4} alt="" />
          </div>
          <div className="avatarpfp">
            <img src={avatar5} alt="" />
          </div>
          <div className="building dbIconTheme">
            <AiFillPlusCircle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar