import React from 'react'
import CategoryContainer from '../containers/CategoryContainer'
import TaskContainer from '../containers/TaskContainer'
import TaskListContainer from '../containers/TaskListContainer'
import Profile from '../components/Profile'
import NewTaskForm from '../components/NewTaskForm'
import { CATEGORIES } from '../data'

import { Link } from 'react-router-dom'

class TaskPage extends React.Component {

    state = {
        tasks: [],
        selectedCategory: 'All',
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

    setSelectedCategory = (category) => {
        this.setState({
            selectedCategory: category
        })
    }

    addNewTask = (newTask) => {
        // this.setState({
        //     tasks: [...this.state.tasks, newTask]
        // })
        fetch('http://localhost:3000/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                name: newTask.name,
                category: newTask.category,
                experience_points: newTask.experience_points,
                difficulty: newTask.difficulty
            })
        })
        .then(resp => resp.json())
        .then(task => this.setState({
            tasks: [...this.state.tasks, task]
        }))
    }

    render(){
        return (
            <div className="Tasks">
                <h1> TaskPage</h1>
    
                
                <h1>TO DO LIST</h1>
                    <TaskListContainer tasks={this.state.tasks} />  
                    <br></br>

                    <CategoryContainer 
                        tasks={this.state.tasks} 
                        categories={CATEGORIES}
                        selectedCategory={this.state.selectedCategory}
                        setSelectedCategory={this.setSelectedCategory}
                    />

                    <br></br>
                    <h2>Tasks</h2>
                    <NewTaskForm
                        addNewTask={this.addNewTask}
                    />
                    <br></br>

                    <TaskContainer tasks={this.state.tasks} />
                    <Profile />

                    < Link to='/board'>Message Board</Link>
                    <button onClick={(e)=> this.props.logOut(e)}>Log Out</button>
    
            </div>
        )
    }

}


export default TaskPage