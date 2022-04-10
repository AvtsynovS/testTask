import React from 'react';
import styles from './styles.module.scss';
import headphone from '../../assets/images/headphone.png';
import urn from '../../assets/icon/urn.jpg';
import { useState } from 'react';

const Basket = () => {
  const products = [
    {
      id: 1,
      img: headphone,
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      wire: true,
      count: 1,
    },
  ];

  const [count, setCount] = useState(1);

  const addProduct = () => {
    setCount(count + 1);
  };
  const removeProduct = () => {
    setCount(count - 1);
  };

  products.map((product) => {
    return (product.count = count);
  });

  return (
    <div>
      <p>Корзина</p>
      {products.map((item) => {
        return (
          <div key={item.id} className={styles.main}>
            <div className={styles.card}>
              <div>
                <img className={styles.photo} src={item.img} alt='headphone' />
                <div className={styles.countPanel}>
                  <button className={styles.btn} onClick={removeProduct}>
                    -
                  </button>
                  <div className={styles.count}>{item.count}</div>
                  <button className={styles.btn} onClick={addProduct}>
                    +
                  </button>
                </div>
              </div>
              <div className={styles.description}>
                <div>{item.title}</div>
                <div className={styles.price}>{item.price} ₽</div>
              </div>
              <div className={styles.sum}>
                <button className={styles.deleteBtn}>
                  <img src={urn} alt='urn' />
                </button>

                <div className={styles.sumPrice}>{item.price} ₽</div>
              </div>
            </div>
            <div className={styles.total}>
              <div>
                <div>ИТОГО</div>
                <div>₽ {item.price * item.count}</div>
              </div>
              <button>Перейти к оформлению</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
