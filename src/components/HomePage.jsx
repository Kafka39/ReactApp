import React, { useEffect, useState } from "react";
import classes from "./MainPage/Main.module.css";
import { Link as NavLink, useLocation, useNavigate } from "react-router-dom";

import { Link, Pagination, Stack, PaginationItem } from "@mui/material";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(
    +new URLSearchParams(location.search).get("page") || 1
  );
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    async function getUsers() {
      const url = `http://hn.algolia.com/api/v1/search?query=${value}&page=${
        page - 1
      }`;
      const response = await fetch(url);
      const data = await response.json();

      setUsers(data.hits);
      setTotalPage(data.nbPages);

      if (data.nbPages < page) {
        setPage(1);
        navigate(`/`);
      }
    }
    getUsers();
  }, [page, value]);

  return (
    <>
      <header className={classes.header}>
        <input
          className={classes.input}
          onChange={(value) => setValue(value.target.value)}
          value={value}
          type="text"
          placeholder="Введите текст"
        />
      </header>

      <Stack spacing={2}>
        {!!totalPage && (
          <Pagination
            count={totalPage}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            renderItem={(item) => (
              <PaginationItem
                component={NavLink}
                to={`/?page=${item.page}`}
                {...item}
              />
            )}
          />
        )}
        {
          <div>
            <ul className={classes.list_users}>
              {users &&
                users
                  .filter((author) =>
                    author.author
                      .trim()
                      .toLowerCase()
                      .includes(value.trim().toLowerCase())
                  )
                  .map((author) => (
                    <li key={author.objectID} className={classes.li}>
                      <Link>{author.author}</Link>
                    </li>
                  ))}
            </ul>
          </div>
        }
      </Stack>
    </>
  );
}
