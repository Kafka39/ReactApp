import { useState } from "react";
import "./App.css";
import GetPosts from "./components/GetPosts/GetPosts";

function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setDate(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <GetPosts />
      <p>{date}</p>
    </>
  );
}

export default App;
