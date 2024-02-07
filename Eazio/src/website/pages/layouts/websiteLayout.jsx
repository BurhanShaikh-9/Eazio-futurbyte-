import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
import { motion } from "framer-motion"


const WebsiteLayout = () => {
    const motionAnimation = {
        initial: { x: -300 },
        animate: { x: 0 },
        transition: { type: "spring", stiffness: 100 }
    };
    return (
        <React.Fragment>
            <Header />
            <motion.div {...motionAnimation}>
                <Outlet />
            </motion.div>
            <Footer />
        </React.Fragment>
    )
}

export default WebsiteLayout