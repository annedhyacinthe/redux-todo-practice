import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, moveTask } from '../redux/action/actions';

const Task = ( prop ) =>{
    console.log(prop)
    return(
      <li key={prop.id}>
          <h3>
            {prop.content}
          </h3>
          <button onClick = { () => prop.deleteTask(prop.id) }>Delete</button>
          <button onClick = { () => prop.moveTask(prop.status, prop.id) }>Complete</button>
      </li>
    )
  }

export default connect(
  null,
  {
    deleteTask: deleteTask,
    moveTask: moveTask
  }
)(Task);