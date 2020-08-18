import React, { useState } from 'react'
import { CATEGORIES, DIFFICULTY, EXPERIENCE } from '../data';

const NewTaskForm = (props) => {

    let { addNewTask } = props
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Code')
    const [difficulty, setDifficulty] = useState('Easy')
    const [experience_points, setExpPoints] = useState(1)

    // setExpPoints = (difficulty) => {
    //     if(difficulty === 'Easy')
    //         return 2
    //     if(difficulty === 'Medium')
    //         return 5
    //     if(difficulty === 'Hard')
    //         return 10
    // }


    const submit = (e) => {
        e.preventDefault()
        setName('')
        setCategory('Code')
        setDifficulty('Easy')
        setExpPoints(1)
        addNewTask({ name, category, difficulty, experience_points })
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

            <select value={props.difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                {
                    DIFFICULTY.filter(diff => diff !== '')
                    .map(diff => <option key={diff}>{diff}</option>)
                }
            </select>

            <select value={props.experience_points} onChange={(e) => setExpPoints(e.target.value)}>
                {
                    EXPERIENCE.filter(exp => exp !== '')
                    .map(exp => <option key={exp}>{exp}</option>)
                }
            </select>


            <input type='submit' value='Add task' />
        </form>
    )

}

export default NewTaskForm

//     return (
//         <form className="new-task-form" onSubmit={submit}>
//             <input placeholder="New task details" type="text" value={text} onChange={e => setText(e.target.value)} />
//             <select value={category} onChange={e => setCategory(e.target.value)}>
//                 {
//                     CATEGORIES
//                         .filter(cat => cat !== 'All')
//                         .map(cat => <option key={cat}>{cat}</option>)
//                 }
//             </select>
//             <input type="submit" value="Add task" />
//         </form>
//     )
// }

