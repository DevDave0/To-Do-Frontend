import React from 'react'
import CategoryContainer from '../containers/CategoryContainer'
import TaskContainer from '../containers/TaskContainer'
// import TaskListContainer from '../containers/TaskListContainer'
import Profile from '../components/Profile'
import NewTaskForm from '../components/NewTaskForm'
import FormToggle from '../components/FormToggle'

import { CATEGORIES } from '../data'

import { Link } from 'react-router-dom'

class TaskPage extends React.Component {

    state = {
        tasks: [],
        selectedCategory: 'All',
        showForm: false
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

        fetch('http://localhost:3000/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                id: newTask.id,
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

    deleteTask = (task) => {

        console.log(task.id)
        fetch(`http://localhost:3000/tasks/${task.id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(() => {
            let remainingTasks = this.state.tasks.filter(t => !(t === task))
            this.setState({
                tasks: remainingTasks
            })
        })

    }

    filteredTasks = () =>
    this.state.tasks.filter(
      t =>
        this.state.selectedCategory === 'All' ||
        t.category === this.state.selectedCategory
    )


    render(){

        const tasks = this.filteredTasks()

        return (
            <div className="Tasks">
                <h1> TaskPage</h1>
    
                
                <h1>TO DO LIST</h1>
                    <br></br>

                    <CategoryContainer 
                        tasks={this.state.tasks} 
                        categories={CATEGORIES}
                        selectedCategory={this.state.selectedCategory}
                        setSelectedCategory={this.setSelectedCategory}
                    />

                    <br></br>
                    <h2>Tasks</h2>
                    <FormToggle 
                        on={this.state.showForm}
                        toggle={() => this.setState({
                            showForm: !this.state.showForm
                        })}
                    />
                    {this.state.showForm && (
                    <NewTaskForm
                        addNewTask={this.addNewTask}
                    />)}

                    <br></br>

                    <TaskContainer tasks={tasks} deleteTask={this.deleteTask} />
                    <Profile />

                    < Link to='/board'>Message Board</Link>
                    <button onClick={(e)=> this.props.logOut(e)}>Log Out</button>
    
            </div>
        )
    }

}


export default TaskPage