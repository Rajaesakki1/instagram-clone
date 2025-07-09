import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Story() {
  const[stories,setstories] = useState([]);
  const navigate  = useNavigate();
  let tot = 0;
  useEffect(() => {
    fetch("http://localhost:3000/story")
    .then((data) => data.json())
    .then(data => setstories(data))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div className='story d-flex'>
      <div className='d-none'>{tot = stories.length}</div>
     { stories.length > 0 ?(
      stories.map((Story) => (
  <div
    className='d-flex flex-column align-items-center'
    key={Story.id}
    onClick={() => {
      navigate(`/story/${Story.id}/${tot}`);
    }}
  >
    <div className='gradient-border'>
      <img src={Story.user.avatar} alt="dp" className='story-dp rounded-circle' />
    </div>
    <small className='text-truncate' style={{ width: "50px" }}>
      {Story.user.username}
    </small>
  </div>
))

     


    ) :(
       <p>No stories to show</p>
  )}

    </div>
  )
}

export default Story