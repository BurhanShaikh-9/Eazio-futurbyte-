import React, { useRef, useState } from 'react'
import { MdDashboard, MdOutlinePlaylistAddCheck } from 'react-icons/md'
import { FaRegCalendarMinus } from "react-icons/fa6";
import { BsFilterLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineRise } from "react-icons/ai";
import { IoMdSearch } from 'react-icons/io';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { MdFlag } from "react-icons/md";
import { PiPaperclipHorizontalLight } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { BsPlayCircleFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";
import { BiSolidDownload } from "react-icons/bi";

import attach1 from '../../../assets/images/attachments/attach1.png'
import attach2 from '../../../assets/images/attachments/attach2.png'
import attach3 from '../../../assets/images/attachments/attach3.png'
import attach4 from '../../../assets/images/attachments/attach4.png'

import attachUser1 from '../../../assets/images/attachments/attachUser1.png'
import attachUser2 from '../../../assets/images/attachments/attachUser2.png'
import attachUser3 from '../../../assets/images/attachments/attachUser3.png'
import attachUser4 from '../../../assets/images/attachments/attachUser4.png'
import attachUser5 from '../../../assets/images/attachments/attachUser5.png'

import avatarImg1 from '../../../assets/images/user/avatar1.png'


const Dashboard = () => {
  const fileInputRef = useRef(null);
  const fileUpload = () => {
    fileInputRef.current.click();
  };
  const [attachments, setAttachments] = useState([
    { uploadedImg: attach2, profileImg: attachUser4, imageName: 'Frame6.jpg', imageDate: 'Sep 7 at 2:42 PM' },
    { uploadedImg: attach1, profileImg: attachUser3, imageName: 'Frame6.jpg', imageDate: 'Sep 7 at 2:42 PM' },
    { uploadedImg: attach3, profileImg: attachUser2, imageName: 'Frame6.jpg', imageDate: 'Sep 7 at 2:42 PM' },
    { uploadedImg: attach4, profileImg: attachUser1, imageName: 'Frame6.jpg', imageDate: 'Sep 7 at 2:42 PM' },

  ])





  return (
    <div className="taskTabOuter">

      <div className="taskTab">
        <div className="taskTabInner">
          <div className="taskHeader">
            <ul>
              <li className='taskLiActive'><MdOutlinePlaylistAddCheck /> <span>List Task</span></li>
              <li><MdDashboard /> <span>Boards</span></li>
              <li><FaRegCalendarMinus /> <span>Calendar</span></li>
              <li><BsFilterLeft /> <span>Gantt</span></li>
              <li><RxHamburgerMenu /> <span>Timeline</span></li>
              <li><AiOutlineRise /> <span>Activity</span></li>
            </ul>
            <div className="searchPanel">
              <div className="headerSearchInner">
                <IoMdSearch className="searchIcon" />
                <input type="text" placeholder="Search " />
              </div>
            </div>
          </div>

          <div className="taskPaginate">
            <ul>
              <li><span>Space</span> <MdOutlineKeyboardArrowRight /> </li>
              <li> <span>Name Space </span><MdOutlineKeyboardArrowRight /> </li>
              <li> <span>Name Task </span><MdOutlineKeyboardArrowRight /> </li>
            </ul>
          </div>
          <div className="taskMainBody">

            <div className="taskAditionSection">
              <div className="taskAdditionInner">

                <div className="taskLabel">
                  <label htmlFor="">Name Task</label>
                  <input type="text" placeholder='Search Task' />
                </div>
                <div className="taskLabel">
                  <label htmlFor="">Description Task</label>
                  <textarea rows='6' type="text" placeholder='Description Task' />
                </div>
                <div className="subTask">
                  <label htmlFor="">Sub Tasks ToDo</label>
                  <div className="subTaskInner">
                    <RxDotFilled className='dot' />
                    <input type="text" placeholder='Type Sub Task' />
                    <MdFlag className='flag' />
                    <PiPaperclipHorizontalLight className='uploadMedia' onClick={fileUpload} />
                    <input type="file" className='inputFileUpload' ref={fileInputRef} />
                    <PiClock className='clock' />
                    <img src={avatarImg1} alt="" />
                    <button className='mainButton1 btnSize'>Save</button>
                  </div>

                </div>
                <div className="taskLabel">
                  <button className='mainButton1 btnSize'>Add Task</button>

                </div>
              </div>

              <div className="attachmentBar">
                <div className="attachmentBarInner">
                  <label htmlFor="">Attachments</label>
                  <div className="attachmentsMenu">
                    <CgMenuGridR className='menuAttach' />
                    <BiMenu className='burgerMenuAttach' />
                    <div className="attachmentDownload">
                      <BiSolidDownload />
                      <span>Download All</span>
                    </div>
                  </div>
                </div>
                <div className="attachImgs">
                  <div className="attachImgInner">
                    {
                      attachments.map((item, keyId) => (
                        <div key={keyId} className="attachmentImgCon">
                          <div className="upperSection">
                            <img src={item.uploadedImg} className='uploadedImg' alt="" />
                            <img src={item.profileImg} className='userImg' alt="" />
                          </div>
                          <div className="lowerSection">
                            <p className='imgName'>{item.imageName}</p>
                            <p className='uploadedTime'>{item.imageDate}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>


            </div>

            <div className="taskTracking">
              <div className="taskTrackingInner">
                <div className="taskStats">
                  <div className="taskLabel">
                    <label htmlFor="">CREATED</label>
                    <p> <span>Sep 2, 9:06 pm</span> </p>
                  </div>
                  <div className="taskLabel">
                    <label htmlFor="">TIME TRACKED</label>
                    <p><BsPlayCircleFill className='playBtn' /> <span>0:00</span> </p>
                  </div>
                  <div className="taskLabel">
                    <label htmlFor="">START DATE</label>
                    <p><span>Sep 3, 9:00 pm</span> </p>
                  </div>
                  <div className="taskLabel">
                    <label htmlFor="">DUE DATE</label>
                    <p> <span>Sep 4, 9:00 pm</span> </p>
                  </div>
                </div>
                <div className="taskActivity">
                  <div className="taskActivityInner">
                    <label htmlFor="">LAST ACTIVITY BY TASK</label>
                    <div className="taskListActivity">
                      <div className='taskList'><p><span className='highlighted'>You</span>Created This Task</p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                      <div className='taskList'><p><span className='highlighted'>You</span>Assigned To: <span className='highlighted'>Kenneth Jordan</span> </p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                      <div className='taskList'><p><span className='highlighted'>You</span>Created Sub Task: «Change Style Now»</p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                      <div className='taskList'><p><span className='highlighted'>You</span>Created This Task</p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                      <div className='taskList'><p><span className='highlighted'>You</span>Created Sub Task: « Style Now»</p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                      <div className='taskList'><p><span className='highlighted'>You</span>Assigned To: <span className='highlighted'>Kenneth Jordan</span> </p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                      <div className='taskList'><p><span className='highlighted'>You</span>Created This Task</p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                      <div className='taskList'><p><span className='highlighted'>You</span>Created Sub Task: «Change Style Now»</p><p className='entereDate'>Sep 3, 16:00 pm</p></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="taskComment">
                <div className="taskCommentInner">
                  <label htmlFor="">Comments</label>
                  <div className="allComments">
                    <div className="commentSection">
                      <img src={attachUser5} alt="" />

                      <div className="comments">
                        <div className="firstRow">
                          <div className="firstCol">
                            <span className='commentName'>You</span>
                            <span className='commentTime'>Commented</span>
                          </div>
                          <span className='commentTime'>Just Now</span>
                        </div>
                        <p className='commentMsg'>Internet Advertising What Went Wrong</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="writeComments">
                  <input type="text" placeholder='Comment on Task' />
                  <button className='mainButton1 btnSize'>Comment</button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  )
}

export default Dashboard