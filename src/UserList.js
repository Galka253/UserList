import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList = () => {
  const [listOfUser, setListOfUsers] = useState([]);
  console.log(listOfUser);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      {listOfUser.map((el) => (
        <UserCard el={el} />
      ))}
    </div>
  );
};

export default UserList;
