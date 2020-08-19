import React from 'react'
import Task from '../components/Task'

const TaskContainer = (props) => {
    return (
        <div className="Tasks">
            <br></br>
            {props.tasks.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} />)}
        </div>
    )

}


export default TaskContainer