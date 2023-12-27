import React, { useState } from "react";
import Header from "./components/general/Header";
import Meals from "./components/meals_data/Meals";
import Cart from "./components/cart/Cart";
import AppProvider from "./store/AppProvider";

function App() {

  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <AppProvider>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </AppProvider>
  );
}

export default App;
