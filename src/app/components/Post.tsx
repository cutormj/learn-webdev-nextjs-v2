import React from 'react';

type PostProps = {
  id: number;
  user: string;
  time: string;
  postContent: string;
};

const Post: React.FC<PostProps> = ({ id, user, time, postContent }) => {
  return (
    <div className="post" key={id}>
      <div className="post-header">
        <span className="user">{user}</span>
        <span className="time"> id:{id} {time}</span>
      </div>
      <div className="post-content">
        <p>{postContent}</p>
      </div>
    </div>
  );
};

export default Post;
