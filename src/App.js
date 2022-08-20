import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  // Tasks (TODO List) State
  const [ toDo, setTodDo ] = useState([
    { "id": 2, "title": "Task 2", "completed": false},
    { "id": 1, "title": "Task 1", "completed": true}
  ]);

  // Temp Tasks
  const [ newTask, setNewTask ] = useState('');
  const [ updateData, setUpdateData ] = useState('');

  // Add Task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = { "id": num, "title": newTask, "completed": false};
      setTodDo([ ...toDo, newEntry ]);
      setNewTask('');
    }
  }

  // Delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id );
    setTodDo(newTasks);
  }
  
  // Mark Task as Done or Completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if(task.id === id ){
        return { ...task, completed: !task.completed }
      }
      return task;
    })
    setTodDo(newTask);
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
      {/* Add Task */}
      <div className="row mb-3">
        <div className="col">
          <input
            value={ newTask }
            onChange={ (e) => { setNewTask(e.target.value) }}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button 
            className="btn btn-lg btn-success"
            onClick={ addTask }
          >+ Add Task</button>
        </div>
      </div>

      {/* Update Task */}
      <div className="row mb-5">
        <div className="col">
          <input
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button 
            className="btn btn-lg btn-info mr-20"
          >Update</button>
          <button 
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>

      {/* Display Todo Lists */}
      { toDo && toDo.length ? '' : 'No Tasks...'}

      { toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return(
            <React.Fragment>
              <div className="col taskBg">
                <div className={ task.completed ? "done" : ""}>
                  <span className="taskNumber">{ index + 1 }</span>
                  <span className="taskText">{ task.title }</span>
                </div>
                <div className="iconsWrap">
                  <span title='Complete / Not Complete' onClick={ (e) => markDone(task.id)}>
                    <FontAwesomeIcon icon={ faCircleCheck }></FontAwesomeIcon>
                  </span>
                  <span title='Edit'>
                    <FontAwesomeIcon icon={ faPen }></FontAwesomeIcon>
                  </span>
                  <span title='Delete' onClick={ () => deleteTask(task.id) }>
                    <FontAwesomeIcon icon={ faTrashCan }></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
      })}
    </div>
  );
}

export default App;
