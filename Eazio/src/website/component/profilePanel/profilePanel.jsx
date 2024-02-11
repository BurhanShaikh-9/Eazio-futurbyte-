import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import userImg from '../../../assets/images/user/userImage.webp'
import { MdDashboard } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
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
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';


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
                    <Link className="gridItem">
                        <MdDashboard />
                        <p>Dashboard</p>
                    </Link>
                    <Link to={ROUTES.TASK} className="gridItem">
                        <MdOutlinePlaylistAddCheck />
                        <p>Task</p>
                    </Link>
                    <Link className="gridItem">
                        <FaFile />
                        <p>Invoice</p>
                    </Link>
                    <Link className="gridItem">
                        <FaCloud />
                        <p>Files</p>
                    </Link>
                    <Link className="gridItem">
                        <BsFire />
                        <p>Events</p>
                    </Link>
                    <Link className="gridItem">
                        <HiUsers />
                        <p>Teams</p>
                    </Link>
                    <Link to={ROUTES.MESSENGER} className="gridItem">
                        <BiSolidMessage />
                        <p>Message</p>
                    </Link>
                    <Link className="gridItem">
                        <AiFillTool />
                        <p>Settings</p>
                    </Link>
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