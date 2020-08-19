import React from 'react'

const Task = (props) => {
    let { name, difficulty, experience_points, category } = props.task
    let { completeTask, deleteTask } = props
    return (
        <div className="task-item">

    <div className='label'>{`Category: ${category}`}</div>
            <div>{name}</div>
            <div>{difficulty}</div>
            <div>{`Experience points: ${experience_points}`}</div>
            <button className="complete" onClick={(e) => completeTask(e, props.task)}>Complete Task</button>
            <button className="delete" onClick={(e) => deleteTask(e, props.task)}>Delete Task</button>
            <br></br>
            <br></br>
        </div>
    )

}


export default Task