import React from 'react'
import CategoryContainer from '../containers/CategoryContainer'
import TaskContainer from '../containers/TaskContainer'
import Profile from '../components/Profile'
import NewTaskForm from '../components/NewTaskForm'
import FormToggle from '../components/FormToggle'
import { CATEGORIES } from '../data'
import { Link } from 'react-router-dom'


class TaskPage extends React.Component {

    state = {
        tasks: [],
        selectedCategory: 'All',
        showForm: false,
        exp: parseInt(localStorage.experience_bar,10),
        img: localStorage.avatar
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
            let name = localStorage.userName
            let result = data.filter(task => {
                if (task.users[0].name === name){
                    return task
                }
            })
            this.setState({
                tasks: result
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
        .then(task => 
            this.createTasklist(task)
        )
    }

    createTasklist = (task) => {
        fetch('http://localhost:3000/tasklists', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                user_id: localStorage.userId,
                task_id: task.id
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({tasks: [...this.state.tasks, data.task]})
        })
    }

    completeTask = (e, task) => {
        e.preventDefault();

        fetch(`http://localhost:3000/tasks/${task.id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(() => {
            // add the tasks experience points attribute to the user.experience_bar
            this.addExperiencePoints(e, task);

            let remainingTasks = this.state.tasks.filter(t => !(t === task))
            this.setState({
                tasks: remainingTasks
            })
        })
    }

    addExperiencePoints = (e, task) => {
        e.persist();

        fetch(`http://localhost:3000/users/${localStorage.userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                experience_bar: parseInt(localStorage.experience_bar, 10) + task.experience_points
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.experience_bar = data.experience_bar
            this.setState({
                exp: localStorage.experience_bar
            })
        })
    }

    deleteTask =(e, task) => {
        e.preventDefault() 

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
                    <TaskContainer 
                        tasks={tasks} 
                        completeTask={this.completeTask} 
                        deleteTask={this.deleteTask}
                    />
                    <Profile 
                        username={localStorage.userName}
                        avatar={localStorage.avatar}
                        experience_bar={localStorage.experience_bar}
                    />

                    < Link to='/board'>Message Board</Link>
                    <button onClick={(e)=> this.props.logOut(e)}>Log Out</button>
    
            </div>
        )
    }

}


export default TaskPage