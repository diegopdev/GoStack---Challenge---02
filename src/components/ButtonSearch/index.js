import React from 'react';

import './style.css';
import search from '../../assets/search.png';

function ButtonSearch() {
  return (
    <div className="btn-search">
      <input type="text" placeholder="Pesquisar" />
      <button type="button">
        <img src={search} />
      </button>
    </div>
  );
}

export default ButtonSearch;
