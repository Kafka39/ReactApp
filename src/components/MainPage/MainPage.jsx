import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import classes from "./Main.module.css";

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    }
    getUsers();
  }, []);

  return (
    <Container>
      <div className={classes.users_block}>
        {users
          .filter((user) =>
            user.username
              .trim()
              .toLowerCase()
              .includes(value.trim().toLocaleLowerCase())
          )
          .map((users) => (
            <li key={users.id}>{users.username}</li>
          ))}
      </div>

      <input
        className={classes.input}
        onChange={(value) => setValue(value.target.value)}
        value={value}
        type="text"
      />
    </Container>
  );
}
