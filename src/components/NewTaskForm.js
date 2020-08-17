import React, { useState } from 'react'
import { CATEGORIES } from '../data';

const NewTaskForm = (props) => {

    let { addNewTask } = props
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Code')


    const submit = (e) => {
        e.preventDefault()
        addNewTask({ name, category})
        setName('')
        setCategory('Code')
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

