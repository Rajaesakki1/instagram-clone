import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/profile')
      .then(data => {
        setProfile(data.data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='m-5 w-50 pprofile'>
      {profile ? (
        <>
        <div className='d-flex '>
          <img src={profile.avatar} className="profile rounded-circle" alt="Profile" />
          <div className='d-flex align-items-center gap-3'>
          <h5 className=' d-flex justify-content-center'>{profile.username}</h5>
         <button  className='btn btn-outline-secondary ms-2 custom-btn'
        style={{ width: '120px', height: '45px' }}>Edit Profile
</button>
 <button  className='btn btn-outline-secondary ms-2 custom-btn'
        style={{ width: '120px', height: '45px' }} >View archie
</button>
 </div>


        </div>
          <div className=" likes d-flex gap-4 mt-2">
        <div><strong>0</strong> Posts</div>
        <div><strong>120</strong> Followers</div>
        <div><strong>135</strong> Following</div>
      </div>
      <div className='fw-bold'>
            BLACKPINK 💖

      </div>
      <div>
        <div className="d-flex justify-content-around mt-5 border-top pt-3 text-uppercase small">
            <div>Posts</div>
            <div>Reels</div>
            <div>Saved</div>
            <div>Tagged</div>
          </div>
          <div className=' d-flex flex-column gap-3 dd d-flex justify-content-center align-items-center '>
        <div 
  style={{
    width: '555px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  }}
  className='profile bottom'
>
  <i
    className="bi bi-camera fs-1"
    style={{
      fontSize: '18px',
      lineHeight: '1',
    }}
  ></i>
</div>
<div  className=' d-flex flex-column gap-3 dd d-flex justify-content-center align-items-center '>
<b>Share Photos</b>
<p>When you share photos, they will appear on your profile.</p>
</div>

  </div>
       
      </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
