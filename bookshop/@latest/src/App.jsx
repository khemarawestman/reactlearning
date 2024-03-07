import React, { useState } from "react";
import Cart from "./components/Heeader/Cart";
import Product from "./components/Product/Product";
import "./App.css";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Cart cartCount={cartCount} />
      <Product Boktitel="The Great Gatsby" Författare="F. Scott Fitzgerald"  info ="into" addToCart={addToCart} />
      <Product Boktitel= "Hej" Författare="hej" info = "into " addToCart={ addToCart}/>
    </div>
  );
};

export default App;