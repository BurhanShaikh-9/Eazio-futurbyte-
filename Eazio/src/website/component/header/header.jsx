import React, { useState } from 'react'
import { ROUTES } from '../../../utils/routes';
import { Link } from 'react-router-dom';
import { TfiWorld } from "react-icons/tfi";
import logoImg from '../../../assets/images/logo/logo.png'
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [isNav, setIsNav] = useState(false)

  const pageListing = [
    { label: 'Home', route: ROUTES.HOME, active: 'active' },
    { label: 'Careers', route: '/', active: 'none' },
    { label: 'Pricing', route: '/', active: 'none' },
    { label: 'Feature', route: '/', active: 'none' },
  ]

  return (
    <header>
      <div className="customContainer">

        <nav className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <img src={logoImg} alt="" />
            </div>
          </div>
          <ul className="nav-list desktopMenu">
            {
              pageListing.map((item, keyId) => (
                <li className={item.active}><Link key={keyId} to={item.route}>{item.label}</Link></li>
              ))
            }
          </ul>
          <div className="navEnd desktopEnd">
            <div className="languageFilter">
              <TfiWorld />
              <select className='languageDropDown'>
                <option value="">English</option>
                <option value="">French</option>
                <option value="">Spanish</option>
              </select>
            </div>
            <div className="loginButton">
              <Link to={ROUTES.LOGIN}>
                Login
              </Link>
            </div>
            <div className="demoButton">
              <button className='mainButton3 headerDemoBtn'>Get Demo</button>
            </div>
          </div>
          <div className={`nav-list mobileMenu ${isNav && `menuActive`}`} >
            <div className="innerMenuMobile">
              <button className="closeButton burger-toggle " onClick={() => { setIsNav(false) }}>
              <RxCross2/>
              </button>
              <ul>
                <li><Link to={ROUTES.LOGIN}><img src={logoImg} alt="logo" /></Link></li>
                {
                  pageListing.map((item, keyId) => (
                    <li className='mobLists'><Link key={keyId} to={item.route}>{item.label}</Link></li>
                  ))
                }
                <li className='mobLists'>
                  <Link to={ROUTES.LOGIN}>Login</Link>
                </li>
                <li className='mobLists'>

                <div className="demoButton">
                  <button className='mainButton3 headerDemoBtn'>Get Demo</button>
                </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="burgerMenu burger-toggle" onClick={() => { setIsNav(!isNav) }}>
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default Header