import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

export function add(content) {
  return { type: ADD_TODO, content: content };
}

export function deleteTask(id) {
  return { type: DELETE_TODO, id: id };
}

export function moveTask(id) {
  return { type: TOGGLE_TODO, id: id };
}
