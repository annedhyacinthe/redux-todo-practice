import React from "react";
import AddTask from "./components/AddTodo";
import ShowTask from "./components/ShowTodo";
import "./App.css";

function Todo() {
  return (
    <div className="App">
      <AddTask />
      <ShowTask />
    </div>
  );
}

export default Todo;
