import React, { useState } from 'react'
import { CATEGORIES, DIFFICULTY} from '../data';

const NewTaskForm = (props) => {

    let { addNewTask } = props
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Code')
    const [difficulty, setDifficulty] = useState('Easy')
    const [experience_points, setExpPoints] = useState(1)

    const submit = (e) => {
        e.preventDefault()
        setName('')
        setCategory('Code')
        setDifficulty('Easy')
        setExpPoints(1)
        addNewTask({ name, category, difficulty, experience_points})

    }

    const setDifficultyAndExp = (e) => {
        setDifficulty(e.target.value)
        if(e.target.value === 'Easy'){
            setExpPoints(1)
        } else if (e.target.value === 'Medium'){
            setExpPoints(5)
        } else if (e.target.value === 'Hard'){
            setExpPoints(10)
        } else if (e.target.value === 'Very Hard'){
            setExpPoints(20)
        }
    }

    return(
        <form className='new-task-form' onSubmit={submit}>
            <input placeholder='New Task' type='text' value={name} onChange={(e) => setName(e.target.value)} />

            <select value={props.category} onChange={(e) => setCategory(e.target.value)}>
                {
                    CATEGORIES.filter(category => category !== 'All')
                    .map(category => <option key={category}>{category}</option>)
                }
            </select>

            <select value={props.difficulty} onChange={(e) => setDifficultyAndExp(e)}>
                {
                    DIFFICULTY.filter(diff => diff !== '')
                    .map(diff => <option key={diff}>{diff}</option>)
                }
            </select>


            <input type='submit' value='Add task' />
        </form>
    )

}

export default NewTaskForm