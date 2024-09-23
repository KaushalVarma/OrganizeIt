import React from "react";

function TaskItem( {task, onDelete}){
    return(
        <div style={styles.taskItem}>
            <p>{task.name}</p>
            <button onClick={() => onDelete(task.id)} style={styles.deleteButton}>
                Delete
            </button>
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