import scss from "./style.module.scss";
import minus from "../../../img/minus.svg";
import plus from "../../../img/count_plus.svg";
import X from "../../../img/xxx.svg";
import { useEffect, useState } from "react";

const CardPizza = ({
  size,
  counter,
  img,
  title,
  id,
  price,
  deletePizza,
  changePizzaPrice,
  type,
}) => {
  const [counterPizza, setCounterPizza] = useState(counter + 1);
  // const [pizzaPrice, setPizzaPrice] = useState(0);
  // const [countAdd, setCountAdd] = useState(0);

  const totalPrice = counterPizza * price;

  // const changeCounterPlus = () => {
  //   setCounterPizza(counterPizza + 1);
  //   changePizzaPrice(counterPizza * price, "plus");
  // };

  // const changeCounterMinus = () => {
  //   setCounterPizza(counterPizza == 0 ? 0 : counterPizza - 1);
  //   changePizzaPrice(counterPizza * price, "minus");
  // };

  const changeCounterPlus = () => {
    setCounterPizza((prevCounter) => prevCounter + 1);
    changePizzaPrice((counterPizza + 1) * price, "plus");
  };

  const changeCounterMinus = () => {
    if (counterPizza > 0) {
      setCounterPizza((prevCounter) => prevCounter - 1);
      changePizzaPrice((counterPizza - 1) * price, "minus");
    } 
  };

  return (
    <section className={scss.cart_for_basket}>
      <div className={scss.pizza}>
        <img src={img} alt="" />
        <div className={scss.pizza_info}>
          <h2>{title}</h2>
          <p>
            {type} тесто, {size} см.
          </p>
        </div>
      </div>
      <div className={scss.pizza_counter}>
        <img src={minus} alt="" onClick={changeCounterMinus} />
        <p>{counterPizza}</p>
        <img src={plus} alt="" onClick={changeCounterPlus} />
      </div>
      <div className={scss.pizza_price}>
        <p>{totalPrice} ₽</p>
        <img onClick={() => deletePizza(id)} src={X} alt="" />
      </div>
    </section>
  );
};

export default CardPizza;
