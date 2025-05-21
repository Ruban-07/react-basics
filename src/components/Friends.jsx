import React from "react";
import { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(["Sanjay", "Yasif", "Bala"]);
  const addFriend = () => setFriends([...friends, "Vinayak"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "Bala"));
  return (
    <div>
      {friends.map((f) => (
        <ul key={Math.random}>
          <li>{f}</li>
        </ul>
      ))}
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
    </div>
  );
};

export default Friends;
