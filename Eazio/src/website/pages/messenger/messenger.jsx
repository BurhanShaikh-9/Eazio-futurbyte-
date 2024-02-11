import React, { useRef, useState, useCallback, useEffect } from 'react'
import { IoMdSearch } from 'react-icons/io'
import attachUser1 from '../../../assets/images/attachments/attachUser1.png'
import attachUser2 from '../../../assets/images/attachments/attachUser2.png'
import attachUser3 from '../../../assets/images/attachments/attachUser3.png'
import attachUser4 from '../../../assets/images/attachments/attachUser4.png'
import attachUser5 from '../../../assets/images/attachments/attachUser5.png'
import msgImg1 from '../../../assets/images/messages/msg1.jpg'
import msgImg2 from '../../../assets/images/messages/msg2.jpg'

import audio1 from '../../../assets/audio/audio2.mp3'
import { FaPhoneAlt } from "react-icons/fa";
import { IoVideocamSharp } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiPaperclipHorizontalBold } from "react-icons/pi";
import { RiGalleryFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";

import WaveSurfer from 'wavesurfer.js';
import { MdMessage } from "react-icons/md";


const Messenger = () => {

  const [userMsgs, setUserMsgs] = useState([
    { msgUser: attachUser1, status: 'Online', userName: 'Alberta Reyes', msgTime: '12:45', text: 'Adward Keywords Research For Beginners', multiUser: [] },
    { msgUser: attachUser4, status: 'Online', userName: 'Alberta Reyes', msgTime: '12:45', text: 'There is alot of exciting stuff is going on in the stars above us that make astronomy', multiUser: [{ user: attachUser2, status: 1 }, { user: attachUser3, status: 2 }, { user: attachUser3, status: 3 }] },
    { msgUser: attachUser5, status: 'Online', userName: 'Alberta Reyes', msgTime: '12:45', text: 'Adward Keywords Research For Beginners', multiUser: [] },
    { msgUser: attachUser1, status: 'Online', userName: 'Alberta Reyes', msgTime: '12:45', text: 'Adward Keywords Research For Beginners', multiUser: [] },
    { msgUser: attachUser2, status: 'Online', userName: 'Alberta Reyes', msgTime: '12:45', text: 'Adward Keywords Research For Beginners', multiUser: [] },
    { msgUser: attachUser3, status: 'Online', userName: 'Alberta Reyes', msgTime: '12:45', text: 'Adward Keywords Research For Beginners', multiUser: [] },
  ])

  const waveformRef = useRef(null);
  const [waveform, setWaveform] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const wavesurferInstance = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#3361ff',
      progressColor: '#7091ff',
      url: audio1,
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      height: 50,
      barHeight: 2
    });
    setWaveform(wavesurferInstance);

    return () => wavesurferInstance.destroy();
  }, []);

  useEffect(() => {
    if (waveform) {
      playing ? waveform.play() : waveform.pause();
    }
  }, [playing, waveform]);

  const togglePlay = () => {
    setPlaying(!playing);
  };




  const [zoomed, setZoomed] = useState(false);
  const [zoomedImageId, setZoomedImageId] = useState(null);

  const toggleZoom = (imageId) => {
    setZoomed(!zoomed);
    setZoomedImageId(imageId);
  };
  return (
    <div className="messengerTabOuter">
      <div className="messengerTab">
        <div className="messengerTabInner">
          <div className="messagePanel">
            <div className="searchPanel">
              <div className="headerSearchInner">
                <IoMdSearch className="searchIcon" />
                <input type="text" placeholder="Search " />
              </div>
            </div>
            <div className="panelMessages">
              {
                userMsgs.map((item, keyId) => (

                  <div key={keyId} className="panelMsgInner">

                    <div className="msgImage">
                      <div className="msgImgOuter">
                        <div className="msgImageInner">
                          <img src={item.msgUser} alt="" />
                          <span className='activity-g'></span>
                        </div>
                      </div>
                      {
                        item.multiUser.length > 0 &&
                        item.multiUser.map((msgImg, keyId) => (
                          <div key={keyId} className="msgImgOuter">
                            <div className="msgImageInner">
                              <img src={msgImg.user} alt="" />
                              {
                                msgImg.status === 1 && <span className='activity-g'></span>
                              }
                              {
                                msgImg.status === 2 && <span className='activity-y'></span>
                              }
                              {
                                msgImg.status === 3 && <span className='activity-o'></span>
                              }
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <div className="msgInfo">
                      <p className='actDuration'> <span className='activity'>{item.status}</span> <span className='duration'>{item.msgTime}</span> </p>
                      <p className='msgName'>{item.userName}</p>
                      <p className='panelMsg'>{item.text}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="panelMsgFooter">
              <FaPhoneAlt />
              <MdMessage />
              <FaUserFriends />
              <IoMdSettings />
            </div>
          </div>
          <div className="chatConvo">
            <div className="chatConvoHeader">
              <div className="chatConvoHeadSt">
                <FaPhoneAlt />
                <IoVideocamSharp />
              </div>
              <div className="chatConvoHeadMd">
                <span className='activity-static '></span>
                <span>Ina Robertson</span>
              </div>
              <div className="chatConvoHeadEnd">
                <IoMdResize />
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="chattingContainer">
              <div className="chatBox">
                <div className="userImage">
                  <img src={attachUser5} alt="" />
                </div>
                <div className="userAbout">
                  <div className="userAboutInner">
                    <span className='msgerName'>
                      Stephan Park
                    </span>
                    <span className='msgTime'>
                      12:00
                    </span>
                  </div>
                  <div className="userMessage">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit beatae repudiandae quasi aliquam officia, cupiditate reiciendis, exercitationem eaque sapiente aspernatur vero placeat totam quisquam et doloribus ut quidem nobis harum? Dolor, autem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="chatBox otherUser">
                <div className="userImage">
                  <img src={attachUser5} alt="" />
                </div>
                <div className="userAbout">
                  <div className="userAboutInner">
                    <span className='msgerName'>
                      Stephan Park
                    </span>
                    <span className='msgTime'>
                      12:00
                    </span>
                  </div>
                  <div className="userMessage">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit beatae repudiandae quasi aliquam officia, cupiditate reiciendis, exercitationem eaque sapiente aspernatur vero placeat totam quisquam et doloribus ut quidem nobis harum? Dolor, autem.
                  </div>
                </div>
              </div>
              <div className="chatBox">
                <div className="userImage">
                  <img src={attachUser5} alt="" />
                </div>
                <div className="userAbout">
                  <div className="userAboutInner">
                    <span className='msgerName'>
                      Stephan Park
                    </span>
                    <span className='msgTime'>
                      12:00
                    </span>
                  </div>
                  <div className="userAudio">
                    <div className="audioContainer" >
                      <div className="playBtn">
                        <button onClick={togglePlay} style={{ minWidth: '5em' }}>
                          {playing ? <FaCirclePause /> : <FaCirclePlay />}
                        </button>
                      </div>
                      <div className="audioWaveOuter">
                        <div className="audioWaves" ref={waveformRef}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chatBox">
                <div className="userImage">
                  <img src={attachUser5} alt="" />
                </div>
                <div className="userAbout">
                  <div className="userAboutInner">
                    <span className='msgerName'>
                      Stephan Park
                    </span>
                    <span className='msgTime'>
                      12:00
                    </span>
                  </div>
                  <div className="userImages">
                    <div className="userImageContainer">
                      <div className={`imgBox ${zoomedImageId === 'msgImg1' && zoomed ? 'zoomed' : ''}`} >
                        <div className='image-container'>
                          <img src={msgImg1} alt="" />
                        </div>
                        <div className="imgIconBox" onClick={() => toggleZoom('msgImg1')}>
                          <IoMdSearch />
                        </div>
                      </div>
                      <div className={`imgBox ${zoomedImageId === 'msgImg2' && zoomed ? 'zoomed' : ''}`}>
                        <div className='image-container' >
                          <img src={msgImg2} alt="" />
                        </div>
                        <div className="imgIconBox" onClick={() => toggleZoom('msgImg2')}>
                          <IoMdSearch />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chatBox otherUser">
                <div className="userImage">
                  <img src={attachUser5} alt="" />
                </div>
                <div className="userAbout">
                  <div className="userAboutInner">
                    <span className='msgerName'>
                      Stephan Park
                    </span>
                    <span className='msgTime'>
                      12:00
                    </span>
                  </div>
                  <div className="userMessage">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit beatae repudiandae quasi aliquam officia, cupiditate reiciendis, exercitationem eaque sapiente aspernatur vero placeat totam quisquam et doloribus ut quidem nobis harum? Dolor, autem.
                  </div>
                </div>
              </div>
            </div>
            <div className="chatConvoFooter">
              <div className="attachmentMsg">
                <PiPaperclipHorizontalBold />
              </div>
              <div className="mediaMsg">
                <RiGalleryFill />
              </div>
              <div className="writeMsg">
                <input type="text" placeholder='Type message...' />
              </div>
              <div className="sendMsg">
                <IoMdSend />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messenger