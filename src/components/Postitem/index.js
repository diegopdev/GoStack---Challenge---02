import React from 'react';
import Comments from '../Comments/index';

import './styles.css';

function PostItem({ data }) {
  const { comments } = data;
  console.log(comments);

  return (
    <div className="container-post">
      <div>
        <div className="photo-post-container">
          <img src={data.author.avatar} />
          <div className="author">
            <p>{data.author.name}</p>
            <p className="data-post">{data.date}</p>
          </div>
        </div>
      </div>
      <div className="content-post">
        <p>{data.content}</p>
      </div>
      {comments.map((comment) => (
        <Comments key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default PostItem;
