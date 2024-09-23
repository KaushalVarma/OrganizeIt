import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name};
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='App'>
      <h1>OrganizeIt</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
