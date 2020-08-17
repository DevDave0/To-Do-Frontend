import React from 'react'

const Task = (props) => {
    let { name, difficulty, experience_points } = props.task
    return (
        <div className="task-item">
            <h4>Task</h4>
            <div>{name}</div>
            <div>{difficulty}</div>
            <div>{`Experience points: ${experience_points}`}</div>
        </div>
    )

}


export default Task