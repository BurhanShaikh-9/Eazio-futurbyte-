import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify";
import '../../../assets/styling/style.css'


import "react-toastify/dist/ReactToastify.css";

const WebsiteLayout = () => {
    const motionAnimation = {
        initial: { x: -600 },
        animate: { x: 0 },
        transition: { type: "spring", stiffness: 100 }
    };
    return (
        <React.Fragment>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="webApp">

                <Header />
                <motion.div {...motionAnimation}>
                    <div className="mainBody">
                        <Outlet />
                    </div>
                </motion.div>
            </div>
        </React.Fragment>
    )
}

export default WebsiteLayout