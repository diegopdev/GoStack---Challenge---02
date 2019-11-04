import React from 'react';
import './styles.css';

function AdvertsItem({ data }) {
  const { title, content, image } = data;

  return (
    <div className="adverst-container">
      <p className="adverst-title">{title}</p>
      <p className="adverst-content">{content}</p>
      <img src={image} />
    </div>
  );
}

export default AdvertsItem;
