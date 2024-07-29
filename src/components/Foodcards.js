import React from 'react';
import ProductCard from './ProductCard';

const App = () => {
  return (
    <div>
      <ProductCard
        productName="Product 1"
        description="This is the description of Product 1"
        imageSrc="https://via.placeholder.com/150"
        price="10.00"
      />
      <ProductCard
        productName="Product 2"
        description="This is the description of Product 2"
        imageSrc="https://via.placeholder.com/150"
        price="20.00"
      />
    </div>
  );
};

export default App;