import React from 'react'
import TaskList from '../components/TaskList'
import Task from '../components/Task'

const TaskListContainer = (props) => {


    // let newArray = props.tasks.map(task => {
    //     return task.tasklists
    // })

    // hash = [] 

    // let tasklistArray = newArray.forEach(array => {
    //     array.forEachs(array => {
    //         hash.push(array.name)
    //     })
    // })

    // console.log(tasklistArray)

    
    return (
        <div className="TaskList">
            <h1> TaskListContainer</h1>
            {props.tasks.map(task => <TaskList key={task.id}/>)}
        </div>
    )



}


export default TaskListContainer