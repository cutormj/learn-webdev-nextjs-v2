import React from 'react';

type CommentProps = {
  id: number;
  user: string;
  time: string;
  comment: string;
};

const Comment: React.FC<CommentProps> = ({ id, user, time, comment }) => {
  return (
    <div className="post ml-6" key={id}>
      <div className="post-header">
        <span className="user text-red-500">{user}</span>
        <code className="time"> {time}</code>
      </div>
      <div className="post-comment">
        <p className="text-blue-500">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
