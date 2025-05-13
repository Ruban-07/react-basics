import React from "react";

const ProductInfo = () => {
  const productInformations = {
    productName: "Laptop",
    price: 75000,
    availability: "In Stock",
  };
  return (
    <div>
      <h1>Product Name: {productInformations.productName}</h1>
      <p>Price: {productInformations.price}</p>
      <small>Availability: {productInformations.availability}</small>
    </div>
  );
};

export default ProductInfo;
