import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function MenuItem({ icon, title }) {
  return (
    <a href="" className="menu-item-container">
      <img src={icon} />
      <p>{title}</p>
    </a>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MenuItem;
