import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  // Tasks (TODO List) State
  const [ toDo, setTodDo ] = useState([
    { "id": 1, "title": "Task 1", "completed": false},
    { "id": 2, "title": "Task 2", "completed": false}
  ]);

  // Temp Tasks
  const [ newTask, setNewTask ] = useState('');
  const [ updateData, setUpdateData ] = useState('');

  // Add Task
  const addTask = () => {
    //
  }

  // Delete Task
  const deleteTask = (id) => {
    //
  }
  
  // Mark Task as Done or Completed
  const markDone = (id) => {
    //
  }

  // Cancel Update
  const cancelUpdate = () => {
    //
  }

  // Change Task For Update
  const changeTask = (e) => {
    //
  }

  // Update Task
  const updateTask = () => {
    //
  }
  return (
    <div className="container App">
      <h2>To Do List App (React Js)</h2>
    </div>
  );
}

export default App;
