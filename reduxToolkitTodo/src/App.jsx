import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="justify-center flex items-center text-3xl font-bold mt-12">
        Learn about redux toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
