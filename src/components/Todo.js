import React from "react";
import { useDispatch } from "react-redux";

const Task = (prop) => {
  console.log(prop);
  const dispatch = useDispatch();
  return (
    <li key={prop.id}>
      <h3>{prop.content}</h3>
      <button onClick={() => dispatch({ type: "DELETE_TODO", id: prop.id })}>
        Delete
      </button>
      <button onClick={() => dispatch({ type: "TOGGLE_TODO", id: prop.id })}>
        {prop.status ? "Incomplete" : "Complete"}
      </button>
    </li>
  );
};

export default Task;
