import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/footer'
import SideBar from '../../component/sidebar/sideBar'
import HeaderDashboard from '../../component/header/headerDashboard'
import '../../../assets/styling/dashboard.css'
import useToggleNav from '../../../globalVariables/store'
import ProfilePanel from '../../component/profilePanel/profilePanel'
import { motion } from "framer-motion"
import HeaderMessenger from '../../component/header/headerMessenger'

const MessengerLayout = () => {
    const { isNav, toggleNav } = useToggleNav()
    const motionAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { type: "spring", stiffness: 100 }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1300 && !isNav) {
                toggleNav();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isNav, toggleNav]);

    return (
        <React.Fragment>
            <div className="dashboard">
                <HeaderMessenger />
                <div className={`dashboardBody ${isNav ? 'isNavActive' : ''}`}>
                    <SideBar />
                    <div className="mainDashboardOuter">

                        <motion.div {...motionAnimation}>
                            <div className="mainDashboard">
                                <ProfilePanel />
                                <Outlet />
                            </div>
                        </motion.div>
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessengerLayout