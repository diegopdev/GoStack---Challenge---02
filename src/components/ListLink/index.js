import React from 'react';

import './styled.css';
import Diego from '../../assets/Diego.jpeg';

function ListLink() {
  return (
    <nav className="linksList">
      <ul>
        <li>
          <div className="container-photo">
            <a href="">
              <img src={Diego} />
              <p>Diego</p>
            </a>
          </div>
        </li>
        <li>
          <a href="">Página Inicial</a>
        </li>
        <li>
          <a href="">Encontrar Amigos</a>
        </li>
        <li>
          <a href="">Criar</a>
        </li>
      </ul>
    </nav>
  );
}

export default ListLink;
