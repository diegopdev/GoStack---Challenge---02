import React from 'react';
import './styles.css';

function ButtonAddFeed({ icon, title }) {
  return (
    <a href="" className="btn-container">
      <img src={icon} />
      <p>{title}</p>
    </a>
  );
}

export default ButtonAddFeed;
