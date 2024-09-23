import React, { useState } from 'react';

function TaskItem({ task, onDelete, onEdit, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.name);

  const handleEdit = () => {
    onEdit(task.id, editValue);
    setIsEditing(false);
  };

  return (
    <div style={styles.taskItem}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)} style={styles.deleteButton}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default TaskItem;
