import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';

function App() {
  // Tasks (TODO List) State
  const [ toDo, setTodDo ] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
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
    setUpdateData('');
  }

  // Change Task For Update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      completed: updateData.completed ? true : false
    };
    setUpdateData(newEntry);
  }

  // Update Task
  const updateTask = () => {
    let filteredRecord = [...toDo].filter( task => task.id !== updateData.id );
    let updateObj = [...filteredRecord, updateData];
    setTodDo(updateObj);
    setUpdateData('');
  }
  return (
    <div className="container App">
      <h2>To Do List App (React Js)</h2>
      

      { updateData && updateData ? (
        <UpdateForm 
          updateData={updateData} 
          changeTask={changeTask} 
          updateTask={updateTask} 
          cancelUpdate={cancelUpdate} 
        />
      ) : (
        <AddTaskForm 
          newTask={newTask} 
          setNewTask={setNewTask} 
          addTask={addTask}
        />
      )}
      

      {/* Display Todo Lists */}
      { toDo && toDo.length ? '' : 'No Tasks...'}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
