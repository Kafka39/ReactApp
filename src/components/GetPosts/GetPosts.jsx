import { useState } from "react";

import { Button } from "../Button/Button";

export default function GetPosts() {
  const [content, setContent] = useState(" ");

  function onSubmit(event) {
    const { value } = event.target.elements.inputValue;

    event.preventDefault();

    fetch(`http://localhost:3000/posts/${value}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Неверный ID");
        }

        return response.json();
      })
      .then((json) => setContent(json));
  }

  function toggleButtonClick(e) {
    console.log(e);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="inputValue" placeholder="Введите ID" />
        </p>

        <Button
          buttonIsActive={content.title}
          buttonCliked={toggleButtonClick}
          type="submit"
        >
          Получить данные
        </Button>
      </form>

      <div>
        Контент:
        <p>{content.title ? content.title : "Такого контенте нет"}</p>
      </div>
    </>
  );
}
