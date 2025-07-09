import React from 'react';
import download from '/assets/download.png'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate = useNavigate();
  
  return (
    <div className='m-3 position-fixed'> 
    <div className='d-flex flex-column gap-3'>
        <img className="logo-text"src= {download}alt='Instagram text logo' style={{backgroundColor:'red'}}/>
        <div><i className="bi bi-house-door-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-collection-play-fill"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Messages</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div><i className="bi bi-bookmark-plus"></i>Create</div>
        <div><i className="bi bi-clipboard2-data"></i>Dashboard</div>
        <div on onClick={() => {navigate ('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>

        <div><i className="bi bi-circle"></i>Meta AI</div>
        <div><i className="bi bi-ui-radios-grid"></i>AI Studio</div>
     </div>
     </div>

  );
}
export default Sidebar;