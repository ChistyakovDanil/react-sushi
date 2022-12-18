import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Кошик порожній 😕</h2>
        <p>
          Найімовірніше, ви нічого не додали.
          <br />
          Щоб щось замовити, перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>На головну</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
