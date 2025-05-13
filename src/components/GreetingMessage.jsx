import React from "react";

const GreetingMessage = ({ timeOfDays }) => {
  if (timeOfDays === "morning") {
    return <h1>Good Morning!</h1>;
  } else if (timeOfDays === "afternoon") {
    return <h1>Good Afternoon!</h1>;
  } else {
    return <h1>Good Night!</h1>;
  }
};

export default GreetingMessage;
