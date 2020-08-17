import React from 'react'
import CategoryContainer from '../containers/CategoryContainer'
import TaskContainer from '../containers/TaskContainer'
import TaskListContainer from '../containers/TaskListContainer'

class TaskPage extends React.Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/tasks', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                tasks: data
            })
        })
    }

    render(){
        return (
            <div className="Tasks">
                <h1> TaskPage</h1>
    
                
                <h1>TO DO LIST</h1>
                    <TaskListContainer tasks={this.state.tasks} />
                    <CategoryContainer tasks={this.state.tasks} />
                    <TaskContainer tasks={this.state.tasks} />
    
            </div>
        )
    }

}


export default TaskPage