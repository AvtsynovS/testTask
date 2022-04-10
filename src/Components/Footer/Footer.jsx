import React from 'react';
import styles from './styles.module.scss';
import planet from '../../assets/icon/planet.jpg';
import vk from '../../assets/icon/vk.jpg';
import telegram from '../../assets/icon/telegram.jpg';
import whatsapp from '../../assets/icon/whatsapp.jpg';
import lable from '../../assets/images/QPICK.jpg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img src={lable} alt='lable' />
      </div>
      <div className={styles.footerMenu}>
        <div>Избранное</div>
        <div>Корзина</div>
        <div>Контакты</div>
      </div>
      <div className={styles.footerMenu}>
        <div>Условия сервиса</div>
        <div className={styles.langueges}>
          <img src={planet} alt='planet' />
          <button className={styles.languege}>Рус</button>
          <button className={styles.languege}>Eng</button>
        </div>
      </div>

      <div className={styles.socialNetworks}>
        <button className={styles.btn}>
          <img src={vk} alt='vk' />
        </button>
        <button className={styles.btn}>
          <img src={telegram} alt='telegram' />
        </button>
        <button className={styles.btn}>
          <img src={whatsapp} alt='watsApp' />
        </button>
      </div>
    </div>
  );
};

export default Footer;
