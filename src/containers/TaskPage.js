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

    addNewTask = ( newTask) => {

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

            <div>
                <Profile 
                username={localStorage.userName}
                experience_bar={localStorage.experience_bar}
                /> 

                <div className="App">
                    <br></br>
                    <h1 className='title'>VENI VIDI VICI</h1>
                    <p>Conquer all your tasks!</p>


                        <CategoryContainer 
                            tasks={this.state.tasks} 
                            categories={CATEGORIES}
                            selectedCategory={this.state.selectedCategory}
                            setSelectedCategory={this.setSelectedCategory}
                        />


                        <div className='tasks'>
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


                            <TaskContainer 
                                tasks={tasks} 
                                completeTask={this.completeTask} 
                                deleteTask={this.deleteTask}
                            />

                        </div>
                        <br></br>
                        <button className='logout' onClick={(e)=> this.props.logOut(e)}>Log Out</button>
                        {/* < Link to='/board'>Message Board</Link> */}
        
                </div>
            </div>
        )
    }

}





export default TaskPage