import React from 'react';
import styles from './styles.module.scss';
import headphone3 from '../../assets/images/headphone3.png';
import headphone4 from '../../assets/images/headphone4.png';
import headphone5 from '../../assets/images/headphone5.png';
import star from '../../assets/icon/star.jpg';

const CardWireless = () => {
  const product = [
    {
      id: 1,
      img: headphone3,
      title: 'BOROFONE BO4',
      price: 7527,
      rate: 4.5,
      wire: false,
    },
    {
      id: 2,
      img: headphone4,
      title: 'BOROFONE BO4',
      price: 7527,
      rate: 4.5,
      wire: false,
    },
    {
      id: 3,
      img: headphone5,
      title: 'BOROFONE BO4',
      price: 7527,
      rate: 4.5,
      wire: false,
    },
  ];

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
            <button className={styles.btn}>Купить</button>
          </div>
        </div>
      </div>
    );
  });
};

export default CardWireless;
