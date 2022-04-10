import React from 'react';
import styles from './styles.module.scss';

import CardWire from '../Card/CardWire';
import CardWireless from '../CardWireless/CardWireless';

const Main = () => {
  return (
    <div className={styles.main}>
      <p>Наушники</p>
      <div className={styles.headphone}>
        <CardWire />
      </div>
      <p>Беспроводные наушники</p>
      <div className={styles.headphone}>
        <CardWireless />
      </div>
    </div>
  );
};

export default Main;
