import { useParams ,Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Storyview() {
  const { id ,tot} = useParams();
  const [storyy, setstoryy] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {
  fetch(`http://localhost:3000/story/${id}`)
    .then(data => data.json())
    .then(data => setstoryy(data))
    .catch(err => console.log(err));
}, [id]);
  if (id > tot|| id <= 0 ){
    navigate('/');
  }

  return (
    <div>
      {storyy ?
      
      (
        
        <div className='d-flex justify-content-center align-items-center '>
            <Link to={`http://localhost:5177/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-right-circle"></i></Link>
        
          <img  style={{
      width: '500px',        
      height: '100vh',       
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#f0f0f0',
    }}
  className='mx-3' src={storyy.imageUrl} alt="story"/>
           <Link to={`http://localhost:5177/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-left-circle"></i></Link></div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Storyview;
