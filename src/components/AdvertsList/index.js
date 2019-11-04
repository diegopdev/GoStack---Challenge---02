import React, { Component } from 'react';

import AdvertsItem from '../AdvertsItem/index';

class AdvertsList extends Component {
  state = {
    adverts: [
      {
        id: 1,
        title: 'Node JS',
        content: `O Node.js pode ser definido como um ambiente de execução Javascript server-side.`,
        image:
          'https://11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/node-js-main.jpg'
      },
      {
        id: 1,
        title: 'React JS',
        content: `React faz com que a criação de UIs interativas seja uma tarefa fácil.`,
        image: 'https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png'
      },
      {
        id: 1,
        title: 'React Native',
        content: `React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.`,
        image:
          'https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg'
      }
    ]
  };
  render() {
    const { adverts } = this.state;
    return (
      <div>
        {adverts.map((advert) => (
          <AdvertsItem key={advert.id} data={advert} />
        ))}
      </div>
    );
  }
}

export default AdvertsList;
