import React, { Component } from 'react';

import './styles.css';

import MenuItem from '../MenuItem/index';

import react from '../../assets/react.png';
import reactNative from '../../assets/react-native.png';
import node from '../../assets/node.png';
import feed from '../../assets/feed.png';
import message from '../../assets/messageMenu.png';
import watch from '../../assets/watch.png';
import market from '../../assets/marketplace.png';
import flag from '../../assets/flag.png';
import groups from '../../assets/groups.png';
import event from '../../assets/event.png';
import friends from '../../assets/friends.png';

import Diego from '../../assets/Diego.jpeg';

class MenuAside extends Component {
  state = {
    showPlus: false
  };

  show = () => {
    this.setState({ showPlus: true });
  };

  hide = () => {
    this.setState({ showPlus: false });
  };

  render() {
    return (
      <div className="menu-aside-container">
        <div className="container-photo-profile">
          <img src={Diego} />
          <p>Diego Pereira</p>
        </div>
        <MenuItem icon={feed} title="Feed de Noticias" />
        <MenuItem icon={message} title="Menssenger" />
        <MenuItem icon={watch} title="Watch" />
        <MenuItem icon={market} title="Marketplace" />

        <div className="atalhos">
          <p className="title">Atalhos</p>
          <MenuItem icon={react} title="React Native Brasil" />
          <MenuItem icon={node} title="Node.Js" />
          <MenuItem icon={reactNative} title="React.JS" />
        </div>

        <div className="explorar">
          <p className="title">Explorar</p>

          <MenuItem icon={flag} title="Páginas" />
          <MenuItem icon={groups} title="Grupos" />
          <MenuItem icon={event} title="Eventos" />
          <MenuItem icon={friends} title="Lista de Amigos" />

          {!this.state.showPlus && (
            <button className="btn" type="button" onClick={this.show}>
              Ver mais
            </button>
          )}

          {this.state.showPlus && (
            <>
              <MenuItem icon={flag} title="Páginas" />
              <MenuItem icon={groups} title="Grupos" />
              <MenuItem icon={event} title="Eventos" />
              <MenuItem icon={friends} title="Lista de Amigos" />
              <button className="btn" type="button" onClick={this.hide}>
                Ver Menos
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default MenuAside;
