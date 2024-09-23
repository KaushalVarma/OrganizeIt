import React, { useState } from "react";

function TaskForm({ onAdd }){
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName.trim()){
            onAdd(taskName);
            setTaskName(''); //Clear Input field
        }
    };

    return(
        <form onSubmit={handleSubmit} style={StyleSheet.form}>
            <input 
                type="text"
                placeholder="Enter a new task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                style = {styles.input}
            />
            <button type="submit" style={styles.button}>
                Add Task
            </button>
        </form>
    );
};

const styles = {
    form: {
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      marginRight: '10px',
      width: '70%',
    },
    button: {
      padding: '10px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  };
  
  export default TaskForm;