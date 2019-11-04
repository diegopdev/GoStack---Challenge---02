import React from 'react';
import './style.css';

import LinkList from '../ListLink/index';
import ButtonSearch from '../ButtonSearch/index';
import ListIcons from '../ListIcons/index';

import logo from '../../assets/logo.png';

function App() {
  return (
    <div className="bg-header">
      <div className="container">
        <div className="content">
          <div className="container-logo">
            <img src={logo} />
          </div>
          <ButtonSearch />
          <LinkList />
          <ListIcons />
        </div>
      </div>
    </div>
  );
}

export default App;
