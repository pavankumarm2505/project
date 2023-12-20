import React from 'react';
import { Task } from './Task';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css'; 



const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const toggleTask = (id: string | number) => {
    setTasks(tasks => tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };

  const addTask = (newTask: Task) => {
    setTasks(tasks => [...tasks, newTask]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;