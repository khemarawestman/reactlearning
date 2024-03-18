import React, { useState, useEffect } from 'react';

const Heading = () => {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    const fetchProducts = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products); 
      } catch (error) {
        console.error("Error fetching products:", error);
       
      }
      setIsLoading(false);
      console.log(products) 
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      {isLoading ? (
        <p>Loading products...</p> 
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.images[1]}></img>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Heading;
