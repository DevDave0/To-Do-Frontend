import React from 'react'
import Task from '../components/Task'

const TaskContainer = (props) => {
    return (
        <div className="Tasks">
            <h1> TaskContainer</h1>
            {props.tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    )

}


export default TaskContainer