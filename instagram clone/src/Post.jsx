import React, { useEffect, useState } from 'react';

function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/posts')
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {post.length > 0 ? (
        <div className=" mmain d-flex flex-column align-items-center">
          {post.map((post) => (
            <div className=' singlebox my-3' key={post.id}>
              <div className='d-flex'>
                <img className ="dp rounded-circle "src={post.user.avatar} alt={post.user.username} />
                <h5>{post.user.username}</h5>
              </div>
              <img className='pos' src={post.imageUrl} alt=""/>
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
                </div>
                <div>
                  <b> {post.likes}</b> 
                    </div>
                    <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>

      )}
    </div>
  );
}

export default Post;