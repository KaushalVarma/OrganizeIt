import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import About from './components/About'; // Create this component

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage when the app loads
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newName) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, name: newName } : task)));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // 'all'
  });

  return (
    <Router>
      <div className="App">
        <h1>OrganizeIt</h1>
        <TaskForm onAdd={addTask} />
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route path="/" element={
            <div>
              <button onClick={() => setFilter('all')}>All</button>
              <button onClick={() => setFilter('active')}>Active</button>
              <button onClick={() => setFilter('completed')}>Completed</button>
              <TaskList tasks={filteredTasks} onDelete={deleteTask} onEdit={editTask} onToggleComplete={toggleComplete} />
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
