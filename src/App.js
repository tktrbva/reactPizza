import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainCards from "./components/Main/Main";
import Cart from "./components/Korzina/Cart";
import { useEffect, useState } from "react";

function App() {
  let jsonPizza = JSON.parse(localStorage.getItem("basket"));
  const [basket, setBasket] = useState(jsonPizza || []);
  let jsonPrice = localStorage.getItem("price");
  const [pricePizza, setPricePizza] = useState(+jsonPrice || 0);
  let jsonCount = localStorage.getItem("count");
  const [counterPizza, setCounterPizza] = useState(+jsonCount || 0);

  const [search, setSearch] = useState("");

  const [sortPopular, setSortPopular] = useState("");

  const addToBasket = (el, price) => {
    const existingItem = basket.find((item) => item.id === el.id);

    if (existingItem) {
      const updatedBasket = basket.map((item) =>
        item.id === el.id ? { ...item, counter: (item.counter || 0) + 1 } : item
      );
      setBasket(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    } else {
      setBasket([...basket, el]);
    }
    setPricePizza(pricePizza + price);
    setCounterPizza(counterPizza + 1);
  };

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(pricePizza));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(counterPizza));
  }, [basket]);

  const deletePizza = (id) => {
    const newPizzaArray = basket.filter((el) => el.id !== id);
    setBasket(newPizzaArray);
    if (id == -1) {
      setBasket([]);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    sortPopular={sortPopular}
                    setSortPopular={setSortPopular}
                    search={search}
                    setSearch={setSearch}
                    counter={counterPizza}
                    pricePizza={pricePizza}
                  />
                  <MainCards
                    sortPopular={sortPopular}
                    search={search}
                    setSearch={setSearch}
                    addToBasket={addToBasket}
                  />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  basket={basket}
                  price={pricePizza}
                  deletePizza={deletePizza}
                  counter={counterPizza}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
