import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import { useState } from "react";

function App() {
  const deleteItem = (item) => {
    console.log("deleted", item.title);
    // let index = todos.indexOf(item);
    // todos.splice(index,1)
    setTodo(
      todos.filter((e) => {
        return e !== item;
      })
    );
  };

  const [todos, setTodo] = useState([
    {
      title: "go to market",
      desc: "bring a milk",
    },
    {
      title: "go to school",
      desc: "complete assignment",
    },
    {
      title: "go to farm",
      desc: "look at cows",
    },
  ]);

  return (
    <>
      <Header title="My ToDo" search={true} />
      <AddTodo />
      <Todos todos={todos} onDelete={deleteItem} />
      <Footer />
    </>
  );
}

export default App;
