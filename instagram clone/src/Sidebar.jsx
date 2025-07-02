import React from 'react';
import textinsta from './assets/textinsta.jpg'

function Sidebar() {
  return (
    <div className='m-3'> 
    <div className='d-flex flex-column gap-3'>
        <img className="logo-text"src= {textinsta}alt='Instagram text logo' style={{backgroundColor:'red'}}/>
        <div><i class="bi bi-house-door-fill"></i>Home</div>
        <div><i class="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass"></i>Explore</div>
        <div><i class="bi bi-collection-play-fill"></i>Reels</div>
        <div><i class="bi bi-chat-dots"></i>Messages</div>
        <div><i class="bi bi-heart"></i>Notifications</div>
        <div><i class="bi bi-bookmark-plus"></i>Create</div>
        <div><i class="bi bi-clipboard2-data"></i>Dashboard</div>
        <div><i class="bi bi-person-circle"></i>Profile</div>

        <div><i class="bi bi-circle"></i>Meta AI</div>
        <div><i class="bi bi-ui-radios-grid"></i>AI Studio</div>
     </div>
     </div>

  );
}
export default Sidebar;