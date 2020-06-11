import { createStore } from 'redux';
import taskReducer from '../reducers/taskReducer';

export default createStore(taskReducer)