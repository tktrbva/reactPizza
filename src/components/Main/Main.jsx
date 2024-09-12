import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import PizzaCard from "./pizzaCard";
import PizzaObj from "../../data/pizzas";

const MainCards = ({ search, setSearch, addToBasket ,}) => {
  // const Sort = PizzaObj.sort((a,b)=> a.price- b.price)

  const pizzaCards = () => {
    return PizzaObj.filter((pizza) => {
      if (pizza?.title?.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
      // .sort((a, b) => a.price - b.price)
      .map((pizza, index) => (
        <PizzaCard
          key={index}
          {...pizza}
          addToBasket={addToBasket}
          search={search}
          setSearch={setSearch}
        />
      ));
  };

  return (
    <>
      <h1>Все пиццы</h1>
      <section className={style.pizza_wrapper__cards}>{pizzaCards()}</section>
    </>
  );
};

export default MainCards;
