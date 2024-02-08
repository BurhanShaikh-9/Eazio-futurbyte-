import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import userImg from '../../../assets/images/user/userImage.webp'
import { MdDashboard } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";
import { FaFile } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { BiSolidMessage } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PiNotebookFill } from "react-icons/pi";

import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



const ProfilePanel = () => {

    const [userObj, setUserObj] = useState({ name: 'Clayton Santos', image: userImg, email: 'adrain.nader@yahoo.com' });

    return (
        <div className='profilePanel'>
            <div className="pfpPanelInner">
                <div className="accountIcon dbIconTheme">
                    <FaUserAlt />
                </div>
                <div className="dotsIcon dbIconTheme">
                    <BsThreeDots />
                </div>
                <div className="profileAbout">
                    <div className="profileImg">
                        <img src={userObj.image} alt="" />
                    </div>
                    <p className='profileName'>Hello! {userObj.name}</p>
                    <p className='profileEmail'>{userObj.email}</p>
                </div>

                <div className="menuGrid">
                    <div className="gridItem">
                        <MdDashboard />
                        <p>Dashboard</p>
                    </div>
                    <div className="gridItem">
                        <VscTasklist />
                        <p>Task</p>
                    </div>
                    <div className="gridItem">
                        <FaFile />
                        <p>Invoice</p>
                    </div>
                    <div className="gridItem">
                        <FaCloud />
                        <p>Files</p>
                    </div>
                    <div className="gridItem">
                        <BsFire />
                        <p>Events</p>
                    </div>
                    <div className="gridItem">
                        <HiUsers />
                        <p>Teams</p>
                    </div>
                    <div className="gridItem">
                        <BiSolidMessage />
                        <p>Message</p>
                    </div>
                    <div className="gridItem">
                        <AiFillTool />
                        <p>Settings</p>
                    </div>
                </div>

                <div className="contactInfo">
                    <div className="contactInfoInner">
                        <FaPhoneAlt className='clrPhoneIcon'/>
                        <IoMail className='clrMailIcon'/>
                        <PiNotebookFill className='clrNoteIcon'/>
                        <FaTelegramPlane className='clrTeleIcon'/>
                        <IoLogoWhatsapp className='clrWhatsappIcon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePanel