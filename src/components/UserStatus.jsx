import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn) {
    if (isAdmin) {
      return <h1>Welcome Admin!</h1>;
    } else {
      return <h1>Welcome User!</h1>;
    }
  } else {
    return <h1>Login to continue!</h1>;
  }
};

export default UserStatus;
