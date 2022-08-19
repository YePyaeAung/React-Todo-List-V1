import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  // Tasks (TODO List) State
  const [ toDo, setTodDo ] = useState([
    { "id": 1, "title": "Task 1", "completed": true},
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
      {/* Display Todo Lists */}
      { toDo && toDo.length ? '' : 'No Tasks...'}

      { toDo && toDo.map((task, index) => {
        return(
          <React.Fragment>
            <div className="col taskBg">
              <div className={ task.completed ? "done" : ""}>
                <span className="taskNumber">{ index + 1 }</span>
                <span className="taskText">{ task.title }</span>
              </div>
              <div className="iconsWrap">
                <span>
                  <FontAwesomeIcon icon={ faCircleCheck }></FontAwesomeIcon>
                </span>
                <span>
                  <FontAwesomeIcon icon={ faPen }></FontAwesomeIcon>
                </span>
                <span>
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
