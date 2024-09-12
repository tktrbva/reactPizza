import React, { useEffect } from "react";
import { useState } from "react";
import scss from "./style.module.scss";

import cartImg from "../../img/iconfinder_shopping-cart_2561279 1.svg";
import trashBasket from "../../img/iconfinder_trash-2_3324927 1.svg";
import CardPizza from "./CardPizza";

const CardForBasket = ({ basket, deletePizza, price, counter }) => {
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [countAdd, setCountAdd] = useState(price);

  const changePizzaPrice = (pizzaPrice, status) => {
    setPizzaPrice(
      status == "plus" ? pizzaPrice * countAdd : pizzaPrice - pizzaPrice
    );
  };
  const pizzaLength = basket.length;

  const pizzasBasket = () => {
    return basket.map((el, index) => (
      <CardPizza
        {...el}
        key={index}
        changePizzaPrice={changePizzaPrice}
        pizzaPrice={pizzaPrice}
        deletePizza={deletePizza}
      />
    ));
  };

  return (
    <>
      <article className={scss.container}>
        <section className={scss.cart_header}>
          <div className={scss.cart_right}>
            <img src={cartImg} alt="" />
            <h3>Корзина</h3>
          </div>
          <div className={scss.cart_left}>
            <img src={trashBasket} alt="" />
            <p onClick={() => deletePizza(-1)}>Очистить корзину</p>
          </div>
        </section>

        {pizzasBasket()}
        <section className={scss.cart__bottom}>
          <div className={scss.cart__bottom_details}>
            <span>
              Всего пицц: <b>{counter}</b>
            </span>
            <span>
              Сумма заказа: <b className={scss.price}> {pizzaPrice}</b>
            </span>
          </div>
          <div className={scss.cart__bottom_btns}>
            <a href="/" className={scss.go_back_btn}>
              <span>Вернуться назад</span>
            </a>
            <div className={scss.pay_btn}>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default CardForBasket;
