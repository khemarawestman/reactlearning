import React from "react";
import "./cart.css";

const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
    <p className="cart__name">Cart</p>
    <p className="amount">{cartCount}</p> {/* Display cartCount */}
  </div>
  );
};

export default Cart;
