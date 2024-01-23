import React from "react";
import "../App.css";

const AddTodo = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Add Todo</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputTitle" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Title Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
