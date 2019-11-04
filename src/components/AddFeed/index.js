import React from 'react';

import ButtonAddFeed from '../ButtonAddFeed/index';
import Diego from '../../assets/Diego.jpeg';

import users from '../../assets/users.png';

import './styles.css';

function AddFeed() {
  return (
    <div className="addFeed">
      <div className="addFeed-title">
        <p>Criar publicação</p>
      </div>

      <div className="div-bottom">
        <div className="photo-title-container">
          <img src={Diego} />
          <p>No que voce está pensando, Diego ?</p>
        </div>

        <div className="btns-add-feed-container">
          <div className="btns-add-feed">
            <ButtonAddFeed title="Foto/Video" icon={users} />
            <ButtonAddFeed title="Marcar amigos" icon={users} />
            <ButtonAddFeed title="Sentimento/..." icon={users} />
            <ButtonAddFeed title="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFeed;
