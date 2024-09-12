import React from "react";
import style from "./index.module.scss";
import pizzaLogo from "../img/pizza-logo.svg";
import cartImg from "../img/cart.img.jpg";
import { useNavigate } from "react-router-dom";
import CardForBasket from "./CardForBasket";

const Cart = ({ basket, price, deletePizza ,counter}) => {
  const navigate = useNavigate();

  const comeBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className={style.header}>
        <div className={style.logo_wrapper}>
          <img onClick={comeBack} src={pizzaLogo} alt="" />
          <div className={style.logo_wrapper_item}>
            <h2>REACT PIZZA</h2>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </div>
      {basket.length ? (
        <CardForBasket
          basket={basket}
          price={price}
          deletePizza={deletePizza}
          counter={counter}
        />
      ) : (
        <div className={style.cart_main}>
          <h1>Корзина пустая 😕</h1>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейдите на главную страницу.
          </p>
          <img src={cartImg} alt="" />
          <button onClick={comeBack}>Вернуться назад</button>
        </div>
      )}
    </>
  );
};

export default Cart;
