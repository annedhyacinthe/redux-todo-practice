import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Todo";

const ShowTask = () => {
  const [todo, setTodo] = useState(null);
  const show = useSelector((state) => state);
  console.log(show);

  useEffect(() => {
    const makeArray = () => {
      if (show) {
        setTodo(Object.values(show));
      }
    };
    makeArray();
  }, [show]);

  return (
    <div>
      <h2>In Process</h2>
      <div>
        {todo && todo.length ? (
          <ul>
            {todo
              .filter((todo) => todo.status === false)
              .map((todo) => {
                return (
                  <Task
                    id={todo.id}
                    content={todo.content}
                    status={todo.status}
                  />
                );
              })}
          </ul>
        ) : (
          "No task"
        )}
      </div>
      <h2>Completed</h2>
      <div>
        {todo && todo.length ? (
          <ul>
            {todo
              .filter((todo) => todo.status === true)
              .map((todo) => {
                return (
                  <Task
                    id={todo.id}
                    content={todo.content}
                    status={todo.status}
                  />
                );
              })}
          </ul>
        ) : (
          "No task"
        )}
      </div>
    </div>
  );
};

export default ShowTask;

