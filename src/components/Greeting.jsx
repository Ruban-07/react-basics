import React from "react";
import { FaOpencart } from "react-icons/fa";
const greetingMessage = "Welcome";
const personName = "Ruban";
const currentDate = new Date();
const Greeting = () => {
  return (
    <div>
      <FaOpencart />
      <h1 style={{ color: "Green" }}>
        {greetingMessage} {personName}!
      </h1>
      <p>Date: {currentDate.getDate()}</p>
    </div>
  );
};

export default Greeting;
