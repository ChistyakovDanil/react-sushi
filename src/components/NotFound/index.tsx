import React from 'react';
import styles from './NotFound.module.scss';

const NotFoundblock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🥺</span>
        <br />
        Нічого не знайдено
      </h1>
      <p>нажаль дана сторінка відсутня у нашому інтернет-магазині</p>
    </div>
  );
};

export default NotFoundblock;
