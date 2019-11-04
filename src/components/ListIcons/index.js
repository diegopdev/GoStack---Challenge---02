import React from 'react';

import users from '../../assets/users.png';
import message from '../../assets/message.png';
import notification from '../../assets/notification.png';
import help from '../../assets/help.png';
import arrowDown from '../../assets/arrowDown.png';

import './styles.css';

function ListIcons() {
  return (
    <>
      <div className="listIcons">
        <a href="">
          <img src={users} alt="" />
        </a>

        <a href="">
          <img src={message} alt="" />
        </a>

        <a href="">
          <img src={notification} alt="" />
        </a>
      </div>

      <div className="listIcons-2">
        <a href="">
          <img src={help} alt="" />
        </a>

        <a href="">
          <img src={arrowDown} alt="" />
        </a>
      </div>
    </>
  );
}

export default ListIcons;
