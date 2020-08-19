import React from 'react'

const Task = (props) => {
    let { name, difficulty, experience_points, category } = props.task
    let { completeTask } = props
    return (
        <div className="task-item">

    <div className='label'>{`Category: ${category}`}</div>
            <div>{name}</div>
            <div>{difficulty}</div>
            <div>{`Experience points: ${experience_points}`}</div>
            <button className="delete" onClick={(e) => completeTask(e, props.task)}>Complete Task</button>
            <br></br>
            <br></br>
        </div>
    )

}


export default Task