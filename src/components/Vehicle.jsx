import React from "react";

const Car = (props) => {
  return (
    <div>
      <img src={props.src} alt="M5" width={500} />
      <h1>My Car Details</h1>
      <p>Brand: {props.brand}</p>
      <p>Model: {props.model}</p>
    </div>
  );
};

const Vehicle = () => {
  return (
    <Car
      brand="BMW"
      model="M5 Competition"
      src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M5-2025/11821/1719462197562/front-left-side-47.jpg"
    />
  );
};

export default Vehicle;
