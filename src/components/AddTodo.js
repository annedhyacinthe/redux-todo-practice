import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../redux/action/actions';

const AddTask = ( dispatch ) =>{

  const [newTask, setNewTask] = useState('');
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setNewTask(e.target.value)
  }
  const handleSubmit = () =>{
    console.log('clicked')
    dispatch.add(newTask)
  }

    return(
      <div>
        <input type="text" onChange={ handleChange } />
        <button onClick={ handleSubmit }>submit</button>
      </div>
    )
  }

export default connect(
  null,
  {
    add: add
  }
)(AddTask);