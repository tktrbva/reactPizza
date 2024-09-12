import style from "./style.module.scss";
import { useEffect, useState } from "react";
import plus from "../../img/plus.svg";

const PizzaCard = ({
  title,
  types,
  sizes,
  price,
  imageUrl,
  addToBasket,
  id,
}) => {
  const [typePizza, setTypePizza] = useState(0);
  const [sizePizza, setSizePizza] = useState(0);
  const [countAdd, setCountAdd] = useState(0);

  useEffect(() => {
    const storedPizza = localStorage.getItem("pizza");
    if (storedPizza) {
      const { id: storedId, type, size, counter } = JSON.parse(storedPizza);
      if (id === storedId) {
        setTypePizza(type === "тонкое" ? 0 : 1);
        setSizePizza(sizes.indexOf(size));
        setCountAdd(counter);
      }
    }
  }, []);

  function Add() {
    setCountAdd(countAdd + 1);
    addToBasket(
      {
        id: id,
        size: sizes[sizePizza],
        counter: countAdd,
        price: price,
        img: imageUrl,
        title: title,
        type: typePizza === 0 ? "тонкое" : "традиционное",
      },
      price
    );
    let jsonPizza = JSON.stringify({
      id,
      type: typePizza === 0 ? "тонкое" : "традиционное",
      size: sizes[sizePizza],
      counter: countAdd + 1,
    });
    localStorage.setItem("pizza", jsonPizza);
  }

  return (
    <div className={style.pizza_card}>
      <img src={imageUrl} alt="" />
      <p>{title}</p>
      <div className={style.pizza_card_filtration}>
        <div>
          {types.map((el, index) => {
            return (
              <p
                key={index}
                className={
                  typePizza === index ? style.p_active : style.p_notActive
                }
                onClick={() => setTypePizza(index)}
              >
                {el === 0 ? "тонкое" : "традиционное"}
              </p>
            );
          })}
        </div>
        <div>
          {sizes.map((el, index) => {
            return (
              <p
                key={index}
                className={
                  sizePizza === index ? style.p_active : style.p_notActive
                }
                onClick={() => setSizePizza(index)}
              >
                {el}см.
              </p>
            );
          })}
        </div>
      </div>
      <div className={style.pizza_price}>
        <p>{price} ₽</p>
        <div onClick={Add} className={style.pizza_price_add}>
          <img src={plus} alt="plus" />
          <p>Добавить</p>
          <p className={style.count}>{countAdd}</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
