import React from 'react'
import Task from '../components/Task'

const TaskContainer = (props) => {
    return (
        <div className="Tasks">
            <h3> TaskContainer</h3>
            {props.tasks.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} />)}
        </div>
    )

}


export default TaskContainer