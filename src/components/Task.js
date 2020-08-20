import React from 'react'

const Task = (props) => {
    let { name, difficulty, experience_points, category } = props.task
    let { completeTask, deleteTask } = props


    let categoryIcon = (category) => {
        if (category === 'Code'){
            return <i class="code icon"></i>
        } else if (category === 'Food'){
            return <i class="coffee icon"></i>
        } else if (category === 'Money'){
            return <i class="dollar sign icon"></i>
        } else if (category === 'Gym'){
            return <i class="heart icon"></i>
        } else if (category === 'Misc'){
            return <i class="plus icon"></i>
        }
    }

    let difficultyIcon = (difficulty) => {
        if (difficulty === 'Easy'){
            return <i class="trophy icon easy"></i>
        } else if (difficulty === 'Medium'){
            return <i class="trophy icon m"></i>
        } else if (difficulty === 'Hard'){
            return <i class="trophy icon hard"></i>
        } else if (difficulty === 'Very Hard'){
            return <i class="trophy icon vhard"></i>
        }
    }
    return (
        <div className="task">

    <div className='label'>{categoryIcon(category)}</div>
            <div className='name'>{name}</div>
            <div className='difficulty'>{difficultyIcon(difficulty)}</div>
            <div className='experience-points'>{`Experience points: ${experience_points}`}</div>
            <button className="complete" onClick={(e) => completeTask(e, props.task)}>Complete Task</button>
            <button className="delete" onClick={(e) => deleteTask(e, props.task)}>Delete Task</button>
            <br></br>
            <br></br>
        </div>
    )

}


export default Task