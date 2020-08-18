import React from 'react'

const Task = (props) => {
    let { name, difficulty, experience_points, category } = props.task
    let { deleteTask } = props
    return (
        <div className="task-item">

    <div className='label'>{`Category: ${category}`}</div>
            <div>{name}</div>
            <div>{difficulty}</div>
            <div>{`Experience points: ${experience_points}`}</div>
            <button className="delete" onClick={() => deleteTask(props.task)}>X</button>
            <br></br>
            <br></br>
        </div>
    )

}


export default Task