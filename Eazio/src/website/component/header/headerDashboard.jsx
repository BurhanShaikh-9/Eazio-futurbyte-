import React, { useState } from 'react'
import { ROUTES } from '../../../utils/routes';
import { Link } from 'react-router-dom';
import { TfiWorld } from "react-icons/tfi";
import logoImg from '../../../assets/images/logo/logo.png'
import { RxCross2 } from "react-icons/rx";
import { IoMdSearch, IoIosArrowForward } from "react-icons/io";
import userImg from '../../../assets/images/user/userImage.webp'
import { BsFillBellFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import useToggleNav from '../../../globalVariables/store'



const HeaderDashboard = () => {
  // const [isNav, setIsNav] = useState(false)
  const { toggleNav } = useToggleNav();

  const pageListing = [
    { label: 'Dashboard', route: ROUTES.TASK, active: 'active' },
    { label: 'About Us', route: '/', active: 'none' },
    { label: 'News', route: '/', active: 'none' },
    { label: 'User Policy', route: '/', active: 'none' },
    { label: 'Contacts', route: '/', active: 'none' },
  ]
  const [userObj, setUserObj] = useState({ name: 'Clayton Santos', image: userImg });

  return (
    <header>
      <nav className="headerInner">
        <div className="headerStart">

          <div className="sidebarToggleOuter">

            <div className="sideBarToggle burgerMenu " onClick={toggleNav}>
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>

          <div className="headerLogo">
            <img src={logoImg} alt="" />
          </div>
        </div>

        <ul className="dashboardLists">
          {
            pageListing.map((item, keyId) => (
              <li key={keyId} className='dashLists'><Link to={item.route}>{item.label}</Link></li>
            ))
          }
          {/* <li className='dashLists'> <Link><BsThreeDots /></Link> </li> */}
        </ul>

        <div className="headerSearch">
          <div className="headerSearchInner">
            <IoMdSearch className="searchIcon" />
            <input type="text" placeholder="Search Transactions and Documents" />
            <IoIosArrowForward className="arrowIcon" />
          </div>
        </div>

        <div className="headerEnd">
          <div className="pfpUser">
            <img src={userObj.image} alt="" />
            <label>{userObj.name}</label>
          </div>
          <div className="notifications dbIconTheme">
            <BsFillBellFill />
          </div>
          <div className="logoutBtn dbIconTheme">
            <MdCancel />
          </div>
        </div>

      </nav>

    </header>
  )
}

export default HeaderDashboard