import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import classes from "./Main.module.css";

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");

  const [query, setQuery] = useState("add");
  const [page, setPage] = useState(4);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    async function getUsers() {
      const url = `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <Container>
      <header className={classes.header}>
        <input
          className={classes.input}
          onChange={(value) => setValue(value.target.value)}
          value={value}
          type="text"
          placeholder="Введите текст"
        />

        <button className={classes.button} onClick={setQuery}>
          1
        </button>
      </header>
      <div>
        <ul className={classes.list_users}>
          {users.hits &&
            users.hits
              .filter((author) =>
                author.author
                  .trim()
                  .toLowerCase()
                  .includes(value.trim().toLocaleLowerCase())
              )
              .map((author) => (
                <li key={author.author} className={classes.li}>
                  {author.author}
                </li>
              ))}
        </ul>
      </div>
    </Container>
  );
}
