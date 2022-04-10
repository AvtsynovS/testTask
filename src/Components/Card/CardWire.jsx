import React from 'react';
import styles from './styles.module.scss';
import headphone from '../../assets/images/headphone.png';
import headphone1 from '../../assets/images/headphone1.png';
import headphone2 from '../../assets/images/headphone2.png';
import star from '../../assets/icon/star.jpg';
import { useState } from 'react';

const CardWire = () => {
  const product = [
    {
      id: 1,
      img: headphone,
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      wire: true,
    },
    {
      id: 2,
      img: headphone1,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5,
      wire: true,
    },
    {
      id: 3,
      img: headphone2,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5,
      wire: true,
    },
    {
      id: 4,
      img: headphone,
      title: 'Apple BYZ S852I',
      price: 9527,
      rate: 4.7,
      wire: true,
    },
    {
      id: 5,
      img: headphone1,
      title: 'GERLAX GH-04',
      price: 6527,
      rate: 4.5,
      wire: true,
    },
    {
      id: 6,
      img: headphone2,
      title: 'BOROFONE BO4',
      price: 7527,
      rate: 4.5,
      wire: true,
    },
  ];

  const [count, setCount] = useState(0);

  const handleclick = () => {
    setCount(count + 1);
  };

  return product.map((item) => {
    return (
      <div key={item.id} className={styles.card}>
        <img className={styles.img} src={item.img} alt='img' />
        <div className={styles.descriptoin}>
          <div>
            <div>{item.title}</div>
            <div class={styles.price}>{item.price} ₽</div>
          </div>
          <div>
            <div className={styles.rate}>
              <img src={star} alt='star' />
              <div>{item.rate}</div>
            </div>
            <button className={styles.btn} onClick={handleclick}>
              Купить
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default CardWire;
