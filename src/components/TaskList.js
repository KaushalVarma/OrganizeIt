import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit, onToggleComplete }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onToggleComplete={onToggleComplete} />
        ))
      ) : (
        <p>No tasks available. Add a task to get started!</p>
      )}
    </div>
  );
}

export default TaskList;
