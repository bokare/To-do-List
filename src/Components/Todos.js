import React from "react";
import "../App.css";
import TodoItem from "./TodoItem.js";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5"> My List</h2>
      {/* <TodoItem todoItem={todos[0]}/> */}
      {todos.length == 0 ? (
        <>
        <p className="text-center">No Work Today!! ADD Some Task Here...</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="https://cdn0.iconfinder.com/data/icons/interface-1-5/200/Zero-tasks-2-512.png" />
      </div></>
      ) : (
        todos.map((item) => {
          return (
            <TodoItem todoItem={item} key={item.title} onDelete={onDelete} />
          );
        })
      )}
    </div>
  );
};

export default Todos;
