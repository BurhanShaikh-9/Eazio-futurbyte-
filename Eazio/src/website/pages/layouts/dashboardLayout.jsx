import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/footer'
import SideBar from '../../component/sidebar/sideBar'
import HeaderDashboard from '../../component/header/headerDashboard'
import '../../../assets/styling/dashboard.css'
import useToggleNav from '../../../globalVariables/store'
import ProfilePanel from '../../component/profilePanel/profilePanel'
import { motion } from "framer-motion"

const DashboardLayout = () => {
    const { isNav } = useToggleNav()
    const motionAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { type: "spring", stiffness: 100 }
    };
    return (
        <React.Fragment>
            <div className="dashboard">
                <HeaderDashboard />
                <div className={`dashboardBody ${isNav ? 'isNavActive' : ''}`}>
                    <SideBar />
                    <motion.div {...motionAnimation}>
                        <div className="mainDashboard">
                            <ProfilePanel />
                            <Outlet />
                        </div>
                    </motion.div>
                    {/* <Footer /> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default DashboardLayout