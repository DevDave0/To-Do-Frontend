import React from 'react'
import CategoryContainer from '../containers/CategoryContainer'
import TaskContainer from '../containers/TaskContainer'
import TaskListContainer from '../containers/TaskListContainer'

const TaskPage = () => {
    return (
        <div className="Tasks">
            <h1> TaskPage</h1>

            
            <h1>TO DO LIST</h1>
                <TaskListContainer />
                <CategoryContainer />
                <TaskContainer />

        </div>
    )

}


export default TaskPage