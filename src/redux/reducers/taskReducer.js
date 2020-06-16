import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../action/actionTypes";

let nextId = 0;
export default function tasks(state = {}, action) {
  switch (action.type) {
    case ADD_TODO: {
      const content = action.content;
      const newObj = { ...state };
      let k = ++nextId;
      newObj[k] = { content: content, status: false, id: k };
      return newObj;
    }
    case DELETE_TODO: {
      const { id } = action;
      let newObj = { ...state };
      delete newObj[id];
      return newObj;
    }
    case TOGGLE_TODO: {
      const { id } = action;
      const newObj = { ...state };
      newObj[id].status = !newObj[id].status;
      return newObj;
    }
    default:
      return state;
  }
}
