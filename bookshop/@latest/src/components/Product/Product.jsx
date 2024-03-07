import React, { useState } from "react";
import "./product.css";

const Product = ({ Boktitel, Författare, addToCart , info}) => {
    return (
      <div>
        <article className="card">
          <h2 className="card__title">{Boktitel}</h2>
          <p className="card__auth">{Författare}</p>
          <p className="info">{info}</p>
          <button className="card__button" onClick={addToCart}>
            <b>Add to cart</b>
          </button>
        </article>
      </div>
    );
  };
export default Product;
