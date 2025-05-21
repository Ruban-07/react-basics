import React from "react";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import Numbers from "./components/Numbers";
import Vehicle from "./components/Vehicle";
import Password from "./components/Password";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import GreetingMessage from "./components/GreetingMessage";
import Button from "./components/Button";
import CounterApp from "./components/CounterApp";
import Friends from "./components/Friends";

const App = () => {
  return (
    <div>
      <Greeting />
      <CounterApp />
      <ProductInfo />
      <Friends />
      <hr />
      <Numbers />
      <Vehicle />
      <Password isValid={true} />
      <Weather temperature={17} />
      <UserStatus isAdmin={false} loggedIn={true} />
      <GreetingMessage timeOfDays="afternoon" />
      <Button />
    </div>
  );
};

export default App;
