import React from 'react';
import { Task } from './Task';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string | number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
  return (
    <div className='task-list'>
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            Completed
          </label>
        </div>
      ))}
    </div>
  );
};
export default TaskList;