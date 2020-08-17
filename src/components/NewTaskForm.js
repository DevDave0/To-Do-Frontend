import React, { useState } from 'react'
import { CATEGORIES, DIFFICULTY } from '../data';

const NewTaskForm = (props) => {

    let { addNewTask } = props
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Code')
    const [difficulty, setDifficulty] = useState('Easy')


    const submit = (e) => {
        e.preventDefault()
        addNewTask({ name, category, difficulty})
        setName('')
        setCategory('Code')
        setDifficulty('Easy')
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

