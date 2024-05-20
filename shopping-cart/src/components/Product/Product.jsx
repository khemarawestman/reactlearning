import React from 'react';

function Product(props) {
    console.log(props);
    function handleClick() {
        props.setAmount(props.amount + 1);
    }

    return (
        <article>
            <img src={props.image} alt="" data-testid="product-image" />
            <h2 data-testid="product-title">{props.title}</h2>
            <h3 data-testid="product-brand">{props.brand}</h3>
            <p data-testid="product-description">{props.description}</p>
            <button onClick={handleClick} data-testid="add-to-cart-button">Add to cart</button>
        </article>
    );
}

export default Product;
