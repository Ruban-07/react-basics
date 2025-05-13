import React from "react";

const Numbers = () => {
  const numbersList = [1, 2, 3, 4, 5, 6, 7];
  const userInfo = [
    {
      username: "Ruban",
      email: "ruban@gmail.com",
      location: "Coimbatore",
      selected: true,
    },
    {
      username: "sanjay",
      email: "sanjay@gmail.com",
      location: "Coimbatore",
      selected: true,
    },
    {
      username: "arjun",
      email: "arjun@gmail.com",
      location: "Kerala",
      selected: false,
    },
    {
      username: "Mani",
      email: "mani@gmail.com",
      location: "Ooty",
      selected: false,
    },
  ];
  return (
    <div>
      {numbersList.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
      <hr />
      {userInfo.map((user) => (
        <ol key={Math.random}>
          <li>
            <strong>Username:</strong> {user.username}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Location:</strong> {user.location}
          </li>
          <li>
            <strong>Selected:</strong> {user.selected.toString()}
          </li>
        </ol>
      ))}
    </div>
  );
};

export default Numbers;
