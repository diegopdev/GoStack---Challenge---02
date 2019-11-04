import React from 'react';

import MenuAside from '../MenuAside/index';
import AddFeed from '../AddFeed/index';
import PostList from '../PostList/index';
import AdvertsList from '../AdvertsList/index';

import './styles.css';

function Body() {
  return (
    <div className="bg-body">
      <div className="container">
        <div className="content">
          <div className="menu-aside">
            <MenuAside />
          </div>
          <div className="feed">
            <AddFeed />
            <PostList />
          </div>

          <div className="adverts">
            <AdvertsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
