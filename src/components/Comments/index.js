import React from 'react';
import './styles.css';

function Comments({ data }) {
  return (
    <div className="comments">
      <div className="comments-container">
        <img src={data.author.avatar} />
        <div className="comments-text">
          <p>
            <span>{data.author.name}</span>
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
