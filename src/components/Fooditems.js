import React, { useState } from 'react';

const Fooditems = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    // You can add your own code to handle adding the product to the cart
  };

  return (
    <div className="product-card">
      <img src={props.imageSrc} alt={props.productName} />
      <h3>{props.productName}</h3>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Fooditems;