import React from "react";
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete }){
    return(
        <div>
            {
                tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onDelete={onDelete} />
                    ))
                ) : (
                    <p>No tasks available. Add a task to get started</p>
                )
            }
        </div>
    );
}

export default TaskList;