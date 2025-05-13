import React from "react";

const InvalidPassword = () => <h1>Invalid Password</h1>;
const ValidPassword = () => <h1>Valid Password</h1>;
const Password = ({ isValid }) =>
  isValid ? ValidPassword() : InvalidPassword();

export default Password;
