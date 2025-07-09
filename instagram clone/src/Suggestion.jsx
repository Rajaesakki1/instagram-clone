import React, { useEffect, useState } from 'react';


function Suggestion() {
  const [profile,setprofile]=useState(null);
  const[suggestion,setsuggestion ]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then (data => data .json())
    .then(data => setprofile(data))
    .catch(err => console.log(err));

     fetch('http://localhost:3000/suggestion')
    .then (data => data .json())
    .then(data => setsuggestion(data))
    .catch(err => console.log(err));

  },[]);
  return (
    <div>
      <div className='suggestion m-4'>
      {profile  ?
   
      <div className='d-flex align-items-center'>
        
                <img className ="dp rounded-circle "src={profile.avatar} alt={profile.username} />
                <h5>{profile.username}<i className=" bi bi-patch-check-fill  text-primary align-middle ms-1"></i></h5>
                <small className='ns-auto text-primary'>Switch</small>
              </div>
   
    :
    <p>Loading</p>}
    <div className='d-flex '> 
      <p>Suggested for you</p>
      <b className='d'>See All</b>
    </div>
        {suggestion.length > 0 ? (
        <div>
          {suggestion.map((suggestion) => (
            <div className='  my-2 ' key={suggestion.id}>
              <div className='d-flex align-items-center'>
                <img className ="dp rounded-circle "src={suggestion.avatar} alt={suggestion.username} />
                <h5>{suggestion.username}</h5>
                <small className='text-primary ns-auto'>Follow</small>
             </div>
             </div>
          ))
              
          }
        </div>
      ) : (
        <div>Loading Suggestion</div>
      )}
    </div>
    </div>
        
  )
}

export default Suggestion