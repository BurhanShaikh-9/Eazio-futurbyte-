import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/footer'
import SideBar from '../../component/sidebar/sideBar'
import HeaderDashboard from '../../component/header/headerDashboard'

const DashboardLayout = () => {
    return (
        <React.Fragment>
            <HeaderDashboard />
            <SideBar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default DashboardLayout