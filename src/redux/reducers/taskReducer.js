import{ ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../action/actionTypes'

let nextId = 0
export default function taskReducer(state = {}, action){
  switch(action.type){
    case ADD_TODO:{
      const content = action.content
      const newObj = {...state}
      let k = ++nextId
      newObj[k]= {content: content,status: false, id:k}
      return newObj
    }
    case DELETE_TODO:{
      const { id } = action.payload
      // console.log(state,id)
      const newObj = {...state}
      delete newObj[id]
      return newObj
    }
    case TOGGLE_TODO:{
      const { id,status } = action.payload
      const newObj = {...state}
      status === false ? newObj[id].status = true : newObj[id].status = false
      return newObj
    }
    default:
      return state
  }
} 