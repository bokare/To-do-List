import React from "react";

const TodoItem = ({ todoItem, onDelete }) => {
  return (
    <div className="my-2 d-flex border-bottom">
      <div className="flex-grow-1">
        <h5>{todoItem.title}</h5>
        <p>{todoItem.desc}</p>
      </div>
      <button
        className="btn px-5"
        type="submit"
        onClick={() => {
          onDelete(todoItem);
        }}
        
      >
       ❌
      </button>
    </div>
  );
};

export default TodoItem;
