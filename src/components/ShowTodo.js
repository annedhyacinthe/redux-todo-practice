import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import  Task  from './Todo';

const ShowTask = ( prop ) =>{
  const [ todo, setTodo] = useState(null)
  
  useEffect(()=>{
    const makeArray = () =>{
      if(prop.todos){
      setTodo(Object.values(prop.todos))
      }
    }
    makeArray()
  },[prop.todos])

    return(
    <div>
      <h2>In Process</h2>
      <div>
        {todo && todo.length ? 
          <ul> 
            {
            todo.filter((todo) =>todo.status === false).map((todo) => {
              return<Task
                id={todo.id}
                content={todo.content}
                status = {todo.status}
              />
            })}
          </ul> :
          'No task' 
        }
      </div>
      <h2>Completed</h2>
      <div>
        {todo && todo.length ? 
          <ul> 
            {
            todo.filter((todo) =>todo.status === true).map((todo) => {
                return<Task
                  id={todo.id}
                  content={todo.content}
                  status = {todo.status}
                />
              })}
          </ul> :
          'No task' 
        }
      </div>

    </div>
    )
  }

  
  const mapStateToProps = state => {
  return({ todos: state })
  }
  
  export default connect(mapStateToProps)(ShowTask)

