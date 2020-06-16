import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => dispatch({ type: "ADD_TODO", content: newTask })}>
        submit
      </button>
    </div>
  );
};

export default AddTask;
