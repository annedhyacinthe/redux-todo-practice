import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

export function add(content) {
  return { type: ADD_TODO, content: content };
}

export function deleteTask(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id: id,
    },
  };
}

export function moveTask(status, id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: id,
      status: status,
    },
  };
}
